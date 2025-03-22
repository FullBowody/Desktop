export const useElectron = () => {
    const isServer = import.meta.server || typeof window === 'undefined' || typeof window.require === 'undefined';
    const isElectron = !isServer && navigator.userAgent.toLowerCase().includes('electron');
    if (!isElectron || isServer) return { isElectron, getResourcePath: (path: string) => new Promise((resolve, reject) => resolve(path)) };

    // Initialize electron
    const electron = window.require('electron');
    console.log('Electron', electron);

    // Window title bar actions
    // ========================
    const titleBarActions = {
        minimize: () => electron.ipcRenderer.invoke('titlebar:action', 'minimize'),
        toggleMaximize: () => electron.ipcRenderer.invoke('titlebar:action', 'toggleMaximize'),
        isMaximized: () => electron.ipcRenderer.invoke('isMaximized:app', null),
        close: () => electron.ipcRenderer.invoke('close:app', null),
    };

    // Window title bar stats
    // ======================
    const windowStats = ref({
        isMaximized: false,
        isFullscreen: false
    });

    electron.ipcRenderer.on('window:maximizeChanged', (_event, value) => windowStats.value.isMaximized = value);
    electron.ipcRenderer.on('window:fullscreenChanged', (_event, value) => windowStats.value.isFullscreen = value);

    const getResourcePath = (path: string) => {
        return electron.ipcRenderer.invoke('get:resourcePath', path);
    };

    // Initialize ipcRenderer
    return { isElectron, titleBarActions, windowStats, getResourcePath };
};