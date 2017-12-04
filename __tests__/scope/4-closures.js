/*  Whenever you create a function within another function, 
you have created a closure. The inner function is the closure. 
This closure is usually returned so you can use the outer function's 
variables at a later time.
*/

jest.useFakeTimers()

test('closure example', () => {
  function outerFunction () {
    const outer = `I see the outer variable!`
  
    return function innerFunction() {
      return outer;
    }
  }
  
  expect(outerFunction()())
    .toBe('I see the outer variable!')
})

describe('controlling side effects with closures', () => {
  function prepareCake (flavor) {
    return function () {
      setTimeout(_ => console.log(`Made a ${flavor} cake!`, 1000))
    }
  }
  
  const makeCakeLater = prepareCake('banana')
  
  // And later in your code...
  makeCakeLater()
  // Made a banana cake!
  
})