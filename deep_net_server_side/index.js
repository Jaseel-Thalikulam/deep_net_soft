//Imports
import express from "express";
import cors from "cors";
import { userRoute } from "./routes/user.route.js";
import { secretes} from "./constants/constants.js";
import mongoose from "mongoose";


//Creating instance of express
const app = express();

// CORS setup
const corsOptions = {
  origin:secretes.clientUrl,
  methods: "GET,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());



//User route
app.use("/", userRoute);

//MongoDB Config
mongoose
  .connect(secretes.mongooseUrl)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(secretes.port, () => {
  console.log(`Server running@${secretes.port}`);
});

export default app;
