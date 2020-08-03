
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_description: "Get Windows Clean", notes: 'Make sure to use the Window cleaner', completion:false, project_id: 1},
        {task_description: "Locate Trans", notes: 'Take out transmission from car', completion: false, project_id: 2},
        {task_description: "Seek out a website for challenges", notes: 'Go find a good challenge website to work from', completion: false, project_id: 3}
      ]);
    });
};
