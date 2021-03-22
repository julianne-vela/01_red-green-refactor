const copyAndPush = require('../Functions/copy-and-push');

describe('copy and push function', () => {
    it('should copy the given array and add a value to the array', () => {
        const fruits = ['apple', 'pear', 'kiwi'];

        const fruitBasket = copyAndPush(fruits, 'orange');

        expect(fruitBasket).toEqual([...fruits, 'orange']);
    });
});
