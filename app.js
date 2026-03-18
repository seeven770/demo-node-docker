const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Demo Node Docker</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: #1e293b;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            text-align: center;
          }
          h1 { margin-bottom: 10px; }
          p { color: #cbd5e1; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Application Node.js OK</h1>
          <p>Démo web prête pour Docker et CI/CD</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});