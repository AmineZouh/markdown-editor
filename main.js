const { app, BrowserWindow, Menu} = require("electron");
const menu = require('./menu.js')

let window;

app.on("ready", () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
  window.loadFile("index.html");
});

Menu.setApplicationMenu(menu)
