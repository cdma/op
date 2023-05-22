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




https://help.aliyun.com/document_detail/60750.html
# step 1: 安装必要的一些系统工具
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
# Step 2: 添加软件源信息
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# Step 3: 更新并安装Docker-CE
sudo yum makecache fast
sudo yum -y install docker-ce
# Step 4: 开启Docker服务
sudo service docker start
# 注意：
# 官方软件源默认启用了最新的软件，您可以通过编辑软件源的方式获取各个版本的软件包。例如官方并没有将测试版本的软件源置为可用，您可以通过以下方式开启。同理可以开启各种测试版本等。
# vim /etc/yum.repos.d/docker-ee.repo
# 将[docker-ce-test]下方的enabled=0修改为enabled=1
#
# 安装指定版本的Docker-CE:
# Step 1: 查找Docker-CE的版本:
# yum list docker-ce.x86_64 --showduplicates | sort -r
# Loading mirror speeds from cached hostfile
# Loaded plugins: branch, fastestmirror, langpacks
# docker-ce.x86_64 17.03.1.ce-1.el7.centos docker-ce-stable
# docker-ce.x86_64 17.03.1.ce-1.el7.centos @docker-ce-stable
# docker-ce.x86_64 17.03.0.ce-1.el7.centos docker-ce-stable
# Available Packages
# Step2: 安装指定版本的Docker-CE: (VERSION例如上面的17.03.0.ce.1-1.el7.centos)
# sudo yum -y install docker-ce-[VERSION]

sudo mkdir -p /etc/docker sudo tee /etc/docker/daemon.json <<-'EOF' { "registry-mirrors": ["https://1o0js6qs.mirror.aliyuncs.com"] } EOF 
sudo systemctl daemon-reload sudo systemctl restart docker
curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose



