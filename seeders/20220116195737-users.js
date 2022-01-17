'use strict';
const faker = require('faker');

module.exports = {
    async up(queryInterface, Sequelize) {
        const dataFake = [];
        for (let i = 1; i <= 5; i++) {

            dataFake.push({
                // id: i,
                first_name: faker.name.firstName(),
                // last_name: faker.name.lastName(),
                // c_i: parseInt(Math.random() * (34000000 - 30000000) + 30000000),
                // // createdAt: null,
                // // updatedAt: null
            })

        }

        return queryInterface.bulkInsert('Users', dataFake);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};