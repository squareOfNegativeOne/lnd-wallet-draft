# lnd-wallet-draft

Steps to get running from base Ubuntu 17.04 install (with all software updates installed)

### Update Linux
```
sudo apt-get update -y
```

### Install Node/NPM
```
sudo apt-get install curl
sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install Git + Pull Down Code
```
sudo apt-get install git
sudo git clone https://github.com/squareOfNegativeOne/lnd-wallet-draft.git /home/YOUR-USERNAME/dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
```

### Install lnd-wallet-draft
```
cd /home/YOUR-USERNAME/dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
sudo npm install
npm run dev
```