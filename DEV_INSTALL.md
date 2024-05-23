# Git Download
git clone git@github.com:EnzoZarx/dashuntu.git
cd dashuntu

# Node JS Installation
sudo apt update
sudo apt upgrade
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
npm install

# VS Code Extensions
code --install-extension eamodio.gitlens
code --install-extension ecmel.vscode-html-css
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension pkief.material-icon-theme
code --install-extension xabikos.javascriptsnippets