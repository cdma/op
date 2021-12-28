jstat -gcutil  pid  1000 100


java -cp druid-1.0.16.jar com.alibaba.druid.filter.config.ConfigTools you_password
export MAVEN_OPTS="-Xmx1024M -Xss128M -XX:MaxPermSize=1024M -XX:+CMSClassUnloadingEnabled"
jvm 7
dianpin最近在看 jvm ，于是翻看了一下线上机器的配置（ /usr/local/tomcat/bin/catalina.sh ），了解了下配置的含义。并不一定能一直记住，所以记录下来。
CATALINA_OPTS="$CATALINA_OPTS -server -Djava.awt.headless=true
-Xms2560m -Xmx2560m -Xss256k # 限制 java 堆大小为 2560MB，且不可扩展
-XX:PermSize=384m # 永久代默认初始大小（方法区，类、接口、方法等）
-XX:MaxPermSize=512m # 永久代最大值
-XX:NewSize=1024m # 年轻代默认初始大小
-XX:MaxNewSize=1024m # 年轻代最大值
-XX:SurvivorRatio=22 # 年轻代 Eden 与 一个 Survivor 区的空间比例为 22:1
-XX:+UseParNewGC # 使用 ParNew 收集器 （只有 Serial 和 ParNew 这两个年轻代收集器可以和老年代的 CMS 收集器一起使用，ParNew 是多线程的）
-XX:ParallelGCThreads=4 # 并行 GC 时进行内存回收的线程数
-XX:MaxTenuringThreshold=9 # 对象每坚持一次 Minor GC 后年龄+1，当超过这个数值后进入老年代
-XX:+UseConcMarkSweepGC # 使用 ParNew + CMS + Serial Old，Serial Old 会在 CMS 预留内存超过 CMSInitiatingOccupancyFraction 设置的比例时触发使用
-XX:CMSInitiatingOccupancyFraction=60 # CMS 无法做彻底清除，需预留一部分空间供并发收集时程序使用，这个设置预留比例40%
-XX:CMSInitiatingPermOccupancyFraction=70 # 设置永久代使用超过 70% 触发 CMS GC
-XX:+CMSClassUnloadingEnabled # 只有设置才会让永久代触发 CMS GC
-XX:+CMSPermGenSweepingEnabled # 早期版本也需要设置这个才会回收永久代
-XX:+UseCMSInitiatingOccupancyOnly # 如果没有这个参数, 只有第一次会使用 CMSInitiatingPermOccupancyFraction=70 这个值，后面的情况会自动调整
-XX:+CMSParallelRemarkEnabled # 为了减少 CMS 重新标记的暂停时间，开启并行remark
-XX:+UseCMSCompactAtFullCollection # Full GC 完成后进行一次碎片整理
-XX:CMSFullGCsBeforeCompaction=9 # 设置多少次 Full GC 完成后进行一次碎片整理
-XX:+ScavengeBeforeFullGC # Full GC 前调用 Young GC
-XX:+DisableExplicitGC # 设置后自动将System.gc()调用转换成一个空操作
-XX:+ExplicitGCInvokesConcurrent # 当使用 CMS 时希望又保留部分 System.gc() 的功能，只不过这种情况下触发的不是系统GC，而是 CMS GC
-XX:-ReduceInitialCardMarks # 这个是为了解决 jdk 6u18 放入大对象导致 jvm crash bug 的一个配置参数
-XX:SoftRefLRUPolicyMSPerMB=0 # 软引用对象多久被回收，默认为1秒
 
-Djava.nio.channels.spi.SelectorProvider=sun.nio.ch.EPollSelectorProvider -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djava.util.logging.config.file="%CATALINA_HOME%\conf\logging.properties" -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCApplicationConcurrentTime -XX:+PrintHeapAtGC -Xloggc:/data/applogs/heap_trace.txt -XX:-HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/data/applogs/HeapDumpOnOutOfMemoryError"

jdk8
jdk8/bin/java -server -Xms2g -Xmx2g -Xmn1g -XX:MaxMetaspaceSize=512m -XX:SurvivorRatio=8 -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=70 -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark -XX:+DisableExplicitGC -XX:-OmitStackTraceInFastThrow -XX:+PrintGCDateStamps -verbose:gc -XX:+PrintGCDetails -Xloggc:/home/admin/service_gc_20170920102322.log -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=
jd:
cms, yong old 1:1
XX:MaxTenuringThreshold，XX:SurvivorRatio，XX:CMSInitiatingOccupancyFraction，XX:NewRatio
XX:MaxTenuringThreshold=3，XX:SurvivorRatio=8，XX:CMSInitiatingOccupancyFraction=70，XX:NewRatio=1
jd
-server -Djava.awt.headless=true -Xms2048m -Xmx2048m -XX:PermSize=384m -XX:MaxPermSize=383m -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSCompactAtFullCollection -XX:CMSFullGCsBeforeCompaction=0 -XX:+UseFastAccessorMethods -XX:CMSInitiatingOccupancyFraction=70 -XX:+PrintClassHistogram -XX:+PrintGCDetails -XX:+PrintGCTimeStamps
mac uninstall jdk
sudo rm -rf /Library/Java/JavaVirtualMachines/jdk<version>.jdk
sudo rm -rf /Library/PreferencePanes/JavaControlPanel.prefPane
sudo rm -rf /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin
sudo rm -rf /Library/LaunchAgents/com.oracle.java.Java-Updater.plist
sudo rm -rf /Library/PrivilegedHelperTools/com.oracle.java.JavaUpdateHelper
sudo rm -rf /Library/LaunchDaemons/com.oracle.java.JavaUpdateHelper.plist
sudo rm -rf /Library/Preferences/com.oracle.java.Helper-Tool.plist
jinfo:可以输出并修改运行时的java 进程的opts。 
jps:与unix上的ps类似，用来显示本地的java进程，可以查看本地运行着几个java程序，并显示他们的进程号。 
jstat:一个极强的监视VM内存工具。可以用来监视VM内存内的各种堆和非堆的大小及其内存使用量。 
jmap:打印出某个java进程（使用pid）内存内的所有'对象'的情况（如：产生那些对象，及其数量）。 
jconsole:一个java GUI监视工具，可以以图表化的形式显示各种数据。并可通过远程连接监视远程的服务器VM。
详细：在使用这些工具前，先用JPS命令获取当前的每个JVM进程号，然后选择要查看的JVM。 
jstat工具特别强大，有众多的可选项，详细查看堆内各个部分的使用量，以及加载类的数量。使用时，需加上查看进程的进程id，和所选参数。以下详细介绍各个参数的意义。 
jstat -class pid:显示加载class的数量，及所占空间等信息。 
jstat -compiler pid:显示VM实时编译的数量等信息。 
jstat -gc pid:可以显示gc的信息，查看gc的次数，及时间。其中最后五项，分别是young gc的次数，young gc的时间，full gc的次数，full gc的时间，gc的总时间。 
jstat -gccapacity:可以显示，VM内存中三代（young,old,perm）对象的使用和占用大小，如：PGCMN显示的是最小perm的内存使用量，PGCMX显示的是perm的内存最大使用量，PGC是当前新生成的perm内存占用量，PC是但前perm内存占用量。其他的可以根据这个类推， OC是old内纯的占用量。 
jstat -gcnew pid:new对象的信息。 
jstat -gcnewcapacity pid:new对象的信息及其占用量。 
jstat -gcold pid:old对象的信息。 
jstat -gcoldcapacity pid:old对象的信息及其占用量。 
jstat -gcpermcapacity pid: perm对象的信息及其占用量。 
jstat -util pid:统计gc信息统计。 
jstat -printcompilation pid:当前VM执行的信息。 
除了以上一个参数外，还可以同时加上 两个数字，如：jstat -printcompilation 3024 250 6是每250毫秒打印一次，一共打印6次，还可以加上-h3每三行显示一下标题。
jmap是一个可以输出所有内存中对象的工具，甚至可以将VM 中的heap，以二进制输出成文本。 
命令：jmap -dump:format=b,file=heap.bin <pid> 
file：保存路径及文件名 
pid：进程编号 
•jmap -histo:live  pid| less :堆中活动的对象以及大小 
•jmap -heap pid : 查看堆的使用状况信息
jinfo:的用处比较简单，就是能输出并修改运行时的java进程的运行参数。用法是jinfo -opt pid 如：查看2788的MaxPerm大小可以用 jinfo -flag MaxPermSize 2788。
jconsole是一个用java写的GUI程序，用来监控VM，并可监控远程的VM，非常易用，而且功能非常强。使用方法：命令行里打 jconsole，选则进程就可以了。 
JConsole中关于内存分区的说明。
Eden Space (heap)： 内存最初从这个线程池分配给大部分对象。 
Survivor Space (heap)：用于保存在eden space内存池中经过垃圾回收后没有被回收的对象。 
Tenured Generation (heap)：用于保持已经在 survivor space内存池中存在了一段时间的对象。 
Permanent Generation (non-heap): 保存虚拟机自己的静态(refective)数据，例如类（class）和方法（method）对象。Java虚拟机共享这些类数据。这个区域被分割为只读的和只写的， 
Code Cache (non-heap):HotSpot Java虚拟机包括一个用于编译和保存本地代码（native code）的内存，叫做“代码缓存区”（code cache）
•jstack ( 查看jvm线程运行状态，是否有死锁现象等等信息) : jstack pid : thread dump 
•jstat -gcutil  pid  1000 100  : 1000ms统计一次gc情况统计100次；
jcmd pid VM.flags
top
e 内存单位切换

对于长连接，push一类的海量服务端应用，16G内存8核心，推荐的JVM参数如下
2017.06.28更新
jdk 1.7 14g->13g
-Xms13g -Xmx13g -Xss512k -XX:PermSize=384m -XX:MaxPermSize=384m -XX:NewSize=12g -XX:MaxNewSize=12g 
-XX:SurvivorRatio=18 -XX:MaxDirectMemorySize=2g -XX:+UseParNewGC -XX:ParallelGCThreads=4 
-XX:MaxTenuringThreshold=15 -XX:+CMSParallelRemarkEnabled -XX:+CMSScavengeBeforeRemark -XX:+UseConcMarkSweepGC
-XX:+DisableExplicitGC -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=70 
-XX:+ScavengeBeforeFullGC -XX:+UseCMSCompactAtFullCollection -XX:CMSFullGCsBeforeCompaction=9  
-XX:+CMSClassUnloadingEnabled  -XX:CMSInitiatingPermOccupancyFraction=70 -XX:+ExplicitGCInvokesConcurrent  
-XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCApplicationConcurrentTime -XX:+PrintHeapAtGC 
-Xloggc:/data/applogs/heap_trace.txt -XX:-HeapDumpOnOutOfMemoryError 
-XX:HeapDumpPath=/data/applogs/HeapDumpOnOutOfMemoryError
-Xms13g -Xmx13g -Xss512k -XX:MetaspaceSize=384m -XX:MaxMetaspaceSize=384m -XX:NewSize=11g -XX:MaxNewSize=11g -XX:SurvivorRatio=18 -XX:MaxDirectMemorySize=2g -XX:+UseParNewGC -XX:ParallelGCThreads=4 -XX:MaxTenuringThreshold=15 -XX:+UseConcMarkSweepGC -XX:+DisableExplicitGC -XX:+UseCMSInitiatingOccupancyOnly -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark -XX:+CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=70 -XX:+CMSClassUnloadingEnabled -XX:SoftRefLRUPolicyMSPerMB=0 -XX:-ReduceInitialCardMarks -XX:+CMSClassUnloadingEnabled -XX:+ExplicitGCInvokesConcurrent -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCApplicationConcurrentTime -XX:+PrintHeapAtGC -Xloggc:/data/applogs/heap_trace.txt -XX:-HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/data/applogs/HeapDumpOnOutOfMemoryError"
#set java environment
JAVA_HOME=/usr/java/jdk1.8.0_101
CLASSPATH=.:$JAVA_HOME/lib/tools.jar
PATH=$JAVA_HOME/bin:$PATH
export JAVA_HOME CLASSPATH PATH
启用该设置. /etc/profile (点后边有个空格)
可能会触发STW的Full GC呢？
1. Perm空间不足；
2. CMS GC时出现promotion failed和concurrent mode failure（concurrent mode failure发生的原因一般是CMS正在进行，但是由于老年代空间不足，需要尽快回收老年代里面的不再被使用的对象，这时停止所有的线程，同时终止CMS，直接进行Serial Old GC）；
3. 统计得到的Young GC晋升到老年代的平均大小大于老年代的剩余空间；
4. 主动触发Full GC（执行jmap -histo:live [pid]）来避免碎片问题。
然后，我们来逐一分析一下：
* 排除原因2：如果是原因2中两种情况，日志中会有特殊标识，目前没有。
* 排除原因3：根据GC日志，当时老年代使用量仅为20%，也不存在大于2G的大对象产生。
* 排除原因4：因为当时没有相关命令执行。
* 锁定原因1：根据日志发现Full GC后，Perm区变大了，推断是由于永久代空间不足容量扩展导致的。
-Xms16384m -Xmx16384m  -Xmn5120m  -XX:+UseParNewGC  -XX:+CMSParallelRemarkEnabled -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=50 -XX:+CMSScavengeBeforeRemark -XX:MaxTenuringThreshold=15 -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSFullGCsBeforeCompaction=1 -XX:+UseCMSCompactAtFullCollection
