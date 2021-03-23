const fetchQuotes = require('../Functions/fetch-quotes');

describe('fetch quotes function', () => {
    it('should return a single quote from the API with the name, text, and image associated with it', async () => {
        const quote = await fetchQuotes();

        expect(quote).toEqual(
            expect.objectContaining({
                character: expect.any(String),
                quote: expect.any(String),
                image: expect.any(String),
            }));
    });
});
