import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
// import knex from "./lib/setup/knexSetup";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */


// app.use("/products", productRoutes);
// app.use("/product-input", productInputRoutes);
// app.use("/finance", financeRoutes);
// app.use("/inventory", inventoryRoutes)
// app.use("/order", orderRoutes)
// app.use("/sales-order", salesOrderRoutes)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");

    // // Add headers to prevent caching
    // res.header("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    // res.header("Pragma", "no-cache");
    // res.header("Expires", "0");
    // res.header("Surrogate-Control", "no-store");

    next();
});

app.disable("etag");

app.use((req, res, next) => {
    console.log(`--------------------------------
    📦 Request Body : ${JSON.stringify(req.body, null, 2)}
    🔴 INCOMING REQUEST!
    🔴 Request Method: ${req.method}
    🔴 Request URl: ${req.url}
    😺‍ Request Headers: ${JSON.stringify(req.headers, null, 2)}
    --------------------------------`)
    next();
});

/* MONGOOSE CONFIGURATION */
//eslint-disable-next-line
const PORT = process.env.PORT || 9000;
// app.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}`);
// })
// await knex
// mongoose.
//     //eslint-disable-next-line
//     connect(process.env.MONGO_URL || "",)
//     .then(async()=>{
//         console.log("MongoDB connected successfully");
//         app.listen(PORT, () => {
//             console.log(`Server is running on PORT ${PORT}`);
//         });



//     })
//     .catch((err) => {
//         console.log(`Error Connecting to MongoDB: ${err}`); 
//     });