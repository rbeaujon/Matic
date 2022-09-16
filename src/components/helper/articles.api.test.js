const Articles = require('./articles.api')

const mockResponse =[{"value1": "1"}, {"value2": "2"}];

    
beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse)
    })
});

afterEach(() => {
    jest.resetAllMocks(); 
})
  

describe('API Articles Testing', () => {

	test('Should return a JSON file', async () => {
		const json = await Articles();
		expect(Array.isArray(json)).toEqual(true)
	} )
	test('Should be called with the correct URL', async () => {
		const fetchMock = jest.spyOn(global, 'fetch')
		const URL = "https://www.api.recruitment.matic.io/articles";
		await Articles();
		expect(fetchMock).toHaveBeenCalledWith(URL)
	})
	test('Should have 2 item', async () => {
		const json =await Articles();
		expect(json.length).toEqual(2)
	})
})