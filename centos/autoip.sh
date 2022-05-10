#!/bin/sh
#Add by jeson
#Jeson@imoocc.com
#Auto configure ip address

DEF_DEV='enp0s3'
DEV_NAME=$(ls /sys/class/net/|grep en|awk 'NR==1')
if [ "${DEV_NAME}" == "" ];then
   exit
fi
ROUTE=$(route -n|grep "^0.0.0.0"|awk '{print $2}')
#BROADCAST=$(/sbin/ifconfig ${DEV_NAME}|grep -i bcast|awk '{print $3}'|awk -F":" '{print $2}')
BROADCAST=$(/sbin/ifconfig ${DEV_NAME}|grep "inet "|grep -v "inet6"|awk '{print $6}')
#HWADDR=$(/sbin/ifconfig ${DEV_NAME}|grep -i HWaddr|awk '{print $5}')
HWADDR=$(/sbin/ifconfig ${DEV_NAME}|grep "ether"|awk '{print $2}')
#IPADDR=$(/sbin/ifconfig ${DEV_NAME}|grep "inet addr"|awk '{print $2}'|awk -F":" '{print $2}')
IPADDR=$(/sbin/ifconfig ${DEV_NAME}|grep "inet "|grep -v "inet6"|awk '{print $2}')
#NETMASK=$(/sbin/ifconfig ${DEV_NAME}|grep "inet addr"|awk '{print $4}'|awk -F":" '{print $2}')
NETMASK=$(/sbin/ifconfig ${DEV_NAME}|grep "inet "|grep -v "inet6"|awk '{print $4}')
#cat >/tmp/ifcfg-eth0<<EOF
cat >ifcfg-${DEF_DEV}<<EOF
DEVICE=${DEF_DEV}
BOOTPROTO=static
BROADCAST=$BROADCAST
HWADDR=$HWADDR
IPADDR=$IPADDR
NETMASK=$NETMASK
GATEWAY=$ROUTE
ONBOOT=yes
EOF

