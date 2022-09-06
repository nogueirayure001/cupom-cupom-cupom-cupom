class Cache {
    constructor() {
        this.cache = new Map();
    }
    set(key, value) {
        const strKey = JSON.stringify(key);
        if (this.cache.has(strKey))
            return;
        this.cache.set(strKey, value);
    }
    get(key) {
        const strKey = JSON.stringify(key);
        return this.cache.get(strKey);
    }
    has(key) {
        const strKey = JSON.stringify(key);
        return this.cache.has(strKey);
    }
    clear() {
        this.cache.clear();
    }
}
export default Cache;
