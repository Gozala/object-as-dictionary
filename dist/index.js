(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  //
  var dictionary = function dictionary(data) {
    var value = Object.create(null);

    if (data != null) {
      for (var _key in data) {
        if (data.hasOwnProperty(_key)) {
          value[_key] = data[_key];
        }
      }
    }

    return value;
  };

  exports.dictionary = dictionary;
  exports["default"] = dictionary;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBT08sTUFBTSxVQUFzQixHQUFHLFNBQXpCLFVBQXNCLENBQUcsSUFBSSxFQUFJO0FBQzVDLFFBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7O0FBRWpDLFFBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUNoQixXQUFLLElBQUksSUFBRyxJQUFJLElBQUksRUFBRTtBQUNwQixZQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBRyxDQUFDLEVBQUU7QUFDNUIsZUFBSyxDQUFDLElBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFHLENBQUMsQ0FBQTtTQUN2QjtPQUNGO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUE7R0FDYixDQUFBOzs7dUJBRWMsVUFBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5cbmV4cG9ydCB0eXBlIERpY3Rpb25hcnkgPHZhbHVlPiA9IHtba2V5OnN0cmluZ106IHZhbHVlfVxuZXhwb3J0IHR5cGUgJGRpY3Rpb25hcnkgPHZhbHVlPiA9IChkYXRhOj97W2tleTpzdHJpbmddOiB2YWx1ZX0pID0+XG4gIERpY3Rpb25hcnk8dmFsdWU+XG5cbi8vXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeTokZGljdGlvbmFyeSA9IGRhdGEgPT4ge1xuICBjb25zdCB2YWx1ZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFsdWVba2V5XSA9IGRhdGFba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBkaWN0aW9uYXJ5XG4iXX0=