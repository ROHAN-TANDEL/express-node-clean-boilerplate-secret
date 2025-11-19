module.exports = function userController(getUser) {
    return {
        getById: async (req, res) => {
            try {
                const id = Number(req.params.id);
                const user = await getUser(id);
                return res.status(200).json(user);
            } catch (err) {
                return res.status(404).json({ error: err.message });
            }
        }
    };
};


// export class UserController {
//     constructor({
//                     getUserUseCase,
//                     listUsersUseCase,
//                     createUserUseCase,
//                     updateUserUseCase,
//                     deleteUserUseCase,
//                 }) {
//         this.getUserUseCase = getUserUseCase;
//         this.listUsersUseCase = listUsersUseCase;
//         this.createUserUseCase = createUserUseCase;
//         this.updateUserUseCase = updateUserUseCase;
//         this.deleteUserUseCase = deleteUserUseCase;
//     }
//
//     getUser = async (req, res) => {
//         const result = await this.getUserUseCase.execute(req.params.id);
//         res.json(result);
//     };
//
//     listUsers = async (req, res) => {
//         const result = await this.listUsersUseCase.execute();
//         res.json(result);
//     };
//
//     createUser = async (req, res) => {
//         const result = await this.createUserUseCase.execute(req.body);
//         res.json(result);
//     };
//
//     updateUser = async (req, res) => {
//         const result = await this.updateUserUseCase.execute(req.params.id, req.body);
//         res.json(result);
//     };
//
//     deleteUser = async (req, res) => {
//         const result = await this.deleteUserUseCase.execute(req.params.id);
//         res.json(result);
//     };
// }


// export class UserController {
//     constructor({ createUserUseCase, getUserUseCase }) {
//         this.createUserUseCase = createUserUseCase;
//         this.getUserUseCase = getUserUseCase;
//     }
//
//     create = async (req, res) => {
//         // start DB transaction here (db.transaction)
//         const result = await this.createUserUseCase.execute(req.body /*, trx */);
//         return res.status(201).json(result);
//     };
//
//     get = async (req, res) => {
//         const user = await this.getUserUseCase.execute(req.params.id);
//         res.json(user);
//     };
// }
