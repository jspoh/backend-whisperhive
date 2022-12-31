const app = require("./app");

app.listen(env.PORT, () => {
  console.log(
    `App running in ${env.NODE_ENV} environment on port ${env.PORT}..`
  );
});
