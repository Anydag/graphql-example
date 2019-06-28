const tableName = 'users';

exports.up = (knex, Promise) => {
    return knex
        .schema
        .createTable(tableName, function (t) {
            t.increments('id').unsigned().notNullable().primary();
            t.dateTime('created_at').notNullable();
            t.dateTime('updated_at').notNullable();
            t.string('full_name').notNullable();
            t.string('email').notNullable();
            t.string('password');

            t.unique('email', 'users_uq1');
        });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable(tableName);
};