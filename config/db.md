
1. CREATE DATABASE `babel` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

2. CREATE DATABASE `idgen` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

3. CREATE DATABASE `gorm` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

4. use babel;

5. source babel.sql

6. use idgen;

7. source idgen.sql;

8. mysqldump -uroot -p123456 babel --set-gtid-purged=OFF > babel.sql

9. mysqldump -uroot -p123456 idgen --set-gtid-purged=OFF > idgen.sql

10. java -cp ~/Documents/soft/db/druid-1.1.10.jar com.alibaba.druid.filter.config.ConfigTools Abc1234!

11. mvn clean package -Dmaven.test.skip=true -Ptest

12. https://stackoverflow.com/questions/38205947/sslhandshakeexception-no-appropriate-protocol
jdk.tls.disabledAlgorithms
$JAVA_HOME/lib/security/java.security





