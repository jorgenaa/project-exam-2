const userKey = "username";
const token = "auth";

export function getToken() {
    return getFromStorage(token);
}

export function getUsername() {
    return getFromStorage(userKey);
}

export function saveUser(user) {
    localStorage.setItem(userKey, JSON.stringify(user));
}

export function clearStorage() {
    localStorage.clear();
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return null;
    }
    return JSON.parse(value);
}
