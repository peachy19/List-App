import app from './app';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`ItemsList app listening at http://localhost:${port}`);
});
