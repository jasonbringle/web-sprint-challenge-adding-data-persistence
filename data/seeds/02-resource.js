
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: "Window Cleaner", description: 'Stuff that cleans windows'},
        {name: "Tools", description: 'Things to turn nuts with...'},
        {name: "Computer", description: 'Thing that computes'}
      ]);
    });
};
