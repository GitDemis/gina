name: Build-Publish

on:
  push:
    branches:
      - 'main'
  workflow_dispatch:
  
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      -
        name: Checkout 
        uses: actions/checkout@v2
      
      - name: 'Login via Azure CLI'
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
          
      - name: Building web app
        uses: azure/appservice-build@v2
        with:
          platform: nodejs

      - name: Deploying web app to Azure
        uses: azure/webapps-deploy@v1
        with:
          app-name: gitdemisweb1
          publish-profile: ${{ secrets.AZURE_WEB_APP_PUBLISH_PROFILE }}
      
