# RSS Depot

A repository of RSS Feeds.

## Accessing

The depot can be accessed at [RSS Depot](https://rssdepot.herokuapp.com/)

## Using RSS Depot

Search for a feed. E.G. CNN

[https://rssdepot.herokuapp.com/feeds?q=cnn](https://rssdepot.herokuapp.com/feeds?q=cnn)

Include all Feeds in a given Category

[https://rssdepot.herokuapp.com/categories/1/?_embed=feeds](https://rssdepot.herokuapp.com/categories/1/?_embed=feeds)

##Running Database Locally

To run database locally install [json-server](https://github.com/typicode/json-server)

    npm install -g json-server

Then run

    json-server --watch db.json

##Running Website Locally

To run the full website run the following npm script 

    npm run watch:server
    
To make changes to the site and use hot reloaded then simultaneously run

    npm run watch:bundle

## Contributions

Pull requests are welcome. Please ensure the all JSON changes pass [JSON Lint](http://jsonlint.com/)
