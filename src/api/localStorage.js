export function actionLocalStorage(action, key, data) {
    switch (action) {
        case 'set':
            localStorage.setItem(key, JSON.stringify(data));
            return;

        case 'get':
            return localStorage.getItem(key);

        case 'remove':
            localStorage.remove(key);
            return;
    }
}