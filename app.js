import express from "express";
import useRrouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors"

export const app = express();

config({
    path:"./data/config.env"
});



app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTED_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))     
app.use("/api/v1/users",useRrouter)
app.use("/api/v1/task",taskRouter)
app.use(errorMiddleware)

app.get("/",(req,res)=>{
    res.send("Hello Uday😉")
})
