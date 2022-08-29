type CacheValue = Array<any> | object;

class Cache {
  private cache: Map<string, CacheValue >;

  constructor() {
    this.cache = new Map();
  }

  set(key: any, value: CacheValue) {
    const strKey = JSON.stringify(key);

    if (this.cache.has(strKey)) return;

    this.cache.set(strKey, value);
  }

  get(key: any): CacheValue | undefined {
    const strKey = JSON.stringify(key);

    return this.cache.get(strKey);
  }

  has(key: any) {
    const strKey: string = JSON.stringify(key);

    return this.cache.has(strKey);
  }

  clear() {
    this.cache.clear();
  }
}

export default Cache;
