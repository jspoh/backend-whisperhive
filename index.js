const { env, app } = require("./app");

app.listen(env.PORT, () => {
  console.log(
    `App running in ${env.NODE_ENV} environment${
      env.NODE_ENV === "development" ? ` for ${env.DEV_TYPE} ` : " "
    }on port ${env.PORT}..`
  );
});
