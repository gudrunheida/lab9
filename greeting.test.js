const greeting = require('./greeting');

it('Should return when only one number is in the string', () => {
    expect(greeting("Gudrun")).toBe("Hello, Gudrun!");
});