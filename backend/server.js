const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    console.log("connected to database");
    app.listen(3000, (err, data) =>
      console.log(`Listening on Port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));
