import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import userRoute from './routes/user';
import fileRoute from './routes/file';
import courseRoute from './routes/course';

/* eslint-disable function-paren-newline */

require('dotenv').config();


const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', userRoute);
app.use('/', fileRoute);
app.use('/', courseRoute);

if (process.env.NODE_ENV !== 'production') {
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use('/dist', express.static(path.join(__dirname, '../client/src/index.html')));

  app.get('/*', (req, res) => res.sendFile(
    path.join(__dirname, '../client/src/index.html')
  ));
} else {
  app.use('/dist', express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => res.status(200).sendFile(
    path.resolve(__dirname, '../client/src/index.html')
  ));
}
app.listen(port, () => console.log(`Server started on port ${port}`));

export default app;
