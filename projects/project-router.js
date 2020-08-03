const express = require('express');

const Db = require('./project-model.js');
const dbConfig = require('../data/db-config.js');

const router = express.Router();

router.get('/project', (req, res) => {
    Db.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/resource', (req,res) => {
    const body = req.body
    Db.addResource(body)
        .then(resource =>{
            if(resource){
                res.status(200).json(resource)
            }{res.status(500).json({error: 'Could not return the resource'})}
        })
        .catch(error => {
            res.status.apply(500).json({ errormessage: "Could not add resource"})
        })
})

router.get("/resources", (req,res) => {
    Db.getresources()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            res.status(500).json({errormessage: "Could not retrieve list of resources"})
        })
})

router.post("/project", (req,res) => {
    const body = req.body
    Db.addProject(body)
        .then(added => {
            console.log("Added name of project", added)
            if(added){res.status(200).json(added[0])}{
                res.status(500).json({errormessage:"Could not post project."}) 
            }
        })
        .catch(error => {
            res.status(500).json({errormessage:"Could not post project."})
        })
})

router.post("/task", (req,res) => {
    const body = req.body
    Db.addTask(body)
        .then(added => {
            console.log("Added name of task", added)
            if(added){res.status(200).json(added[0])}{
                res.status(500).json({errormessage:"Could not post task."}) 
            }
        })
        .catch(error => {
            res.status(500).json({errormessage:"Could not post task."})
        })
})

router.get("/task", (req,res) => {
    Db.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err =>{
            res.status(500).json({ errormessage: "Could not retrieve"})
        })
})



module.exports = router;