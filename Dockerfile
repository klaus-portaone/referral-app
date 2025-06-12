# Build Stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production --silent

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production Stage
FROM nginx:stable-alpine AS production

# Create nginx config for Cloud Run
RUN echo 'events {\n\
    worker_connections 1024;\n\
}\n\
\n\
http {\n\
    include /etc/nginx/mime.types;\n\
    default_type application/octet-stream;\n\
    \n\
    server {\n\
        listen 8080;\n\
        root /usr/share/nginx/html;\n\
        index index.html;\n\
        \n\
        # Handle client-side routing (SPA)\n\
        location / {\n\
            try_files $uri $uri/ /index.html;\n\
        }\n\
        \n\
        # Security headers\n\
        add_header X-Frame-Options DENY;\n\
        add_header X-Content-Type-Options nosniff;\n\
        add_header X-XSS-Protection "1; mode=block";\n\
        \n\
        # Gzip compression\n\
        gzip on;\n\
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n\
        \n\
        # Cache static assets\n\
        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {\n\
            expires 1y;\n\
            add_header Cache-Control "public, immutable";\n\
        }\n\
    }\n\
}' > /etc/nginx/nginx.conf

# Copy built app
COPY --from=build /app/build /usr/share/nginx/html

# Cloud Run expects port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]