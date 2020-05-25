# Labtecs-Test
This repositoy contains an web and mobile aplication for Labtecs test

## Install packages from yarn or npm
```bash
yarn install
```
or 
```bash
npm install
```

## Install all dependencies
```bash
cd MOBILE
yarn

```
or
```bash
cd WEB
yarn
```
## RUN aplications
MOBILE/myapp
```bash
expo start

```
MOBILE/backend
```bash

yarn start
```
WEB/frontend
```bash
yarn start

```
WEB/backend
```bash
yarn start

```


### Docker Settings

#### Install Docker
You need install Docker(https://docs.docker.com/compose/install/)
After that, you can use `docker` 

#### Create an image
Use docker command to create an image postgres
```bash
docker run --name postgresdb -e POSTGRES_PASSWORD=123 -d -p 5555:5432 postgres
```
After that you can use another docker comand to start the container
```bash
docker start postgresdb
```
And then, use psql to manipulate postgres

```bash
 docker exec -it postgresdb psql -U postgres
```