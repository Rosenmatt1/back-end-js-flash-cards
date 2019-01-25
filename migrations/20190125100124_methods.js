
exports.up = function(knex, Promise) {
  return knex.schema.createTable('methods', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.string('description').notNullable().defaultsTo('')
    table.string('example').notNullable().defaultsTo('')
    table.string('link').notNullable().defaultsTo('')
    // table.integer('population').notNullable().defaultsTo(0)
    // table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('methods')
};
