const koa = require("koa");
const bodyParser = require("koa-bodyparser");

const app = new koa();

app.use(bodyParser());

app.use(async ctx => {
  console.log(ctx.request.rawBody);
  ctx.body = {
    result: "Hello " + (ctx.request.body.name || "nobody") + "!"
  };
});

app.listen(3000);
console.log("Server listening on port 3000...");
