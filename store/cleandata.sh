mysql -uroot -pAbc1234!  babel < dbclean.sql

redis-cli del b:u:login
redis-cli del b:u:no

echo restart msg_query
echo restart relation_query
