/** @format */
const upload = require("../controllers/multerConfig"); // Import Multer configuration
// const projectController = require("../controllers/projectController");
const express = require("express");
const {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get("/", getProjects);

// GET a single workout
router.get("/:id", getProject);

// POST a new workout
router.post("/", upload.single("thumbnail"), createProject);

// DELETE a workout
router.delete("/:id", deleteProject);

// UPDATE a workout
router.patch("/:id", updateProject);

module.exports = router;
