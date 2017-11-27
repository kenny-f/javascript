/*
Amazing article https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
 */

function functionInvocation(){
  return this;
}

describe('this in function invocation', () => {
  it('this is the global object in a function invocation', () => {
    expect(functionInvocation())
      .toBe(global)
  })
})