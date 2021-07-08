mysqldump -uroot -p123456 babel --no-data --set-gtid-purged=OFF > babel.sql


mysqldump -uroot -p123456 idgen --set-gtid-purged=OFF > idgen.sql


mysqldump -uroot -pAbc1234! babel --set-gtid-purged=OFF > babel.sql





mysql -uroot -pAbc1234!  babel < dbclean.sql