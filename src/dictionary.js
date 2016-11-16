/* @flow */

export type Dictionary <value> = {
  [key:string]: value
}

const blank = Object.freeze(Object.create(null))

export const dictionary = <value> (data:Dictionary<value>=blank):Dictionary<value> => {
  switch (data) {
    case blank:
      return blank
    case null:
      return blank
    case undefined:
      return blank
    default:
      let dict = blank
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          if (dict === blank) {
            dict = Object.create(null)
          }
          dict[key] = data[key]
        }
      }
      return dict
  }
}

export default dictionary
