#!/bin/bash

# Generate .htpasswd file for basic auth only if credentials are provided
if [ ! -z "$BASIC_AUTH_USER" ] && [ ! -z "$BASIC_AUTH_PASSWORD" ]; then
  echo "Setting up basic authentication..."
  echo "$BASIC_AUTH_USER:$(openssl passwd -apr1 $BASIC_AUTH_PASSWORD)" > config/.htpasswd
  echo "Basic auth configured for user: $BASIC_AUTH_USER"
else
  echo "No basic auth credentials provided - authentication disabled"
  # Don't create .htpasswd file - this will disable auth in NGINX config
fi
