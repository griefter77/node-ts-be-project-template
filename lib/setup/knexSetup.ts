// /* eslint-disable no-undef */
// import Knex from "knex";
// import dotenv from "dotenv";
// dotenv.config();

// export const knex = Knex({
//     client: "pg",
//     connection: {
//         host: process.env.AWS_DB_HOST,
//         port: 5432,
//         user: process.env.AWS_DB_USER,
//         password: process.env.AWS_DB_PASSWORD,
//         database: process.env.AWS_DB_DATABASE,
//         ssl: {
//             rejectUnauthorized: false // Or configure a more secure SSL setup
//         },
//         pool: {
//             min: 5,
//             max: 20, // Adjust as per your workload
//             idleTimeoutMillis: 10000, // Close idle connections after 10 seconds
//         },
//         // acquireConnectionTimeout: 10000, // Wait 10 seconds for a connection
//     },
//     useNullAsDefault: true
// });
// console.log("knex setup done")

// export default knex;

