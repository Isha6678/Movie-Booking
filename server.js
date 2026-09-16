require("dotenv").config();

const express =
    require("express");

const mongoose =
    require("mongoose");

const cors =
    require("cors");


const bookingRoutes =
    require("./routes/bookingRoutes");


const app =
    express();


/*
=========================================================
MIDDLEWARE
=========================================================
*/

app.use(
    cors()
);

app.use(
    express.json()
);


/*
=========================================================
MONGODB CONNECTION
=========================================================
*/

mongoose
    .connect(
        process.env.MONGO_URI
    )
    .then(() => {

        console.log(
            "MongoDB connected successfully"
        );

    })
    .catch((error) => {

        console.error(
            "MongoDB connection error:",
            error
        );

    });


/*
=========================================================
ROUTES
=========================================================
*/

app.use(
    "/api/bookings",
    bookingRoutes
);


/*
=========================================================
TEST ROUTE
=========================================================
*/

app.get(
    "/",
    (req, res) => {

        res.send(
            "Movie Booking Backend is Running"
        );

    }
);


/*
=========================================================
SERVER
=========================================================
*/

const PORT =
    process.env.PORT || 5555;


app.listen(
    PORT,
    () => {

        console.log(
            `Server running on port ${PORT}`
        );

    }
);