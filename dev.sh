#!/bin/bash
docker network create instatest
docker run -d -p 9999:5432 -e POSTGRES_DB=service -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=1234 --name instaclone-db --net instatest postgres
docker build -t insta:test .
docker run -it -p 9998:8000 -p 9997:3000 -v ${PWD}:/code --name instaclone-01 --net instatest insta:test
docker run -it -p 9998:8000 -p 9997:3000 -v "%cd%":/code --name instaclone-01 --net instatest -e POSTGRES_PASSWORD=1234 insta:test
