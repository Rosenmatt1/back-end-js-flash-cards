
exports.up = function(knex, Promise) {
  return knex.schema.createTable('methods', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    // table.integer('population').notNullable().defaultsTo(0)
    // table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('methods')
};



// { id: 1, name: 'map' },
// { id: 2, name: 'filter' },
// { id: 3, name: 'reduce' },
// { id: 4, name: 'push' },
// { id: 5, name: 'pop' },
// { id: 6, name: 'splice' }
