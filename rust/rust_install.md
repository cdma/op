1. yum install openssl openssl-devel

2. su - op

3. http://mirrors.ustc.edu.cn/help/rust-static.html

export RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
export RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup
export CARGO_HTTP_MULTIPLEXING=false


4. http://mirrors.ustc.edu.cn/help/crates.io-index.html

$HOME/.cargo/config

[source.crates-io]
replace-with = 'ustc'

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"


5. https://www.rust-lang.org/tools/install

curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

source $HOME/.cargo/env


6. rustc --version

rustup component add clippy

rustup component add rustfmt




https://stackoverflow.com/questions/52045966/how-to-uninstall-rust-that-was-installed-via-rustup

rustup self uninstall





