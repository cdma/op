
1. CREATE DATABASE `babel` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

2. CREATE DATABASE `idgen` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

3. use babel;

4. source babel.sql

5. use idgen;

6. source idgen.sql;

7. mysqldump -uroot -p123456 babel --set-gtid-purged=OFF > babel.sql

8. mysqldump -uroot -p123456 idgen --set-gtid-purged=OFF > idgen.sql





