const { table } = require("console");

exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments()
    tbl.text("name", 128)
        .notNullable()
        .unique()
    tbl.text("description", 128)
    tbl.boolean("completion", 128)
        .defaultTo(false) 
  })
  .createTable("resource", tbl => {
    tbl.increments()
    tbl.text("name", 128)
        .notNullable()
    tbl.text("description", 128)
  })
  .createTable("task", tbl => {
    tbl.increments()
    tbl.integer("project_id")
        .references("projects.id")
        .unique()
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    tbl.text("task_description", 128)
        .notNullable()
    tbl.text("notes")
    tbl.boolean('completion').defaultTo(false)
  })
  // .createTable("project-task", tbl => {
  //   tbl.increments()
  //   tbl.integer("project_id")
  //       .unsigned()
  //       .notNullable()
  //       .references("projects.id")
  //       .onDelete("CASCADE")
  //       .onUpdate("CASCADE")
  //   tbl.integer("task_id")
  //       .unsigned()
  //       .notNullable()
  //       .references("task.id")
  //       .onDelete("CASCADE")
  //       .onUpdate("CASCADE")
  // })
  .createTable("project-resource", tbl => {
    tbl.increments()
    tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("project-resource")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("projects")

};
