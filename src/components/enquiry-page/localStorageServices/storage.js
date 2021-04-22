const fromDateKey = "fromDateKey";
const toDateKey = "toDateKey";

export function getFromDate() {
    return getFromStorage(fromDateKey);
}

export function getToDate() {
    return getFromStorage(toDateKey);
}

export function saveFromDate(item) {
    localStorage.setItem(fromDateKey, JSON.stringify(item));
}

export function saveToDate(item) {
    localStorage.setItem(toDateKey, JSON.stringify(item));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);
   
    if (!value) {
        return null;
    }
    return JSON.parse(value);
}
