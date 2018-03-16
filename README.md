# lnd-wallet-draft

Steps to get running from base Ubuntu 17.04 install
(these are from the top of my head and wont be confirmed until i reinstall from scratch next time)

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
git clone https://github.com/squareOfNegativeOne/lnd-wallet-draft.git /dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
```

## Install Node (via NVM)
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
command -v nvm (note: that if this just goes to a blank line, stop and restart your terminal)
nvm install node
```

## Install lnd-wallet-draft
```
cd /dev/src/github.com/squareOfNegativeOne/lnd-wallet-draft
npm install
cd app
npm install
cd ..
npm run dev
```



