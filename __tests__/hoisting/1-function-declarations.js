test('function declarations are completely hoisted', () => {
  expect(square(3))
    .toBe(9)

  function square(num) {
    return num * num
  }
})

test('var declarations are hoisted but not its assignments', () => {
  {
    expect(a)
      .toBe(undefined)

    var a = 10

    expect(a)
      .toBe(10)
  }

  /*
  {
    // compilation phase
    var a

    expect(a)
      .toBe(undefined)

    a = 10

    expect(a)
      .toBe(10)
  }
  */
})

test('lets are not hoisted', () => {
  {
    expect(() => a)
      .toThrow(ReferenceError) // a is not defined

    let a = 10
  }
})

test('consts are not hoisted', () => {
  {
    expect(() => a)
      .toThrow(ReferenceError) // a is not defined

    const a = 10
  }
})