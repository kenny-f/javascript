/*
Contrary to .apply() and .call() methods (see 5.), which invokes the function right away, 
the .bind() method only returns a new function that it supposed to be invoked later 
with a pre-configured this.
*/

describe('bind', () => {
  function myFunc() {
    return this
  }

  it('this points to myObj', () => {
    const myObj = {}
    const boundFunction = myFunc.bind(myObj)
    
    expect(boundFunction())
      .toBe(myObj)
  })
})