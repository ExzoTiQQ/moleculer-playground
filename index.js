"use strict";

require("dotenv").config();

const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.loadServices(__dirname + "/services");

broker.start();
