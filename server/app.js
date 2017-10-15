import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

/* eslint-disable function-paren-newline */

const app = express();
const port = process.env.PORT || 2000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    // publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use('/dist', express.static(path.join(__dirname, '../client/index.html')));

app.get('*', (req, res) => res.status(200).sendFile(
  path.join(__dirname, '../client/index.html')
));

app.listen(port, () => console.log(`Server started on port ${port}`));

export default app;
