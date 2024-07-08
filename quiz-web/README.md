### bdms-test

## stack and tools

- ViteJS + ReactTS https://vitejs.dev
- MUI https://mui.com
- Docker https://www.docker.com
- nginx https://www.nginx.com

## How to run project

# Run Local

- step 1 run command install package
  make: "run-install"
  or npm: "npm install"

- step 2 run command run local
  make: "run-dev"
  or npm: "npm run dev"

# Run Dockerfile

- step 1 run command build app
  make: "make docker-build"
  or docker: "docker build -t bdms-test-web-app ."

- step 2 run command run images
  make: "make docker-run"
  or docker: "docker run -p 8080:80 bdms-test-web-app"
