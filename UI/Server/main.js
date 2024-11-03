require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

const apiProxyTarget = process.env.API_PROXY_TARGET || "http://localhost:5000/graphql";
const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT || apiProxyTarget;
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
const env = { UI_API_ENDPOINT, REACT_APP_API_URL };

// Proxy API requests to the GraphQL server
if (apiProxyTarget) {
  app.use("/graphql", createProxyMiddleware({ target: apiProxyTarget, changeOrigin: true }));
}

// Serve environment variables to the client
app.get("/env.js", (req, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

// Serve the React app for any other route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

const port = process.env.UI_PORT || 3000;
app.listen(port, () => {
  console.log(`UI started on port http://localhost:${port}`);
}).on('error', (err) => {
  console.error(`Failed to start server: ${err.message}`);
});
