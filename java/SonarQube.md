https://www.cnblogs.com/zhongyuanzhao000/p/11686522.html

CREATE DATABASE sonar CHARACTER SET utf8 COLLATE utf8_general_ci;

wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-7.2.zip

sonar.jdbc.url=jdbc:mysql://localhost:3306/sonar?useUnicode=true&characterEncoding=utf8&rewriteBatchedStatements=true&useConfigs=maxPerformance&useSSL=false

./sonar.sh start

http://localhost:9000/

admin
123

wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-2.8.zip




mvn sonar:sonar \
    -Dsonar.host.url=http://localhost:9000 \
    -Dsonar.login=0ba332dfb69fd1f11ed206a7fc856453cba2d23f \
    -Dsonar.java.binaries=target/sonar

