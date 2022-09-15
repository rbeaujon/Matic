const fibonacci = require("./fibonacci");

describe("Fibonacci testing", () => {
	test("Testing the enviorement", () => {
		expect(true).toBe(true);
	})
	test("Should be start on 0", () => {
		const expected = [0];
		const result = fibonacci(0)
		expect(expected).toStrictEqual(result)

	})
	test("Num equal to 1 should show 0, 1", () => {
		
		const expected = [0,1]
		const result = fibonacci(1)
		expect(expected).toStrictEqual(result)
	})
	test("Should show for num 7 the array [0,1,1,2,3,5,8]", () => {
		const expected = [0,1,1,2,3,5,8];
		const result = fibonacci(7);
		expect(expected).toStrictEqual(result)
	})
})