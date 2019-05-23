const {app, BrowserWindow, ipcMain} = require('electron');
const path = require ('path');
const fs = require('fs');
const os = require('os');
const url = require('url');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWin;

//create the browser window
function createWindow(){
    mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
       },
       show:false
    });
    mainWin.loadURL(url.format(new URL(`file://${__dirname}/index.html`)));
    mainWin.once('ready-to-show',()=>{
        mainWin.show();
    });   
    mainWin.webContents.openDevTools();
    let contents = mainWin.webContents;
    mainWin.on('closed',()=>{
        mainWin = null;
    });
}

app.on('ready',()=>{
    createWindow();
});

ipcMain