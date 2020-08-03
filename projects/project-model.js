const db = require('../data/db-config.js');
const { json } = require('express');

module.exports= {
    getProjects,
    addResource,
    getresources,
    addProject,
    addTask,
    getTasks
}

function addResource(resource){
    return db("resource")
        .insert(resource)
        .then(added => {
            console.log(added)
            return db("resource").where({id:added})
        })
}

function getresources(){
    return db("resource")
}

function addProject(project){
    const newProject = project
    return db("projects")
        .insert(newProject)
        .then(project => {
            return db("projects").where({id:project[0]})
        })
}

function getProjects(){
    return db("projects")
}

function addTask(task){
    // console.log(task)
    const newTask = task
    return db("task")
        .insert(newTask)
        .then(addedTask => {
            console.log(addedTask)
            return db("task").where({id:addedTask[0]})
        })
}

function getTasks(){
    return db('task')
        .join("projects", "task.project_id", "projects.id")
        .select("task.id",{Project_Name:"projects.name"}, "projects.description", "task.task_description", "task.notes")       
}