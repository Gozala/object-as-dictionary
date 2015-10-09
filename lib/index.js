/* @flow */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/*:: export type Dictionary <value> = {[key:string]: value}*/
/*:: export type $dictionary <value> = (data:?{[key:string]: value}) =>
  Dictionary<value>

;*/;;

var dictionary /*:$dictionary*/ = function dictionary(data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7R0FNQyxDQUFDLENBQUM7O0FBRUksSUFBTSxVQUFzQixvQkFBRyxTQUF6QixVQUFzQixDQUFHLElBQUksRUFBSTtBQUM1QyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBOztBQUVqQyxNQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDaEIsU0FBSyxJQUFJLElBQUcsSUFBSSxJQUFJLEVBQUU7QUFDcEIsVUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUcsQ0FBQyxFQUFFO0FBQzVCLGFBQUssQ0FBQyxJQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBRyxDQUFDLENBQUE7T0FDdkI7S0FDRjtHQUNGOztBQUVELFNBQU8sS0FBSyxDQUFBO0NBQ2IsQ0FBQTs7O3FCQUVjLFVBQVUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5leHBvcnQgdHlwZSBEaWN0aW9uYXJ5IDx2YWx1ZT4gPSB7W2tleTpzdHJpbmddOiB2YWx1ZX1cbmV4cG9ydCB0eXBlICRkaWN0aW9uYXJ5IDx2YWx1ZT4gPSAoZGF0YTo/e1trZXk6c3RyaW5nXTogdmFsdWV9KSA9PlxuICBEaWN0aW9uYXJ5PHZhbHVlPlxuXG47OztcblxuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnk6JGRpY3Rpb25hcnkgPSBkYXRhID0+IHtcbiAgY29uc3QgdmFsdWUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhbHVlW2tleV0gPSBkYXRhW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGljdGlvbmFyeVxuIl19