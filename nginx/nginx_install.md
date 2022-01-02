

https://serverspace.io/support/help/install-and-configure-nginx-on-centos-7/

yum install epel-release -y

yum install nginx

yum install nginx-mod-stream



nginx -t

systemctl enable --now nginx

systemctl restart nginx



systemctl stop firewalld.service

 systemctl disable firewalld
 