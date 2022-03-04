
const sum = require('./sum')

describe('adding numbers together', function () {
    it('1 + 2 should be equal to 3', () => {
        const inputOne = 1
        const inputTwo = 2
        const expected = inputOne + inputTwo
        const actual = sum(inputOne, inputTwo)
        expect(actual).toBe(expected)
    })
    it('220 + 230 should be equal to 450', () => {
        const inputOne = 220
        const inputTwo = 230
        const expected = inputOne + inputTwo
        const actual = sum(inputOne, inputTwo)
        expect(actual).toBe(expected)
    })
})