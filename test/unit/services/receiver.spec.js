"use strict";

const { ServiceBroker } = require("moleculer");
const TestService = require("../../../services/receiver.service");

describe("Test 'receiver' service", () => {
  let broker = new ServiceBroker({ logger: false });
  broker.createService(TestService);

  const consoleSpy = jest.spyOn(console, "log").mockImplementation();
  jest.useFakeTimers();

  beforeAll(() => broker.start());
  afterAll(() => broker.stop());
  beforeEach(() => consoleSpy.mockClear());

  describe("Test receiver read message from queue", () => {
    it("should read message from the queue and log into console", async () => {
      // given
      let channel = {
        ack: jest.fn(),
      };
      const payload = { message: "123" };
      let mockedMessage = {
        content: Buffer.from(JSON.stringify(payload)),
      };

      let fn =
        broker.getLocalService("receiver").schema["AMQPQueues"][
          "moleculer.message"
        ];

      // when
      fn(channel, mockedMessage);
      jest.runOnlyPendingTimers();

      // then
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(payload);
    });
  });
});
