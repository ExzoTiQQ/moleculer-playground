# Moleculer playground
## Prerequisites
[RabbitMQ](https://www.rabbitmq.com/) installed and running on default port.

## Project running
Running the project is straightforward:
```
$ npm install

$ npm start
```

## Description

Project contains following microservices:

 - `api.service` - provides API gateway service. Serves HTTP server on port 8080 or on the one specified in `PORT` environment variable. Exposes an endpoint at "/", expects `POST` request. Forwards received request to `sender.service`.
 - `sender.service` - once forwarded a request from `api.service`, verifies if request body is valid. If so, sends serialized request body into a `moleculer.message` queue. Responds with execution status.
 - `receiver.service` - reads from `moleculer.message` queue, deserealizes a message and logs it into a console after a specified period of time.

## Testing
```
$ npm test
```