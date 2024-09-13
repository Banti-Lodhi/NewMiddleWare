
const express = require("express");
const app = express();
const port = 9090;

app.use("/api", (req, res, next) => {
  let {token} = req.query;

  if(token === "accessapi") {
    next();
  }else {
    console.log("Access Denied!");
  }
});

app.use("/api", (req, res) => {
  res.send("Data");

});

app.use("/", (req, res, next) => {
  req.time = new Date();
  console.log(query, req.method, req.hostname, req.listen);
  next();
});

//404 page not found
app.use((req, res, next) => {
  console.log("Page not found");
  next();
})

app.get("/", (req, res) => {
  res.send("Server Working on Browser");
});

app.get("/response", (req, res) => {
  res.send("response on random page..");
});

app.listen(port, () => {
  console.log("server listen on port to ", port);
});
