/* @flow */

import test from 'tape'
import dict from '..'

test('empty dicts', test => {
  const blank = dict()

  test.equal(blank, dict(), 'dict() returns constant blank')
  test.equal(blank, dict(undefined), 'dict(undefined) returns constant blank')
  test.equal(blank, dict({}), 'dict({}) returns constant blank')
  test.equal(blank, dict(dict()), 'dict(dict()) returns constant blank')

  test.deepEqual(Object.keys(blank), [], 'no keys in blank')
  test.deepEqual(Object.getOwnPropertyNames(blank), [], 'no private names in blank')
  test.deepEqual(iterateKeys(blank), [], 'no inherited names in blank')

  test.end()
})


test('non empty dicts', test => {
  test.deepEqual(Object.keys(dict({a:1})), ['a'])
  test.deepEqual(Object.getOwnPropertyNames(dict({a:1})), ['a'])
  test.deepEqual(iterateKeys(dict({a: 1})), ['a'])

  test.deepEqual(Object.keys(dict({a:1, b: 2})), ['a', 'b'])
  test.deepEqual(Object.getOwnPropertyNames(dict({a:1, b:2})), ['a', 'b'])
  test.deepEqual(iterateKeys(dict({a: 1, b:2})), ['a', 'b'])

  test.end()
})

const iterateKeys = (input:{}):Array<string> => {
  let names = []
  for (let key in input) {
    names.push(key)
  }
  return names
}
