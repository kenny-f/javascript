test('inner function has access to the outer function\'s variables', () => {
  function outerFunc() {
    const outer = 'outer'

    function innerFunc() {
      const inner = 'inner'

      return outer;
    }

    return innerFunc()
  }

  expect(outerFunc())
    .toBe('outer')
})

test('outer function does not have access to inner function\'s variables', () => {
  function outerFunc() {
    const outer = 'outer'

    function innerFunc() {
      const inner = 'inner'

      return outer;
    }

    return inner // ReferenceError: inner is not defined
  }

  let err
  try {
    outerFunc()
  } catch (error) {
    err = error
  }

  expect(err)
    .toBeDefined()
})