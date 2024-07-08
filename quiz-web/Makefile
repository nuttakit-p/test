run-install:
	echo ">> Required Node version 18lst"
	npm install 

run-dev:
	npm run dev 

run-dev-host: 
	npm run dev -- --host

docker-build:
	docker build -t bdms-test-web-app .

docker-run:
	docker run -p 8080:80 bdms-test-web-app
