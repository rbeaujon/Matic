const repeatedWords = require('./repeatedWords');

describe('Repeated Words Testing', () => {
	test('Should have called the function with one valid string', () => {
		expect('Bad Request').toStrictEqual(repeatedWords())
	})
	test('Should receive 2 words counted', () => {
		const string = "control control"
		const expected = {"control" : 2}
		const result = repeatedWords(string)
		expect(expected).toStrictEqual(result)
	})
})