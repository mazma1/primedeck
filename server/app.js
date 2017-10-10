import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 2000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).sendFile(
  path.resolve(__dirname, '../client/index.html')
));

app.get('*', (req, res) => res.status(200).sendFile(
  path.resolve(__dirname, '../client/dist/index.html')
));


app.listen(port, () => console.log(`Server started on port ${port}`));

export default app;
