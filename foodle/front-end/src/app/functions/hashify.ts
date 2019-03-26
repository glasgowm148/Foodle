export function hashify(target: any, key: string) {

  const getter = function () {
        return '#' + this._value;
  };

  const setter = function (newValue) {
    this._value = newValue;
  };

  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}
