const { app, BrowserWindow, dialog } = require('electron');

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow();
  const index = require('path').join(__dirname, "index.html");
  mainWindow.loadFile(index).catch((err) => {
    dialog.showMessageBox({ message: err.message })
  });
});
