# React Auth Server

## Setting up your .env file
```
touch .env
// set GITHUB_KEY, GITHUB_SECRET and SESSION_SECRET
// Make sure you have added 'https://localhost:8080/_insert_provider_here/callback'
// in your callback settings for each provider
npm run dev
```

## Create self-signed cert
```
mkdir certs
openssl genrsa -out localhost.key 2048
openssl req -new -x509 -key localhost.key -out localhost.cert -days 3650 -subj /CN=localhost
```
