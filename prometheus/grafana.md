https://grafana.com/docs/grafana/latest/installation/rpm/

wget https://dl.grafana.com/enterprise/release/grafana-enterprise-8.3.6-1.x86_64.rpm

yum localinstall grafana-enterprise-8.3.6-1.x86_64.rpm

systemctl daemon-reload

systemctl start grafana-server

systemctl status grafana-server

systemctl edit grafana-server.service

http://192.168.0.106:3000/




