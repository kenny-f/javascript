const myObj = {
  myFunc: function() {
    return this;
  }
}

class Planet {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

describe('a method is a function stored in a property of an object', () => {
  it('"this" is the object that owns the method in a method invocation', () => {
    expect(myObj.myFunc())
      .toBe(myObj)
  })
})

describe('separating method from its object', () => {
  it('a function invocation happens when calling the function without an object and "this" is the global', () => {
    const myFunc = myObj.myFunc;
    expect(myFunc())
      .toBe(global)
  })

  it('passing the function as a parameter also separates the method from its object', () => {
    function newFunc(func) {
      return func();
    }

    expect(newFunc(myObj.myFunc))
      .toBe(global)
  })
})

describe('es6 class', () => {
  it('the method invocation context is also the instance itself', () => {
    const earth = new Planet('Earth');

    expect(earth.getName())
      .toEqual('Earth')
  })
})