# Movie Titles Challenge Validator

You can use this library to validate your answer before you submit your code.

## Install

```console
$ npm install movie-titles-fetcher
```

## Usage

```javascript
const MovieTitlesFetcher = require("movie-title-fetcher");

const fetcher = new MovieTitlesFetcher();
fetcher.get("spiderman").then(result => {
  // All titles including "spiderman" are returned
  console.log(result);
});
```
