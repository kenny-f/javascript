test('variables declared in a function are only accessible within the function', () => {
  function sayHello() {
    const hello = 'hihi'

    return hello;
  }

  expect(sayHello())
    .toBe('hihi')
})

test('variables declared within a block {} are only accessible within the block', () => {
  {
    const hello = 'hi'
  }

  let exception = null;

  try {
    console.log(hello)
  } catch(e) {
    exception = e;
  }

  expect(exception)
    .toBeDefined()
})

test('functions declared with a function declaration are always hoisted to the to of the current scope', () => {
  sayHello()

  function sayHello() {
    return 'hi'
  }

  expect(sayHello())
    .toBe('hi')
})

test('functions declared with a function expression are not hoisted', () => {
  let exception = null;

  try {
    sayHello()
  } catch (error) {
    exception = error;
  }

  const sayHello = function() {
    return 'hi'
  }

  expect(exception)
    .toBeDefined()
})