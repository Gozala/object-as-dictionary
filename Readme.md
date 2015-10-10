# object-as-dictionary

Use of JS objects as dictionaries is common but error prone problem given the hazards of inherited properties and mutable `__proto__`. There for it's typically better to use objects created like `Object.create(null)` for dictionaries. But then when you also have entries for the dict you wind up with `Object.assign(Object.create(null), {x: 1, y: 2})` finally if you [type check][flow] your js code boilerplate even greater.

This is miniature library deal with this boilerplate for you:

```js
import dictionary from "dictionary"

const ages = dictionary({
  Tom: 32,
  Jane: 28
})

Object.getPrototypeOf(ages) // => null
'__proto__' in ages // => false
ages.__proto__ // => undefined
'constructor' in ages // => false
ages.constructor // => undefined
```

And if you happen to type check your JS code with [flow][] you can take further advantage of this library:

```js
/* @flow */
import type Dictionary from "dictionary"
import dictionary from "dictionary"


const ages:Dictionary<number> = dictionary({
  Tom: 32,
  Jane: 28
})
ages.Kate = "two"

// flow check
//
// src/index.js:10
// 10: ages.Kate = "two"
//                 ^^^^^ string. This type is incompatible with
// 6:  const ages:Dictionary<number> = dictionary({
//                           ^^^^^^ number
```


[flow]:http://flowtype.org
