# lnd-wallet-draft

Steps to get running from base Ubuntu 17.04 image, with all software updates applied.

### Update Linux
```
sudo apt-get update
```

### Install Node/NPM
```
sudo apt-get install curl
sudo curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install Git + Pull Down Code
```
sudo apt-get install git
sudo git clone https://github.com/squareOfNegativeOne/lnd-wallet-draft.git /home/YOUR-USERNAME/dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
```

### Install Misc
```
sudo apt-get install libgconf-2-4
sudo apt-get install node-gyp
```

### Install lnd-wallet-draft
```
cd /home/YOUR-USERNAME/dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
sudo npm install
sudo npm run install-grpc
npm run dev
```

### Install lnd-wallet-draft workaround. If you get an EACES error during npm install
```
sudo npm install --unsafe-perm=true
sudo npm run install-grpc
npm run dev
```