class User {
    constructor({ id, name, email }) {
        // if (!email) throw new Error("Email is required");
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

module.exports = User;
