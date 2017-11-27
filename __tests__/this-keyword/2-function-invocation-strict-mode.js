'use strict'
function returnThis() {
  return this;
}

describe('function invocation, strict mode', () => {
  it('returns undefined', () => {
    expect(returnThis())
      .toBeUndefined()
  })
})