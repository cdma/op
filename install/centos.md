1. tzselect

2. 将TZ='Asia/Shanghai'; export TZ这行添加到/etc/profile

3. timedatectl

4. https://www.linuxidc.com/Linux/2016-07/133755.htm

5. yum -y install ntp ntpdate

6.  ntpdate cn.pool.ntp.org

7. hwclock --systohc


8. yum erase java-1.8.0-openjdk java-1.8.0-openjdk-devel

9. yum clean all

10. yum list installed





systemctl stop firewalld.service

 systemctl disable firewalld



 setenforce 0

 /etc/selinux/config



