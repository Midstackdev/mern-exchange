# Alfred-Tamakloe
Alfred Tamakloe - Mid/Senior FS developer - tech test - deadline 6th June 

# Getting Started with Exchanger Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) in client.
Also [Node.js](https://nodejs.org/en/) with [Express.js](https://expressjs.com/) in server.


### Demo Video

- Click here [Link](https://www.loom.com/share/13cfeefed4c941e8a5ecb19b448549fb) for the demo video. 


### Environment

- Setup your .env file in the server folder with the .env.example file and varaibles
```
X_COIN_API_KEY='your-coin-api=key'
```
- This is crital for the functioning of the application
```
DELAY_IN_MINUTES='minutes-elapsed-for-rates-to-refresh'
```
- This is should be set lower for all currencies rates to be loaded. There is a concurrency limit but handled somehow.


## Available Scripts

In the project directory, you can run the normal way:
```
$ cd client && yarn install & yarn start
```
```
$ cd server && yarn install & yarn dev
```

## Run with Docker
In the project directory, you can run it with docker:

### `docker-compose up -d --build`


This will build your docker images an runs the app containers in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `docker-compose down`

This will stop the running containers in docker and disconnenct the application network in docker.



## Learn More

Live event are controlled with [Socket.io](https://socket.io/).

### Issues

Initially updating the rates from CoinApi without the ratesRefresher function that has a timeout to delay the concurrency throws: 'You exceeded Concurrency limit (number of maximum allowed concurrent requests per APIKey) for your subscription. Information about the current limit values can be found in the response headers included in this response, named X-ConcurrencyLimit-*. More information about this constraint can be found in the product documentation. Please reduce concurrency/threads or talk to the support about the upgrade'

