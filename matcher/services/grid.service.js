const db = require('../models/db');

async function transactionsColumns({database, schema, userId, gridViewKey, returnTypeGroupId, viewType})
{
    const prefix = `${database}.${schema}.`;
    const masterPrefix = `${process.env.DB_MASTER_DATABASE}.dbo.`;
    const [viewTypeObj] = await db.query(`SELECT id FROM ${masterPrefix}grid_view_types where name=@viewType`, {viewType});
    const viewTypeId = viewTypeObj?.id;
    const query = `
    SELECT gc.name,
           gc.data_type,
           gcvm.table_field,
           gcvm.p_table_field,
           gcvm.s_table_field,
           gcup.order_position,
           gcvm.is_numeric,
           gcvm.disable_move

   FROM ${prefix}grid_columns_users_preference AS gcup

   LEFT JOIN ${masterPrefix}grid_views AS gv
   ON gcup.grid_view_id = gv.id

   LEFT JOIN ${masterPrefix}grid_columns as gc
   ON gc.id = gcup.grid_column_id

   LEFT JOIN ${masterPrefix}grid_column_view_mapping as gcvm
   ON gcvm.grid_column_id = gc.id
   AND gcvm.grid_view_id = gv.id

   WHERE gcup.user_id = @userId

     AND  gv.[key] = @gridViewKey

     AND (
         (@returnTypeGroupId IS NULL AND gcup.return_type_group_id IS NULL)
         OR gcup.return_type_group_id = @returnTypeGroupId
        )
     AND (
             (@returnTypeGroupId IS NULL AND gcvm.return_type_group_id IS NULL)
                 OR gcvm.return_type_group_id = @returnTypeGroupId
             )
     AND (
            gcvm.view_type_id IS NULL OR gcvm.view_type_id = @viewTypeId
            )

   ORDER BY 
       gcup.order_position ASC,
       gcvm.order_position ASC
    `;


    const query1 = `
    SELECT * FROM ${prefix}grid_columns_users_preference AS gcup
      LEFT JOIN ${masterPrefix}grid_views AS gv
                ON gcup.grid_view_id = gv.id
    
      LEFT JOIN ${masterPrefix}grid_columns as gc
                ON gc.id = gcup.grid_column_id
    
      LEFT JOIN ${masterPrefix}grid_column_view_mapping as gcvm
                ON gcvm.grid_column_id = gc.id
                    AND gcvm.grid_view_id = gv.id
    WHERE gcup.user_id = @userId
    `;

   return await db.query(query, {userId, gridViewKey, returnTypeGroupId, viewTypeId});
}


module.exports = {
    transactionsColumns
};