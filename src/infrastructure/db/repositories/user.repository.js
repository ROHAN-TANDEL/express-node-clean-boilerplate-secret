const IUserRepository = require('../../../domain/interfaces/IUserRepository');
const pool = require('../../config/database');

class UserRepository extends IUserRepository {

    async findById(id) {
        const result = await pool.query(
            `SELECT * FROM users WHERE id = $1`,
            [id]
        );
        return result.rows[0];
    }
}

module.exports = UserRepository;


// import { IUserRepository } from "../../../domain/interfaces/IUserRepository.js";
//
// export class UserRepository extends IUserRepository {
//     constructor({ UserModel }) {
//         super();
//         this.UserModel = UserModel;
//     }
//
//     async getById(id) {
//         return await this.UserModel.findByPk(id);
//     }
//
//     async getAll() {
//         return await this.UserModel.findAll();
//     }
//
//     async create(data) {
//         return await this.UserModel.create(data);
//     }
//
//     async update(id, data) {
//         return await this.UserModel.update(data, { where: { id } });
//     }
//
//     async delete(id) {
//         return await this.UserModel.destroy({ where: { id } });
//     }
// }
