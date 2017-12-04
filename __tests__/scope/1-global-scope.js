global.superhero = 'Superman' // in the browser this would be window.superhero

test('variables defined in the global scope can be accessed and altered in any other scope', () => {
  expect(superhero)
    .toBe('Superman')
})

