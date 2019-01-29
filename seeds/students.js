exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
       {name: "Sally", description: "hustler", studentID: "ab1cd"},
       {name: "Jimbo", description: "slacker", studentID: "ab2cd"},
       {name: "Juan", description: "hustler", studentID: "ab3cd"},
       ]);
    });
};
