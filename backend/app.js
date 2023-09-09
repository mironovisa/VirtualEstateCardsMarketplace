require("dotenv").config();
const express = require("express"); //done
const app = express(); //done
const cors = require("cors"); //done
const { verify } = require("./utils/jwt"); //done
const DBmongo = require("./services/users.service");
const users = new DBmongo("NFTMarketPlace", "users");
const { createImage, createImageDetails } = require("./utils/datagen.js");
const { addNewImage } = require("./controllers/images.controller");

// const prompt =
//   "Generate an image featuring the interior of a modest, newly built apartment's living room, ideal for an NFT card on a virtual real estate NFT marketplace. The central focus should be a comfortable yet budget-friendly sofa, surrounded by simple furnishings and decor. The living room should exude a cozy and approachable atmosphere, showcasing practicality and comfort. Consider elements like basic lighting, affordable decorations, and a color palette that conveys simplicity. Capture the essence of an affordable yet inviting living space, highlighting its value and suitability for budget-conscious buyers.";   //* old prompt for refrerence - Adam 

app.use(
  cors({
    origin: "*",
  })
);

require("./utils/connection.check");

app.use(express.json());

app.post("/generate-image", async (req, res) => {
  try {
    // const generatedImageUrl = await createImage(); //* holds the image url - Adam
    // const generatedImageDetails = await createImageDetails(); //* holds the image description and title - Adam

    // const generatedImage = {
    //   uri: generatedImageUrl,
    //   description: generatedImageDetails.description,
    //   title: generatedImageDetails.title,
    // }

    // addNewImage(generatedImage);
    addNewImage();
    res.status(200).send("Image generated successfully");
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Image generation failed." });
  }
});


app.use(async (req, res, next) => {
  console.log("made it here");
  if (
    (req.method === "POST" && req.url === "/auth/login") ||
    (req.method === "POST" && req.url === "/users")
  ) {
    return next();
  }

  const token = req.headers.accesstoken;

  const data = verify(token);

  if (!data) {
    return res.status(401).send("user not allowed");
  }

  console.log(data);
  req.me = data.id

  next();
});

app.use("/users", require("../backend/routes/users.route"));
app.use("/images", require("../backend/routes/images.route"));
app.use("/auth", require("./routes/auth.route"));


app.get("/test", (req, res) => {
  res.send("Route reached");
});

const port = process.env.PORT || 3001; // DO NOT CHANGE THIS

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
