const fizzbuzz = require("./fizzbuzz");

describe("FizzBuzz", () => {
	test("tests", ()=> {
		expect(true).toBe(true);
	})
	test("Should show a error when I sent an empty request", () =>{
		const expected = "Should be a valid number";
		const result = fizzbuzz("");
		expect(expected).toEqual(result)
	})
	test("Should transform a negative number", () =>{
		const expected = "0,1,1,2,fizz";
		const result = fizzbuzz(-3);
		expect(expected).toEqual(result)
	})
	test("Should print one array [0] if send 0", () =>{
		const expected = "0";
		const result = fizzbuzz(0);
		expect(expected).toEqual(result)
	})
	test("Should print one array [0,1] if send 1", () =>{
		const expected = "0,1";
		const result = fizzbuzz(1);
		expect(expected).toEqual(result)
	})
	test("Should show the first fizz  when it sends 3", () =>{
		const expected = "0,1,1,2,fizz";
		const result = fizzbuzz(3);
		expect(expected).toEqual(result)
	})
	test("Should be show the secuence until 16",() => {
		const expected = "0,1,1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16"
		const result = fizzbuzz(16);
		expect(expected).toEqual(result)
	})


})
