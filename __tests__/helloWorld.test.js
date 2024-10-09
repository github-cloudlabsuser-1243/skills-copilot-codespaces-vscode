const { helloWorld } = require('../src/helloWorld');

test('Hello World functionality', () => {
  expect(helloWorld()).toBe('Hello, World!');
});