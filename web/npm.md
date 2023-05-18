ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
ELECTRON_CUSTOM_DIR="{{ version }}"
ELECTRON_BUILDER_BINARIES_MIRROR=https://npmmirror.com/mirrors/electron-builder-binaries/



npm -g i eslint-cli

npm i eslint --save-dev



npm config get registry

npm config set registry http://registry.npm.taobao.org/

npm config set registry http://registry.npm.org/

npm config set registry http://registry.cnpmjs.org


npm cache clean --force

npm config get proxy

npm config get https-proxy

npm config delete proxy




Yarn 语法

yarn init
yarn
yarn global add xxx@x.x.x
yarn add xxx@x.x.x --dev
yarn remove xxx
yarn run xxx
npm 语法

npm init
npm install
npm install xxx@x.x.x -g
npm install xxx@x.x.x --save
npm install xxx@x.x.x --save-dev
npm uninstall xxx --save(-dev)
npm run xxx
