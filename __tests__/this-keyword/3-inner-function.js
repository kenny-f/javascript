const myObj = {
  myFunc: function() {
    function innerFunc() {
      return this;
    }

    return innerFunc()
  }
}

describe('calling this in an inner funtion', () => {
  it('innerFunc is a function invocation so "this" will refer to the global object ', () => {
    expect(myObj.myFunc())
      .toBe(global)
  })
})