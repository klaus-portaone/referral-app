# Deploy to Google Cloud Run

## Prerequisites
- Google Cloud CLI installed and authenticated
- Docker installed
- Google Cloud project with billing enabled

## Deploy Commands

### 1. Set your project ID
```bash
export PROJECT_ID=your-project-id
```

### 2. Enable required APIs
```bash
gcloud services enable cloudbuild.googleapis.com run.googleapis.com
```

### 3. Build and push to Google Container Registry
```bash
# Build the image
docker build -t gcr.io/$PROJECT_ID/referral-app:latest .

# Push to GCR
docker push gcr.io/$PROJECT_ID/referral-app:latest
```

### 4. Deploy to Cloud Run
```bash
gcloud run deploy referral-app \
  --image gcr.io/$PROJECT_ID/referral-app:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --max-instances 100
```

### Alternative: One-command deploy
```bash
gcloud run deploy referral-app \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

### Using the service configuration (optional)
```bash
# Update PROJECT_ID in cloud-run-service.yaml first
gcloud run services replace cloud-run-service.yaml
```

## Environment Variables
If your app needs environment variables, add them during deployment:
```bash
gcloud run deploy referral-app \
  --image gcr.io/$PROJECT_ID/referral-app:latest \
  --set-env-vars "NODE_ENV=production,REACT_APP_API_URL=https://your-api.com"
```

## Custom Domain (optional)
```bash
gcloud run domain-mappings create \
  --service referral-app \
  --domain your-domain.com
```