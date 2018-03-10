import { app, BrowserWindow } from 'electron'

/* tslint:disable:no-console */

declare var __dirname: string
let mainWindow: Electron.BrowserWindow

function onReady() {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  })

  const fileName = `file://${__dirname}/index.html`
  console.log('filename - ' + fileName)
  mainWindow.loadURL(fileName)
  mainWindow.on('close', () => app.quit())
}

app.on('ready', () => onReady())
app.on('window-all-closed', () => app.quit())
console.log(`Electron Version ${app.getVersion()}`)
