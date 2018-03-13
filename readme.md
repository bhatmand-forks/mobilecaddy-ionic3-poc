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

* We need to start a CORS server
```
npm run mobilecaddy cors
```

* Start your app in a new shell with this
```
ionic serve --p 3030
```

You can also use the `?local` in the query string to use mock data (if you have any), but there is no way to record just yet.