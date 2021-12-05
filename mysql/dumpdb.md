mysqldump -uroot -p123456 babel --set-gtid-purged=OFF > babel.sql


mysqldump -uroot -p123456 idgen --set-gtid-purged=OFF > idgen.sql



1. mysqldump -uroot -p123456 babel --no-data --set-gtid-purged=OFF > babel.sql


2. mysqldump -uroot -p123456 idgen --set-gtid-purged=OFF > idgen.sql

3. mysqldump -uroot -p123456 gorm --no-data --set-gtid-purged=OFF > gorm.sql

4. mysqldump -uroot -p123456 --all-databases --set-gtid-purged=OFF > mysql.sql




mysqldump -uroot -pAbc1234! babel --set-gtid-purged=OFF > babel.sql

mysqldump -uroot -pAbc1234! idgen --set-gtid-purged=OFF > idgen.sql


b. mysql -uroot -pAbc1234!  babel < dbclean.sql
