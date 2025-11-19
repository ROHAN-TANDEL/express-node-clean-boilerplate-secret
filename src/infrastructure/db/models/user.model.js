module.exports = {
    getUserById: async (pool, id) => {
        const res = await pool.query(
            `SELECT * FROM users WHERE id = $1`,
            [id]
        );
        return res.rows[0];
    },
};


// import { DataTypes } from "sequelize";
// import { sequelize } from "../../config/database.js";
//
// const User = sequelize.define("User", {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
// });
//
// export default User;
