const koa = require("koa");
const app = new koa();

app.use(async (ctx) => {
  ctx.body = "Hello World."
})

app.listen(3000);
console.log("Server listening on port 3000...")