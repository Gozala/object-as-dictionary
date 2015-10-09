/* @flow */

export type Dictionary <value> = {[key:string]: value}
export type $dictionary <value> = (data:?{[key:string]: value}) =>
  Dictionary<value>

;;;

export const dictionary:$dictionary = data => {
  const value = Object.create(null)

  if (data != null) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        value[key] = data[key]
      }
    }
  }

  return value
}

export default dictionary
