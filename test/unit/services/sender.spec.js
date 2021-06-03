"use strict";

const { ServiceBroker } = require("moleculer");
const TestService = require("../../../services/sender.service");

describe("Test 'sender' service", () => {
  let broker = new ServiceBroker({ logger: false });
  broker.createService(TestService);

  beforeAll(() => broker.start());
  afterAll(() => {
    broker.stop();
  });

  describe("Test 'sender.send' action", () => {
    it("should execute successfully given valid input data", async () => {
      // given
      const payload = {
        timestamp: 1,
        user: "john",
        message: "1111",
      };

      // when
      const res = await broker.call("sender.send", payload);

      // then
      expect(res).toStrictEqual({ status: "SUCCESS" });
    });
  });
});
