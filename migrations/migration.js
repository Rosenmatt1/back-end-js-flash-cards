exports.up = function (knex, Promise) {
  return knex.schema.createTable('methods', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('methods')
};