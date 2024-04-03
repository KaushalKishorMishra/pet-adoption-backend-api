import * as express from "express";
import * as path from "path";

const app = express();
const port = process.argv[3] || 4000;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
