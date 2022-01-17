const userService = require('../../services/users.service');
const service = new userService();

describe('test users service', () => {
    test('index method', () => {
        const indexMethod = service.index()

        expect(indexMethod.length).toBeLessThanOrEqual(30);
        expect(indexMethod[0].firstName).toBeDefined();
        expect(indexMethod[0].lastName).toBeDefined();
        expect(indexMethod[0].identityCardNumber).toBeDefined();

        // console.log(indexMethod[0].identityCardNumber);
    });
});