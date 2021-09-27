import os, sys
from daemonize import Daemonize
import subprocess
import datetime, threading, time
from subprocess import Popen, PIPE

# find /home/op/logs -size +1M -exec rm -f {} \;
def main():
        while True:
                # p = Popen(['find', 'time2.aliyun.com'],  stdout=PIPE, stderr=PIPE)
                commandstr = '''find /home/op/logs -size +1M -exec rm -f {} ;'''
                p = Popen(commandstr.split(),  stdout=PIPE, stderr=PIPE)
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
                time.sleep(60*60)


if __name__ == '__main__':
        main()