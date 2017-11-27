describe('indirect invocation using "call"', () => {
  const hero = {
    name: 'Thor'
  }
  
  function callHero() {
    return this.name
  }

  it('"this" points to hero', () => {
    expect(callHero.call(hero))
      .toBe('Thor')
  })
})