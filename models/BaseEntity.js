const connection = require('../config/dbConfig');

class BaseEntity {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    findAll() {
        return this.dbConnection
    }

    findById(id) {

    }

    create(obj) {

    }

    updateById(id) {

    }

    deleteById(id) {

    }
}