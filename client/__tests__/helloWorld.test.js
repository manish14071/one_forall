const { helloWorld } = require('../client');

describe('helloWorld functionality', () => {
  test('should return "Hello, World!"', () => {
    expect(helloWorld()).toBe('Hello, World!');
  });
});