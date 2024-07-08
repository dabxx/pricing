// server.js

const app = require("./App"); // Import the Express app
const PORT = process.env.PORT || 3000; // Define the port number

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  