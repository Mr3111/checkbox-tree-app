export function getItem(key: string) {
    if (!key) return null;
    return localStorage.getItem(key) ?? '';
}

export function setItem(key: string, value: object | string) {
    if (!key) return;
    localStorage.setItem(
        key,
        typeof value === 'string' ? value : JSON.stringify(value)
    );
}
