const IUserRepository = require('../../interfaces/IUserRepository');
const User = require('../../entities/User');

module.exports = function getFormUseCase({ userRepository }) {

    if (!(userRepository instanceof IUserRepository)) {
        throw new Error("userRepository must implement IUserRepository");
    }

    return async function execute(id) {
        const data = await userRepository.findById(id);

        if (!data) {
            throw new Error("Form not found");
        }

        return new User({
            id: data.id,
            email: data.email,
            description: data.email,
            category: data.category
        });
    };
};

// export class GetUserUseCase {
//     constructor({ userRepository }) {
//         this.userRepository = userRepository;
//     }
//
//     async execute(id) {
//         return await this.userRepository.getById(id);
//     }
// }

