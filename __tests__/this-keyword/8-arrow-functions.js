const getContext = () => {
  return this
}

// describe('arrow function defined in the top most scope', () => {
//   it('this points to global', () => {
//     expect(getContext())
//       .toBe('nodejs')
//   })
// })

describe('arrow function "inherits the context from the function where it is defined', () => {
  class Person {
    constructor() {
      this.firstname = 'Tony'
      this.lastname = 'Stark'
    }

    createFullname() {
      return () => `${this.firstname} ${this.lastname}`
    }
  }

  it('', () => {
    const person = new Person()
    const createFullname = person.createFullname();
    expect(createFullname())
      .toBe('Tony Stark')
  })
})