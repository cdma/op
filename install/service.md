1. /etc/systemd/system/wiki.service

[Unit]
Description=Wiki.js
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/node server
Restart=always
# Consider creating a dedicated user for Wiki.js here:
User=nobody
Environment=NODE_ENV=production
WorkingDirectory=/var/wiki

[Install]
WantedBy=multi-user.target


2. systemctl daemon-reload

3. systemctl start wiki

4. systemctl enable wiki

5. systemctl enable wiki

mywikinotyou




