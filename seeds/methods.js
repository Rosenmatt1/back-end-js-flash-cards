
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('methods').del()
    .then(function () {
      // Inserts seed entries
      return knex('methods').insert([
        { id: 1, name: 'map' },
{ id: 2, name: 'filter' },
{ id: 3, name: 'reduce' },
{ id: 4, name: 'push' },
{ id: 5, name: 'pop' },
{ id: 6, name: 'splice' },
{ id: 7, name: 'poopy' }
      ]);
    });
};
