# bestrequests
Javascript library to define handlers for commom codes as a middleware request maker on project

# how to use

## install

> npm i @github.com/avodevelopment/bestrequests

## usage

```javascript
import { request } from 'bestrequests';

const handlers = { 
    on200: () => {},
    on504: handleError,
    on204: console.log('Everything ok'),
    on201: function(response) {
        JSON.stringify(response.body);
    }
}

return request({ input, init, ...handlers });

```

handlers are limited by HTML response codes.