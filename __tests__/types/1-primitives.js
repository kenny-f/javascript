test('number', () => {
  expect(typeof 0)
    .toBe('number')
})

test('boolean', () => {
  expect(typeof true)
    .toBe('boolean')
})

test('string', () => {
  expect(typeof 'hello')
    .toBe('string')
})

test('object', () => {
  expect(typeof {})
    .toBe('object')
})

test('null is of type object', () => {
  expect(typeof null)
    .toBe('object')
})

test('symbol', () => {
  expect(typeof Symbol('hi'))
    .toBe('symbol')
})