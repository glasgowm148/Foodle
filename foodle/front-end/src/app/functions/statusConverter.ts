export function statusConverter(target: any, key: string) {
  if (delete target[key]) {
    Object.defineProperty(target, key , {
      get: function() {
          if (this.value) {
            return 'Completed';
        } else {

            return 'Pending';
        }
        },
      set: function(v) { this.value = v; },
      enumerable : true,
      configurable: true
  });
  }
}
