import express from "express";
import path from "path";
import  {connectDb} from "./models";
import resourceEndpoints from "./routes/resourceEndpoint"
import Resource from "./models/resource";

const app = express();
const port = 8080; // default port to listen

// Configure Express to use EJS
connectDb();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static(__dirname + '../public'));
// define a route handler for the default home page
app.get("/", async (req, res) => {
    res.render("index");
    const result: {} = await Resource.find({'name':"UBC Clinic"});
});
app.use("/", resourceEndpoints);

// connect to to database and start the Express server
app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`);
});



