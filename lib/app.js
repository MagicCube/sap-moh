import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();
app.attach = ((httpServer) => {
  httpServer.on('request', app);
});
app.use(express.static('public'));

app.use('/api', require('./http/api').default);

const builderConfig = require('../webpack.config');

const builder = webpack(Object.assign({
  devtool: 'cheap-module-source-map'
}, builderConfig));
app.use(webpackDevMiddleware(builder, {
  publicPath: builderConfig.output.publicPath
}));

export default app;
