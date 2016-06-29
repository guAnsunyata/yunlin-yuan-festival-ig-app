const koa = require('koa');
const app = module.exports = koa();
const serve = require('koa-static');
const path = require('path');

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
