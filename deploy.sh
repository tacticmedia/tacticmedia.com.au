#!/bin/sh

npm run build

# Staging resources
BUCKET="staging-tacticmedia-com-au-wbillsw8"
DISTRIBUTION="E2LGA8OSVHQ4EZ"

if [ "$1" == "production" ]; then
    # Production resources
    BUCKET="tacticmedia-com-au-q5esp1ej"
    DISTRIBUTION="E6HZ5Z4XHBHWE"
fi

# Cache is set to 30 days
aws s3 sync ./dist "s3://${BUCKET}" --delete --cache-control "private, max-age=2592200"

# Uncomment the one below if the cache-control header is out of whack and needs re-syncing on the S3 end
# aws s3 cp ./dist "s3://${BUCKET}" --recursive --cache-control "private, max-age=2592200"

aws cloudfront create-invalidation --distribution-id $DISTRIBUTION --paths "/*"
