const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require("./projects/project-router.js")
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/', ProjectsRouter);



module.exports = server;