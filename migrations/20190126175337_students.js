
exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.string('description').notNullable().defaultsTo('')
    table.string('studentID').notNullable().defaultsTo('')
    
    // table.integer('population').notNullable().defaultsTo(0)
    // table.timestamps(true, true)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students')
};
