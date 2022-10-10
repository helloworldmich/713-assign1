import express from "express";
// import path from "path";
// import jsonfile from "jsonfile";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let infoArr = [];
const dataSet1 = {
  imageId: 1,
  name: "maverick",
  age: 60,
  size: "500kb",
  url: "http://www.tomcruise.com/",
};

const dataSet2 = {
  imageId: 2,
  name: "iceman",
  age: 63,
  size: "1mb",
  url: "http://www.iceman.com/",
};
infoArr.push(dataSet1);
infoArr.push(dataSet2);
let count = 0;
app.get("/images", function (req, res) {
  count = count + 1;
  console.log("get count: ", count);
  console.log(`Server is listening at, http://127.0.0.1:${PORT},\n
 Endpoints:
 http://127.0.0.1:${PORT}/images method: GET \n products GET: received request`);

  res.send(infoArr); // last time: {dataset} and datase only got 1 obj, that's why can't show the newest posted
});

let countPost = 0;
let newInfo = {};
app.post("/images", (req, res) => {
  if (req.body.name) {
    countPost = countPost + 1;
    newInfo = {
      imageId: req.body.imageId,
      name: req.body.name,
      age: req.body.age,
      size: req.body.size,
      url: req.body.url,
    };
    infoArr.push(newInfo);
    console.log(req.body);
    console.log("products POST: sending response \n post:", countPost);
    console.log(
      req.body.imageId,
      req.body.name,
      req.body.age,
      req.body.size,
      req.body.url
    );
    res.json({ message: "success" });
  } else {
    console.log("error");
    res.status(500).json({ message: "failed" });
  }
});

app.delete("/images", (req, res) => {
  // infoArr = [];
  res.send({ message: "delete success" });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`listening to http://127.0.0.1:${PORT}`);
});
