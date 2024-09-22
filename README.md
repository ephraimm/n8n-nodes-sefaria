# @devlikeapro/n8n-nodes-petstore

![n8n logo](n8n.png)

Example (Template) project for [**Petstore OpenAPI spec**](https://petstore3.swagger.io/)
using [**devlikeapro/n8n-openapi-node**](https://github.com/devlikeapro/n8n-openapi-node)

# Run Petstore n8n node locally
Before start modifying the project, we kindly recommend
to run the Petstore locally.

## NodeJS
Make sure you're using Node.js > 20 (we're using [nvm](https://github.com/nvm-sh/nvm)):
```bash
nvm install v22.8
nvm use v22.8
```

## Install n8n 
```bash
npm install n8n -g
```

## Start n8n
```bash
n8n --version
n8n start
```
Open [http://localhost:5678](http://localhost:5678) in your browser and configure it

## Build and link the project
```bash
npm install
npm run test
npm run build
npm link
```

## Add node to n8n
```bash
cd ~/.n8n
mkdir -p custom
cd custom
npm init # press Enter for all questions
npm link @devlikeapro/n8n-nodes-petstore
```

## Start n8n again
```bash
n8n start
```

## Add Petstore Node to new workflow
Find `Petstore` in the node list and add it to your workflow
![screenshot](screenshot.png)

# Modify Project
Now you're ready to start building your n8n community node!
1. Place your `openapi.json` in `nodes/{YourNode}`
2. Replace your project logo in `logo.svg`
3. Rename all `Petstore` matches to `YourNode` 
4. Rename all `petstore` matches to `yournode`
5. Replace all `devlikeapro` to `{yourgithubname}`
6. Add your `NPM_TOKEN` in GitHub Actions
7. Push change
8. Create a new GitHub Release, `1.0.0` in your project
9. Install your node in n8n: `@{yourgithubname}/n8n-nodes-{yournode}`
