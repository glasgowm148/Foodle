export function hashify(target: any, key: string) {
  var _value = target[key];

  var getter = function () {
        return '#' + this._value;
  };

  var setter = function (newValue) {
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
