const express = require("express");
const cors = require("cors");
const axios = require('axios');
const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
    const { operation, num1, num2 } = req.body;
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: "Invalid operation" });
    }

    res.json({ result });
});


app.get("/getPincodeData", async (req, res) => {
    try {
        const pincode = req.query.pincode; // Get the pincode from the query parameter

        // Make a GET request to the API
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);

        // Extract relevant data from the response
        const data = response.data;

        // Send the extracted data back to the frontend    
        console.log(data);

        res.json(data);
    } catch (error) {
        // Handle errors
        console.error("Error fetching pincode data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



app.listen(3000, () => {
    console.log("listening on port 3000");
})