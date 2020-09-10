const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send({result: "success"});
})

//Enviormental Variables again.
// Great example of conditional variable assignment.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}.`));
