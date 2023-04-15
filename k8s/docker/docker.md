docker version

docker info

docker images

docker container

docker container ls -all

docker ps -a

docker history nginx:1.7.9

docker run -d  --name websrv -p 80:80 nginx:1.7.9 

docker run -d  nginx:1.7.9 

docker exec -it  websrv  /bin/bash

docker logs websrv

curl 127.0.0.1  80

docker stop websrv

docker rm websrv







docker run -it alpine

docker exec 

docker attach


network
https://stackoverflow.com/questions/61263439/how-to-connect-docker-container-with-host-machines-localhost-mysql-database

docker network create -d bridge --subnet 192.168.0.0/24 --gateway 192.168.0.106 dockernet

docker run -p 8082:8080 --network dockernet -d 6ab907c973d2

in your project set connection string : jdbc:mysql://host.docker.internal:3306/....
