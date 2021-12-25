https://dubbo.apache.org/en/docs/v2.7/user/references/telnet/

telnet localhost 20880


echo status | nc -i 1 localhost 20880


ls
ls: list services
ls -l: list services in more details
ls XxxService: list methods for the particular service
ls -l XxxService: list methods for the particular service in more dtails

ps
ps: list service ports
ps -l: list service addresses
ps 20880: show connection info for the particular port
ps -l 20880: show connection info for the particular port in more details

cd
cd XxxService: switch default service. When default service is set, service parameter can be ignored in all commands when it’s needed
cd /: reset default service

pwd
pwd: show what current default service is

trace
trace XxxService: trace method invocation once for the given service
trace XxxService 10: trace method invocations 10 times for the given service
trace XxxService xxxMethod: trace particular method invocation once for the given service
trace XxxService xxxMethod 10: trace particular method invocations 10 times for the given service

count
count XxxService: count method invocation once for the given service
count XxxService 10: count method invocations 10 times for the given service
count XxxService xxxMethod: count particular method invocation once for the given service
count XxxService xxxMethod 10: count particular method invocation 10 times for the given service

invoke
invoke XxxService.xxxMethod(1234, "abcd", {"prop" : "value"}): invoke particular method for the given service
invoke com.xxx.XxxService.XxxService.xxxMethod(1234, "abcd", {"prop" : "value"}): invoke particular method for the given service
invoke xxxMethod(1234, "abcd", {"prop" : "value"}): invoke particular method for the default service
invoke xxxMethod({"name":"zhangsan","age":12,"class":"org.apache.dubbo.qos.legacy.service.Person"}) :When there is parameter overload, or the type conversion fails, you can specify the class to be converted by adding the class attribute
When the parameter is Map<Integer, T> and the key type is Integer, it is recommended to specify the type. E.g:invoke com.xxx.xxxApiService({"3":0.123, "class":"java.util.HashMap"})

select 1
select 1: used when the invoke command matches multiple methods, select the method to be called according to the prompt list

status
status: show summarized status. This status summarizes statuses from all resources, and it shows OK when all resources are OK, shows ERROR when any resource has ERROR, and WARN when any has WARN.

status -l: show status list
log 2
log debug: modify logger level to debug
log 100: examine the last 100 characters from the file logger

help
help: show help for telnet commands
help xxx: show help for particular telnet command

clear
clear: clear screen
clear 100: only clear particular lines on the screen

exit
exit: exit current telnet session

shutdown 1
shutdown: shutdown dubbo application
shutdown -t 1000: delay 1000 ms to shutdown dubbo application

