const checkCamelCase = require('./../../utils/check-camel-case.js');

describe('should return true on correct CamelCases', () => {
    it('validates "CamelCase" to be true', () => {
        expect(checkCamelCase('CamelCase')).toBe(true);
    });

    it('validates "Camel" to be true', () => {
        expect(checkCamelCase('Camel')).toBe(true);
    });

    it('validates "HTTPServer" to be true', () => {
        expect(checkCamelCase('Camel')).toBe(true);
    });
});

describe('should return false on incorrect CamelCases', () => {
    it('validates "nocase" to be false', () => {
        expect(checkCamelCase('nocase')).toBe(false);
    });

    it('validates "snake_case" to be false', () => {
        expect(checkCamelCase('snake_case')).toBe(false);
    });

    it('validates "hyphens-case" to be false', () => {
        expect(checkCamelCase('hyphens-case')).toBe(false);
    });

    it('validates "words with space" to be false', () => {
        expect(checkCamelCase('words with spaces')).toBe(false);
    });

    it('validates "iDontRememberThisCase" to be false', () => {
        expect(checkCamelCase('iDontRememberThisCase')).toBe(false);
    });
});
