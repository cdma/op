1. https://www.jianshu.com/p/dd053c18e5ee

2. ssh-keygen or ssh-keygen -t rsa -b 1024 -f yourkeyname -C "备注"

3. cat id_rsa.pub >> ~/.ssh/authorized_keys

4. chmod 600 ~/.ssh/authorized_keys

5. chmod 700 ~/.ssh

6. /etc/ssh/sshd_config
RSAAuthentication yes 
PubkeyAuthentication yes

PermitRootLogin no //禁止root登录
PasswordAuthentication yes //允许密码登录，根据你的情况设置

7. service sshd restart

8. ssh -i ~/.ssh/id_rsa -p 22 user@yourservername

9. ~/.ssh/config
Host server_alias(你的服务器别名)
HostName test.com/192.168.1.1(域名或IP)
Port 22
User user
IdentityFile id_rsa

10. ssh server_alias
