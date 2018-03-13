# MobileCaddy Starter for Ionic


## Prerequisites

* Node v8.5.0+


## Getting Started

* Clone, or download and unzip, this repo, and `cd` into the dir

* Install dependencies
```
npm install
```

* Run MobileCaddy setup script
```
npm run mobilecaddy setup
```

## Running the app in CodeFlow

* We need to start a CORS server (if wanting to communiacate with SFDC, i.e. when not using mock data).
```
npm run mobilecaddy cors
```

* Start your app in a new shell with this
```
ionic serve --p 3030
```

You can also use the `?local` in the query string to use mock data (if you have any), but there is no way to record just yet.

## Recording mock data

Ours app can read data from local .json files, instead of talking to the actual Salesforce.com platform. To populate these .json files we can record responses from SFDC with the use of the `record` argument when running our CORS server, like this;
```
npm run mobilecaddy cors record
```