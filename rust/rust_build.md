https://github.com/hyperium/tonic/blob/master/examples/helloworld-tutorial.md

cargo build --bin relation-server --release  --target x86_64-pc-windows-gnu

cargo build --bin msg_cli --release

target/release/msg_cli P2P 10262 5






bad cross build:
1. rustup target add x86_64-unknown-linux-gnu

2. cargo build --target x86_64-unknown-linux-gnu
