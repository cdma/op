https://zhuanlan.zhihu.com/p/237932497

https://www.msys2.org/

C:\msys64\etc\pacman.d

mirrorlist.msys
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/msys/$arch/

mirrorlist.mingw64
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/x86_64/

mirrorlist.mingw32
Server = https://mirrors.tuna.tsinghua.edu.cn/mingw/i686/

mingw64
pacman -Syu
pacman -Syy
pacman -S vim
pacman -S make
pacman -S gcc
pacman -S --noconfirm base-devel
pacman -S --noconfirm mingw-w64-x86_64-toolchain
pacman -S --noconfirm git


安装都成功后，添加C:\msys64\mingw64\bin到PATH环境变量。


x86_64-pc-windows-gnu


$HOME/.cargo/config
[source.crates-io]
replace-with = 'ustc'

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"


[target.x86_64-pc-windows-gnu]

linker = "C:\\msys64\\mingw64\\bin\\gcc.exe"

ar = "C:\\msys64\\mingw64\\bin\\ar.exe"






rustup self uninstall
