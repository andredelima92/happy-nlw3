import express from "express";

const app = express();
app.use(express.json());

app.get("/users/:id", (req, res) => {
  
});

app.listen(3333);
