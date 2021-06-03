"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
  name: "api",
  mixins: [ApiGateway],
  settings: {
    port: process.env.PORT || 8080,
    routes: [
      {
        aliases: {
          "POST /": "sender.send",
        },
      },
    ],
  },
};
