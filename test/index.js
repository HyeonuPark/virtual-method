import {expect} from 'chai'
import {method} from '../src/index'

describe('method()', () => {
  it('should takes a function and return a function', () => {
    function someFunc () {}
    expect(method(someFunc)).to.be.a('function')
  })

  it('should return function with same functionality but takes "this" instead of first argument', () => {
    function someFunc (one, two, three) {
      return one.value + two + three
    }

    const someMethod = method(someFunc)
    const data = [
      [{value: 1}, 2, 3],
      [{value: 4}, 5, 9],
      [{value: 11}, 396, -4],
      [{value: 643}, -777, 2462],
      [{value: -4}, -5, -9],
      [{value: 'foo'}, 'bar', null],
      [{value: []}, () => null, 42]
    ]

    for (let [one, two, three] of data) {
      expect(one::someMethod(two, three))
        .to.equal(someFunc(one, two, three))
    }
  })
})
