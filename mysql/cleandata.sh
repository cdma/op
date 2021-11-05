mysql -uroot -pAbc1234!  babel < dbclean.sql

echo "redis-cli flushdb"
echo ""

echo "sbin/tairclient -c 127.0.0.1:5198 -g group_test"
echo "delall 0 all"

echo "restart msg_query"
echo "restart relation_query"
echo ""

# echo "cockroach sql --insecure --host=localhost:26257"
# echo "delete from msg where true"
# echo "delete from team_msg where true"
# echo "delete from msg_version where true"
# echo "delete from team_msg_version where true"
