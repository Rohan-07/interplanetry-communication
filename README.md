# Interplanetry Communication

An API based communication system that uses encode and decode of message as they are typed through mobile keypad (Remember the good old Nokia 3310 😉)

# Installation guide

## Install the dependencies and devDependencies and start the server.

```sh
cd interplanetry-communication
yarn
yarn run start:dev
```

## Docker setup

```sh
cd interplanetry-communication
docker build -t interplanetry-communication .
docker run -p 3000:3000 interplanetry-communication
```

# API usage

Sending message from Earth will looks like:

```
header: {
    x-sender: earth
    x-receiver: mars
}

body: {
    "message": "Houston do you copy"
}
```

Respose should looklike:

```
{
    "Response from Mars": "#44.666.88.7777.8.666.66.0.3.666.0.999.666.88.0.222.666.7.999.",
    "Nokia Translation": "Houston do you copy"
}
```

Sending message from Mars will looks like:

```
header: {
    x-sender: mars
    x-receiver: earth
}

body: {
    "message": "#444.3.444.666.8.0.#444.0.2.6.0.#33.555.666.66.0.66.666.8.0.#44.666.88.7777.8.666.66."
}
```

Respose should looklike:

```
{
    "Response from Earth": "Idiot I am Elon not Houston",
    "Nokia Translation": "#444.3.444.666.8.0.#444.0.2.6.0.#33.555.666.66.0.66.666.8.0.#44.666.88.7777.8.666.66."
}
```
