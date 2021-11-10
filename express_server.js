const { response, request } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 8080; // default port
app.set("view engine", "ejs");
const urlDatabase = {
  b2xVn2: "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com",
};

app.get("/", (request, response) => {
  response.send("Hello!");
});

app.get("/urls.json", (request, response) => {
  response.json(urlDatabase);
});
app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});
app.get("/set", (req, res) => {
  const a = 1;
  res.send(`a = ${a}`);
});

app.get("/fetch", (req, res) => {
  res.send(`a = ${a}`);
});
app.get("/urls", (request, response) => {
  const templateVars = { urls: urlDatabase };
  response.render("urls_index", templateVars);
});
app.get("/urls/new", (request, response) => {
  response.render("urls_new");
});
app.get("/urls/:shortURL", (request, response) => {
  const templateVars = {
    shortURL: request.params.shortURL,
    longURL: request.params.longURL,
  };
  response.render("urls_shows", templateVars);
});
app.get("/u/:shortURL", (req, res) => {
  // const longURL = ...
  res.redirect(longURL);
});
app.post("/urls/:shortURL/delete", (req, res) => {
  // extract the id
  const shortURL = req.params.shortURL;
  const longURL = req.params.longURL;

  // delete this url from the db
  delete urlDatabase[shortURL];
  delete urlDatabase[longURL];
  res.redirect("/urls");
});

app.get("/urls/:id", (req, res) => {
  // extract the quote id from the url
  const longURL = req.params.longURL;
  const longUrlObj = urlDatabase[longURL];
  const content = req.body.quote_content;

  // redirect

  res.redirect("/urls");
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
