# lnd-wallet-draft

Steps to get running from base Ubuntu 17.04 install (with all software updates installed)

### Update Linux
```
sudo apt-get update -y
```

### Install Python
```
sudo apt-get install python
```

### Install Git + Pull Down Code
```
sudo apt-get install git
sudo git clone https://github.com/squareOfNegativeOne/lnd-wallet-draft.git /home/YOUR-USERNAME/dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
```

### Install Node (via NVM)
```
sudo apt-get install curl
sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
STOP AND START YOUR TERMINAL
nvm install node
n=$(which node); \
n=${n%/bin/node}; \
chmod -R 755 $n/bin/*; \
sudo cp -r $n/{bin,lib,share} /usr/local
```

### Install lnd-wallet-draft
```
cd /home/YOUR-USERNAME/dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
sudo npm install
cd app
sudo npm install
cd ..
npm run dev
```



