function Foo() {
  this.hello = 'world'
}

class Bar {
  constructor() {
    this.hello = 'world'
  }
}

describe('constructor invocation', () => {
  it('calling new on Foo', () => {
    const fooInstance = new Foo()
    
    expect(fooInstance.hello)
      .toBe('world')
  })

  it('calling new on Bar, es6 class', () => {
    /*
    At the time when new Bar() is executed, JavaScript creates an empty object and makes it the context of the constructor method.
    Now you can add properties to object using this keyword: this.hello = 'world'.
     */
    
    const barInstance = new Bar();

    expect(barInstance.hello)
      .toBe('world')
  })

  describe('forgetting the "new" keyword', () => {
    function Vehicle(type, wheelsCount) {
      this.type = type
      this.wheelsCount = wheelsCount
      return this
    }

    const car = Vehicle('Car', 4) // no "new" here

    expect(car)
      .toBe(global)
  })

  describe('dfdfdf', () => {
    it('jkjkj', () => {
      expect(global.type)
        .toBe('Car')
    })
  })
})