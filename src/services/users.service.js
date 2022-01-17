const { database } = require('faker');
const faker = require('faker');
const { User } = require('../../database/db');

class UsersService {
    constructor() {}

    async index(res) {

        let users = await User.findAll();
        return users;
    }

    async find(model, id) {
        return await model.findByPk(id);
    }

    update(body, id) {
        this.find(User, id).then(data => {
            console.log(data);
        })
    }
    create() {

        const users = () => {
            console.log('Aqui estoyyyy');

            User.findAll()
                .then(data => {
                    console.log('Aqui estoyyyy');
                    console.log(data)
                })
                .catch(error => {
                    console.log(error);
                });

            return usersToReturn;
        }
        users();
    }
}

module.exports = UsersService;