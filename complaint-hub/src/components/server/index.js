const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const port = 3001;
const Counter = require("./models/counter");
const userModel = require("./models/user");
const form7Model = require("./models/form7");
const form8Model = require("./models/form8");
const form9Model = require("./models/form9");
const Complaint = require("./models/complaint");
const Form14 = require("./models/form14");
const Form22Model = require("./models/form22");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the 'user' database for user registration and login
mongoose
  .connect("mongodb://127.0.0.1:27017/user_SE", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to 'user' database"))
  .catch((err) => console.log("Error connecting to 'user' database:", err));

// Connect to the 'form7_data' database for Form 7 data
const form7Db = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/form7_data",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
form7Db.on("connected", () => {
  console.log("Connected to 'form7_data' database");
});

// Connect to the 'form8_data' database for Form 8 data
const form8Db = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/form8_data",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
form8Db.on("connected", () => {
  console.log("Connected to 'form8_data' database");
});

// Connect to the 'form9_data' database for Form 9 data
const form9Db = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/form9_data",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
form9Db.on("connected", () => {
  console.log("Connected to 'form9_data' database");
});

//connect to the 'form14_data' database for Form 14 data
const form14Db = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/form14_data",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
form14Db.on("connected", () => {
  console.log("Connected to 'form14_data' database");
});

// Connect to the 'form22_data' database for Form 22 data
const form22Db = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/form22_data",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

form22Db.on("connected", () => {
  console.log("Connected to 'form14_data' database");
});

// Connect to the 'dashboard' database
const dashboardDb = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/dashboard",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

dashboardDb.on("connected", () => {
  console.log("Connected to 'dashboard' database");
});

dashboardDb.on("error", (err) => {
  console.log("Error connecting to 'dashboard' database:", err);
});

// Export dashboardDb
module.exports = { dashboardDb };

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Incoming login request:", req.body); // Log the incoming data

  userModel
    .findOne({ username: username })
    .then((user) => {
      if (user) {
        console.log("User found:", user); // Check the user object and password hash
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return res
              .status(500)
              .json({ error: "Error during password comparison" });
          }

          if (isMatch) {
            res.json("Login successful " + user.fullname);
          } else {
            res.json("The username or password is incorrect");
          }
        });
      } else {
        res.json("You have no Account, Sign up first?");
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Database error during login" });
    });
});

// Register route
app.post("/register", (req, res) => {
  console.log(req.body); // Log incoming data

  // Hash the password before saving
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Failed to hash password" });
    }

    // Replace the plain password with the hashed password
    req.body.password = hashedPassword;

    // Create the user with the hashed password
    userModel
      .create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  });
});

// Form7 route
app.post("/form7", async (req, res) => {
  try {
    // Get next kpCaseNumber and usapingBlg
    const kpCounter = await Counter.findOneAndUpdate(
      { name: "kpCaseNumber" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    const blgCounter = await Counter.findOneAndUpdate(
      { name: "usapingBlg" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    // Log the incoming form data
    console.log(req.body);

    // Add the generated kpCaseNumber and usapingBlg to the form data
    const form7Data = {
      ...req.body, // Existing form data
      kpCaseNumber: kpCounter.count, // Add the generated kpCaseNumber
      usapingBlg: blgCounter.count, // Add the generated usapingBlg
    };

    // Create the form7 entry with the additional data
    form7Db
      .model("Form7", form7Model.schema) // Use form7Db for the 'Form7' model
      .create(form7Data)
      .then((form7) => res.json(form7)) // Return the saved form7 data, including the generated numbers
      .catch((err) => res.json(err));
  } catch (err) {
    res.json(err);
  }
});

app.get("/form7/autogenerate", async (req, res) => {
  try {
    // Fetch the next counter values for kpCaseNumber and usapingBlg
    const kpCaseNumberCounter = await Counter.findOne({ name: "kpCaseNumber" });
    const usapingBlgCounter = await Counter.findOne({ name: "usapingBlg" });

    if (!kpCaseNumberCounter || !usapingBlgCounter) {
      return res.status(400).json({ message: "Counter data not found." });
    }

    // Return the next auto-generated numbers
    res.json({
      kpCaseNumber: kpCaseNumberCounter.count + 1, // Incremented next value
      usapingBlg: usapingBlgCounter.count + 1, // Incremented next value
    });
  } catch (err) {
    res.status(500).json({ error: "Error fetching auto-generated numbers" });
  }
});

// Form8 route
app.post("/form8", async (req, res) => {
  try {
    // Get the next case number and reference number
    const caseNumberCounter = await Counter.findOneAndUpdate(
      { name: "caseNumber" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    const referenceNumberCounter = await Counter.findOneAndUpdate(
      { name: "referenceNumber" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    // Log the incoming form data
    console.log(req.body);

    // Add the generated caseNumber and referenceNumber to the form data
    const form8Data = {
      ...req.body, // Existing form data
      caseNumber: caseNumberCounter.count, // Add the generated caseNumber
      referenceNumber: referenceNumberCounter.count, // Add the generated referenceNumber
    };

    // Create the Form 8 entry in the database
    form8Db
      .model("Form8", form8Model.schema) // Use form8Db for the 'Form8' model
      .create(form8Data)
      .then((form8) => res.json(form8)) // Return the saved form8 data, including the generated numbers
      .catch((err) => res.json(err));
  } catch (err) {
    res.status(500).json({ error: "Error saving Form 8" });
  }
});

// Route to get next auto-generated case number and reference number
app.get("/form8/autogenerate", async (req, res) => {
  try {
    // Fetch the next counter values
    const caseNumberCounter = await Counter.findOne({ name: "caseNumber" });
    const referenceNumberCounter = await Counter.findOne({
      name: "referenceNumber",
    });

    if (!caseNumberCounter || !referenceNumberCounter) {
      return res.status(400).json({ message: "Counter data not found." });
    }

    // Return the next auto-generated numbers
    res.json({
      caseNumber: caseNumberCounter.count + 1,
      referenceNumber: referenceNumberCounter.count + 1,
    });
  } catch (err) {
    res.status(500).json({ error: "Error fetching auto-generated numbers" });
  }
});

app.post("/form9", async (req, res) => {
  try {
    // Log the incoming form data
    console.log("Incoming Form 9 data:", req.body);

    // Create the Form 9 entry in the database
    const form9 = await form9Db
      .model("Form9", form9Model.schema) // Use form9Db for the 'Form9' model
      .create(req.body);

    res.status(201).json(form9); // Return the saved form9 data
  } catch (err) {
    console.error("Error saving Form 9:", err); // Log the error details
    res.status(500).json({ error: "Error saving Form 9" });
  }
});

app.get("/form14/autogenerate", async (req, res) => {
  try {
    // Fetch the next counter values for kpCaseNumber and usapingBlg
    const kpCaseNumberCounter = await Counter.findOne({ name: "kpCaseNumber" });
    const usapingBlgCounter = await Counter.findOne({ name: "usapingBlg" });

    if (!kpCaseNumberCounter || !usapingBlgCounter) {
      return res.status(400).json({ message: "Counter data not found." });
    }

    // Return the next auto-generated numbers
    res.json({
      kpCaseNumber: kpCaseNumberCounter.count + 1,
      usapingBlg: usapingBlgCounter.count + 1,
    });
  } catch (err) {
    console.error("Error in Form22 autogenerate:", err);
    res.status(500).json({ error: "Error fetching auto-generated numbers" });
  }
});

// Form14 route
app.post("/form14", async (req, res) => {
  try {
    console.log("Received form data:", req.body); // Add this line
    // Get next kpCaseNumber and usapingBlg
    const kpCounter = await Counter.findOneAndUpdate(
      { name: "kpCaseNumber" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    const blgCounter = await Counter.findOneAndUpdate(
      { name: "usapingBlg" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    // Log the incoming form data
    console.log("Counter values:", {
      kp: kpCounter.count,
      blg: blgCounter.count,
    });

    // Add the generated kpCaseNumber and usapingBlg to the form data
    const form14Data = {
      ...req.body, // Existing form data
      form14KpNum: kpCounter.count, // Add the generated kpCaseNumber
      form14Blg: blgCounter.count, // Add the generated usapingBlg
    };

    form14Db
      .model("Form14", Form14.schema) // Use form7Db for the 'Form7' model
      .create(form14Data)
      .then((form14) => res.json(form14)) // Return the saved form7 data, including the generated numbers
      .catch((err) => res.json(err));
  } catch (err) {
    res.json(err);
  }
});

app.get("/form22/autogenerate", async (req, res) => {
  try {
    // Fetch the next counter values for kpCaseNumber and usapingBlg
    const kpCaseNumberCounter = await Counter.findOne({ name: "kpCaseNumber" });
    const usapingBlgCounter = await Counter.findOne({ name: "usapingBlg" });

    if (!kpCaseNumberCounter || !usapingBlgCounter) {
      return res.status(400).json({ message: "Counter data not found." });
    }

    // Return the next auto-generated numbers
    res.json({
      kpCaseNumber: kpCaseNumberCounter.count + 1,
      usapingBlg: usapingBlgCounter.count + 1,
    });
  } catch (err) {
    console.error("Error in Form22 autogenerate:", err);
    res.status(500).json({ error: "Error fetching auto-generated numbers" });
  }
});

// Form22 route
app.post("/form22", async (req, res) => {
  try {
    console.log("Received form data:", req.body); // Add this line

    // Get next kpCaseNumber and usapingBlg
    const kpCounter = await Counter.findOneAndUpdate(
      { name: "kpCaseNumber" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    const blgCounter = await Counter.findOneAndUpdate(
      { name: "usapingBlg" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    // Log counter values
    console.log("Counter values:", {
      kp: kpCounter.count,
      blg: blgCounter.count,
    }); // Add this line

    // Add the generated kpCaseNumber and usapingBlg to the form data
    const form22Data = {
      ...req.body, // Existing form data
      form22KpNum: kpCounter.count, // Add the generated kpCaseNumber
      form22Blg: blgCounter.count, // Add the generated usapingBlg
    };

    form22Db
      .model("Form22", Form22Model.schema) // Use form8Db for the 'Form8' model
      .create(form22Data)
      .then((form22) => res.json(form22)) // Return the saved form8 data, including the generated numbers
      .catch((err) => res.json(err));
  } catch (err) {
    res.status(500).json({ error: "Error saving Form 8" });
  }
});

// Get dashboard statistics
app.get("/api/dashboard/statistics", async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();
    const pendingComplaints = await Complaint.countDocuments({
      status: "Pending",
    });
    const inProgressComplaints = await Complaint.countDocuments({
      status: "In Progress",
    });
    const resolvedComplaints = await Complaint.countDocuments({
      status: "Resolved",
    });

    // Get complaint type breakdown
    const typeBreakdown = await Complaint.aggregate([
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      totalComplaints,
      pendingComplaints,
      inProgressComplaints,
      resolvedComplaints,
      typeBreakdown,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get recent complaints
app.get("/getRecent", async (req, res) => {
  try {
    const form7Data = await form7Model
      .find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select(
        "kpCaseNumber maySumbong ipinagsumbong usapingBlg ukolSa reklamo kalunasan day month year createdAt"
      ); // Select specific fields

    console.log("Fetched form7Data:", form7Data); // Log the fetched data

    res.json(form7Data);
  } catch (error) {
    console.error("Error fetching recent complaints:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get complaints by time period
app.get("/api/dashboard/trends/:period", async (req, res) => {
  const { period } = req.params;
  const now = new Date();
  let dateFilter = {};

  switch (period) {
    case "weekly":
      dateFilter = {
        date: {
          $gte: new Date(now.setDate(now.getDate() - 7)),
        },
      };
      break;
    case "monthly":
      dateFilter = {
        date: {
          $gte: new Date(now.setMonth(now.getMonth() - 1)),
        },
      };
      break;
    case "yearly":
      dateFilter = {
        date: {
          $gte: new Date(now.setFullYear(now.getFullYear() - 1)),
        },
      };
      break;
    default:
      return res.status(400).json({ message: "Invalid period" });
  }

  try {
    const complaints = await complaints.find(dateFilter).sort({ date: 1 });
    res.json(complaints);
  } catch (error) {
    console.error("Error fetching trend data:", error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
