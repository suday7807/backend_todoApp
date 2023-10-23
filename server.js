import { app } from "./app.js";
import { connectDB } from "./data/database.js";


connectDB();





console.log()

app.listen(process.env.PORT, ()=>{
    console.log(`The server is running on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
})

