import express from "express";
import bodyParser from 'body-parser'
import usersRoutes from "./routes/users.routes.js"


const app = express();
const PORT = 5000;
app.use(bodyParser.json())




app.use("/users", usersRoutes);



app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
