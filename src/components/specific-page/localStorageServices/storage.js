const itemKey = "item";

export function getItem() {
    return getFromStorage(itemKey);
}

export function saveItem(item) {
    localStorage.setItem(itemKey, JSON.stringify(item));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return null;
    }
    return JSON.parse(value);
}
