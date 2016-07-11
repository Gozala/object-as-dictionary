/* @flow */

export type Dictionary <value> = {
  [key:string]: value
}

const blank = {}

export const dictionary = <value> (data:Dictionary<value>=blank):Dictionary<value> => {
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
