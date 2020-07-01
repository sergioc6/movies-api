const Router = require("koa-router");
const router = new Router();

const baseUri = "/movies";

router.get(baseUri, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Movies returned",
  };
});

router.get(`${baseUri}/:id`, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Movie returned",
    data: ctx.params.id,
  };
});

router.post(baseUri, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Movie create",
    data: "Movie create",
  };
});

router.put(`${baseUri}/:id`, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Movie edited",
    data: ctx.params.id,
  };
});

router.put(`${baseUri}/:id`, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Movie edited",
    data: ctx.params.id,
  };
});

router.delete(`${baseUri}/:id`, async (ctx) => {
    ctx.body = {
      status: "success",
      message: "Movie deleted",
      data: ctx.params.id,
    };
  });

module.exports = router;
