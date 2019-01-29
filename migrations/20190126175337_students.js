
exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.string('description').notNullable().defaultsTo('')
    table.string('studentID').notNullable().defaultsTo('')
    
   
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students')
};
