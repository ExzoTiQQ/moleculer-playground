const AMQP = require("moleculer-amqp-queue");

module.exports = {
  name: "receiver",
  mixins: [AMQP],
  AMQPQueues: {
    async "moleculer.message"(channel, msg) {
      let message = JSON.parse(msg.content.toString());

      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(message);
          resolve();
        }, message.message.length * 1000);
      });

      channel.ack(msg);
    },
  },
};
