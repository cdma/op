import os, sys
from daemonize import Daemonize
import subprocess
import datetime, threading, time
from subprocess import Popen, PIPE

def main():
        while True:
                p = Popen(['ntpdate', 'time2.aliyun.com'],  stdout=PIPE, stderr=PIPE)
                output, err = p.communicate(b"")
                #result = subprocess.call(["ntpdate", "time2.aliyun.com"] , capture_output=True, text=True)
                #f = open("/tmp/ntp.log","a")
                returncode = "returncode=" + str(p.returncode) + "\n"
                out = "stdout=" + output + "\n"
                t = "time:" + str(datetime.datetime.now().time()) + "\n\n"

                #f.write(returncode)
                #f.write(out)
                #f.write(t)
                #f.close()
                time.sleep(60)


if __name__ == '__main__':
        main()

#        myname=os.path.basename(sys.argv[0])
#        myname = "npt.pid"
#        pidfile='/tmp/%s' % myname       # any name
#        daemon = Daemonize(app=myname,pid=pidfile, action=main)
#        daemon.start()