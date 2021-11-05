1. https://www.cockroachlabs.com/docs/v21.1/start-a-local-cluster

2. cockroach start \
--insecure \
--store=node1 \
--listen-addr=localhost:26257 \
--http-addr=localhost:8080 \
--join=localhost:26257 \
--background


3. cockroach init --insecure --host=localhost:26257

4. cockroach sql --insecure --host=localhost:26257

5. http://localhost:8080

6. grep 'node starting' node1/logs/cockroach.log -A 11

7. CREATE DATABASE babel;

8. use babel;

9. CREATE TABLE babel.msg (
  session_id INT64 NOT NULL,
  msg_id INT64 NOT NULL,
  content STRING NOT NULL,
  migrated INT2 NOT NULL,
  gmt_create TIMESTAMP NOT NULL,
  CONSTRAINT msg_pk PRIMARY KEY (session_id ASC, msg_id DESC),
  INDEX time_idx (session_id ASC, gmt_create DESC)
)

10. CREATE TABLE babel.team_msg (
  session_id INT64 NOT NULL,
  msg_id INT64 NOT NULL,
  content STRING NOT NULL,
  migrated INT2 NOT NULL,
  gmt_create TIMESTAMP NOT NULL,
  CONSTRAINT msg_pk PRIMARY KEY (session_id ASC, msg_id DESC),
  INDEX time_idx (session_id ASC, gmt_create DESC)
);

11. CREATE TABLE babel.msg_version (
  session_id INT64 NOT NULL,
  msg_id INT64 NOT NULL,
  gmt_create TIMESTAMP NOT NULL,
  CONSTRAINT msg_version_pk PRIMARY KEY (session_id ASC)
);

12. CREATE TABLE babel.team_msg_version (
  session_id INT64 NOT NULL,
  msg_id INT64 NOT NULL,
  gmt_create TIMESTAMP NOT NULL,
  CONSTRAINT msg_version_pk PRIMARY KEY (session_id ASC)
);

13. show create table msg;

14. alter table msg ALTER PRIMARY KEY USING COLUMNS (session_id ASC, msg_id ASC);

DROP INDEX msg@msg_session_id_msg_id_key CASCADE;

DROP INDEX msg@time_idx CASCADE;

CREATE INDEX time_idx ON msg (session_id ASC, gmt_create ASC);

alter table msg_version ALTER COLUMN gmt_create TYPE TIMESTAMP WITH TIME ZONE;

alter table msg ALTER COLUMN migrated SMALLINT;

SET sql_safe_updates = false;

alter table msg DROP COLUMN migrated;

alter table msg ADD COLUMN migrated SMALLINT NOT NULL;


15. cockroach start \
--insecure \
--store=node1 \
--listen-addr=localhost:26257 \
--http-addr=localhost:8080 \
--join=localhost:26257,localhost:26258,localhost:26259 \
--background

16. cockroach quit --insecure --host=localhost:26257



