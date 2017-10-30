import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import userRoute from './routes/user';
import fileRoute from './routes/file';

/* eslint-disable function-paren-newline */

require('dotenv').config();


const app = express();
const port = process.env.PORT || 2000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', userRoute);
app.use('/', fileRoute);

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use('/dist', express.static(path.join(__dirname, '../client/src/index.html')));

app.get('/*', (req, res) => res.sendFile(
  path.join(__dirname, '../client/src/index.html')
));

app.listen(port, () => console.log(`Server started on port ${port}`));

export default app;
