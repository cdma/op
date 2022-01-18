
systemctl stop firewalld.service

 systemctl disable firewalld



 setenforce 0

 /etc/selinux/config



 https://www.unixmen.com/disable-ipv6-centos-7/


 /etc/sysctl.conf

 net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1


sysctl -w net.ipv6.conf.all.disable_ipv6=1
sysctl -w net.ipv6.conf.default.disable_ipv6=1
