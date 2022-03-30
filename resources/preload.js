const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    eval: (code) => ipcRenderer.send('eval', code),
    handleResponse: (callback) => ipcRenderer.on("repl-data", callback),
})
