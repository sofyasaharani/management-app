/** @format */

const { request } = require("express");
const Project = require("../models/projectModel");
const mongoose = require("mongoose");
const path = require("path");

// get all workouts
const getProjects = async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 });

  res.status(200).json(projects);
};

// get a single workout
const getProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such project" });
  }

  const project = await Project.findById(id);

  if (!project) {
    return res.status(404).json({ error: "No such Project" });
  }

  res.status(200).json(project);
};

// create a new Project
const createProject = async (req, res) => {
  const { user_id, project_name, description } = req.body;

  // Generate project_id
  const project_id = new mongoose.Types.ObjectId();

  // add to the database
  try {
    const project = await Project.create({
      project_id,
      user_id,
      project_name,
      path_to_thumbnail_photo: req.file.path,
      description,
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such project" });
  }

  const project = await Project.findOneAndDelete({ _id: id });

  if (!project) {
    return res.status(400).json({ error: "No such project" });
  }

  res.status(200).json(project);
};

// update a workout
const updateProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such project" });
  }

  const project = await Project.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!project) {
    return res.status(400).json({ error: "No such project" });
  }

  res.status(200).json(project);
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
};
