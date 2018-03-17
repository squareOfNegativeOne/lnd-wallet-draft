# lnd-wallet-draft

Steps to get running from base Ubuntu 17.04 image, with all software updates applied.

### Update Linux
```
sudo apt-get update
```

### Install Misc
```
sudo apt-get install libgconf-2-4
sudo apt-get install curl
sudo apt-get install git
```

### Install Node/NPM
```
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install Git + Pull Down Code
```
git clone https://github.com/squareOfNegativeOne/lnd-wallet-draft.git ~/dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
```

### Install lnd-wallet-draft
```
cd ~/dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
npm install
npm run dev
```