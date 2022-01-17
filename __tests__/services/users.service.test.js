const userService = require('../../services/users.service');
const service = new userService();

describe('test users service', () => {
    test('index method', () => {
        const indexMethod = service.index()

        expect(indexMethod.length).toBeLessThanOrEqual(30);
        expect(indexMethod[0].first_name).toBeDefined();
        expect(indexMethod[0].last_name).toBeDefined();
        expect(indexMethod[0].c_i).toBeDefined();

    });
});