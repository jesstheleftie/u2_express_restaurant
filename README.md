### SEBR 0916

# The Express-taurant Menu App

![](https://media.gq.com/photos/62b9ffaec206adc9cdaa431b/16:9/w_3440,h_1935,c_limit/The_Bear_101_20210707_0043.jpg)
## Introduction

Now that we have our Express code built up, creating new dynamic routes to display JSON Data, lets render some information out and see how it will look in our browser

For this lab, lets create a back end server that renders data for a mock restaurant, detailing different types of cuisine, with JSON objects of the restaurant's dishes

## Requirements

### Pt 1 - Express Intro
- An Express Server with Index and Show routes for at least 3 different data models - Appetizers, Entrees, and Desserts
- At least 3 objects within each Index Route
- The ability to show an individual object by its Id in the route
- There is no limit to what you can do with each, but take some time to think of what your data should look like - Name? Price? An Image URL? How about booleans for things like Vegan, Gluten Free, Kosher, Halal...

![](https://cdn.theatlantic.com/thumbor/fOhoLS3VjtYyRW_yGBphIC1yyis=/0x0:8192x4608/960x540/media/img/mt/2023/06/thebear_s2/original.jpg)

## Bonus 

- We can show items by Id, can we filter and list a list of items by any other measurement (cuisine type, vegan/halal/kosher/ options...?) in our browser's URL via queries or params
- Can we show individual items inside of a cuisine type by the objects name? (something like localhost:3001/cajun/jambalaya or /indian/chicken%20vindaloo)

![](https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2249x1687+751+0/resize/2249x1687!/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F9a%2Fc9%2F3fbe0b904ec68d2b844dbbe7cddf%2Fbear-e302-00-08-11-10-still006.jpg)

### Pt 2 - Controllers - Do not attempt this section until we have completed our Controllers Lesson!
- Convert all of your routes from being coded in your main .js file into being run with controller fiess in a nested controllers folder exported out
