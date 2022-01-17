const { User } = require('../../database/db');

class UsersService {
    constructor() {}

    async index(res) {

        let users = await User.findAll();
        return users;
    }

    async find(id) {
        return await User.findByPk(id);
    }

    update(body, id) {
        this.find(id).then(async user => {
            const { first_name, last_name, c_i } = user;

            user.first_name = body.first_name || first_name;
            user.last_name = body.last_name || last_name;
            user.c_i = body.c_i || c_i;

            return await user.save();
        })
    }
    async delete(id) {
        this.find(id).then(async user => {

            return await user.destroy();
        })
    }
    async create(body) {
        const { first_name, last_name, c_i } = body;
        await User.create({
            first_name: first_name,
            last_name: last_name,
            c_i: c_i,
        });
    }
}

module.exports = UsersService;