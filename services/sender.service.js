"use strict";
const AMQP = require("moleculer-amqp-queue");

module.exports = {
  name: "sender",
  mixins: [AMQP],
  actions: {
    send: {
      rest: {
        method: "POST",
        path: "/",
      },
      params: {
        timestamp: { type: "number" },
        user: { type: "string" },
        message: { type: "string" },
      },
      async handler(ctx) {
        this.addAMQPJob("moleculer.message", ctx.params);

        return { status: "SUCCESS" };
      },
    },
  },
};
