
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Clean House', description: 'Clean all the things',completion: false},
        {id: 2, name: 'Repair Transmission', description: 'Repair the throwout bearing and replace the clutch', completion: false},
        {id: 3, name: 'Write more Javascript', description: "Sit down and do some challenges to learn javascript", completion:false}
      ]);
    });
};
