describe('falsy values', () => {
  test('empty string', () => {
    expect(Boolean(''))
      .toBeFalsy()
  })

  test('zero', () => {
    expect(Boolean(0))
      .toBeFalsy()
  })

  test('null', () => {
    expect(Boolean(null))
      .toBeFalsy()
  })

  test('undefined', () => {
    expect(Boolean(undefined))
      .toBeFalsy()
  })

  test('NaN', () => {
    expect(NaN)
      .toBeFalsy()
  })
})

describe('truthy values', () => {
  test('non empty string', () => {
    expect(Boolean('hello'))
      .toBeTruthy()
  })
  
  test('zero as string', () => {
    expect(Boolean('0'))
      .toBeTruthy()
  })
  
  test('whitespace as string', () => {
    expect(Boolean('  '))
      .toBeTruthy()
  })
  
  test('empty array', () => {
    expect(Boolean([]))
      .toBeTruthy()
  })
  
  test('functions', () => {
    expect(Boolean(function() {}))
      .toBeTruthy()
  })

})