const db = require('../models/db');


/**
 * fetch user details
 * @param userId
 * @param schema
 * @param database
 * @returns {Promise<{id: number, first_name: *, surname: *, full_name, email, vault_status, last_login, status, user_permissions: *[], role: ({id: number, name: *}|null), category: ({id: *, name: *}|null)}>}
 */
async function getUserDetails({ userId, schema, database }) {
    const prefix = `${database}.${schema}.`;
    const masterPrefix = `${process.env.DB_MASTER_DATABASE}.dbo.`;

    const query = `
    SELECT 
        u.id, u.first_name, u.surname, u.email, u.telephone, u.profile_pic_url as profile_pic_absolute_path, u.vault_status, u.last_login, u.status, u.role_id, u.user_category_id, u.partner_id,
        LTRIM(RTRIM(CONCAT(u.first_name, ' ', u.surname))) as full_name, 
        
        r.id as role_unique_id,
        r.description as role_name,
    
        c.id AS category_unique_id,
        c.description AS category_description
    
        FROM ${prefix}users as u

        LEFT JOIN ${masterPrefix}user_types as r
        ON r.id = u.role_id

        LEFT JOIN ${masterPrefix}user_categories as c
        ON c.id = u.user_category_id
    
        WHERE u.id = @userId
    `;

    const rows = await db.query(query, { userId });

    let row = rows[0] || null;

    const userPerQuery = `
        SELECT u.id, u.permission_id, u.user_id, u.entity_jurisdiction_registration_id, u.client_tax_return_id,
        
        p.id as permission_unique_id, p.name as permission_name,
        c.id as client_tax_return_unique_id

        FROM ${prefix}user_permissions u
        
        LEFT JOIN ${masterPrefix}user_permission_roles as p
        ON p.id = u.permission_id
        
        LEFT JOIN ${prefix}client_tax_returns as c
        ON c.id = u.client_tax_return_id

        where u.user_id=@userId`;

    const userPermissions = await db.query(userPerQuery, { userId });

    console.log('user permissions object print');
    console.log(userPermissions);

    let perResource = [];
    userPermissions.forEach((permission) => {
        perResource.push(
            {
                "id": permission.id,
                "permission": {
                    "id": permission.permission_id,
                    "name": permission.permission_name
                },
                "client_tax_return": {
                    "id": permission.client_tax_return_id
                }
            }
        );
    })

    console.log(perResource);

    let resource = {
        id: Number(row.id),
        first_name: row.first_name,
        surname: row.surname,
        full_name: row.full_name,
        email: row.email,
        vault_status: row.vault_status,
        last_login: row.last_login,
        status: row.status,
        user_permissions : perResource,
        role: row.role_id
            ? {
                id:  Number(row.role_id),
                name: row.role_name,
            }
            : null,

        category: row.user_category_id
            ? {
                id: row.user_category_id,
                name: row.category_description,
            }
            : null,
    };

    return resource;
}

module.exports = {
    getUserDetails,
};