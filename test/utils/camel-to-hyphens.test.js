const camelToHyphens = require('./../../utils/camel-to-hyphens.js');

describe('should convert CamelCase to hyphens-case', () => {
    it('converts "CamelCase" to "camel-case"', () => {
        expect(camelToHyphens('CamelCase')).toBe('camel-case');
    });

    it('converts "Camel" to "camel"', () => {
        expect(camelToHyphens('Camel')).toBe('camel');
    });

    // it('converts "HTTPServer" to "http-server"', () => {
    //     expect(camelToHyphens('HTTPServer')).toBe('http-server');
    // });
});
