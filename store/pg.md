1. https://www.cockroachlabs.com/docs/stable/install-cockroachdb-linux.html

2.  curl https://binaries.cockroachdb.com/cockroach-v21.1.1.linux-amd64.tgz | tar -xz

3. tar -xf cockroach-v20.2.6.linux-amd64.tgz

4. cp -i cockroach-v21.1.1.linux-amd64/cockroach /usr/local/bin/

5. mkdir -p /usr/local/lib/cockroach

6. cp -i cockroach-v21.1.1.linux-amd64/lib/libgeos.so /usr/local/lib/cockroach/

7. cp -i cockroach-v21.1.1.linux-amd64/lib/libgeos_c.so /usr/local/lib/cockroach/

8. which cockroach

9. cockroach demo

10. SELECT ST_IsValid(ST_MakePoint(1,2));




