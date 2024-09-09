/*
MongoDB Assignment: 
Sep 9, 2024
Author: Michael Marquez
cohort# 31
*/

// --------> newDB()
/* 
    operator: $and $or
    1. sample_mflix.movies
    filter data by TV-G and Western
 */
{
  $and: [{ rated: "TV-G" }, { genres: "Western" }];
}
/* 
    2. sample_airbnb.listingsAndReviews
    filter data by House and 2 nights
*/
{
  $or: [{ property_type: "House", minimum_nights: "2" }];
}

// --------> newDB()
/* 
    operator: $not $nor
    1. sample_supplies.sales
    filter data by not Denver
 */
{
  storeLocation: {
    $not: /^Denver$/;
  }
}
/* 
    2. sample_supplies.sales
    filter data by neither items array name notepad nor LondonHouse 
*/
{
  $nor: [
    { items: { $elemMatch: { name: "notepad" } } },
    { storeLocation: "London" },
  ];
}

// --------> newDB()
/* 
    operator: $eq $ne
    1. sample_supplies.sales
    filter data by items array name "notepad"
 */
{
  items: {
    $elemMatch: {
      name: {
        $eq: "notepad";
      }
    }
  }
}
/* 
    2. sample_guides.planets
    filter data by mainAtmosphere array not Helium 
*/
{
  mainAtmosphere: {
    $ne: "He";
  }
}

// --------> newDB()
/* 
    operator: $gt $lt
    1. sample_analytics.accounts

    filter data by items array name "notepad"
 */
{
  limit: {
    $gt: 9000;
  }
}
/* 
    2. sample_restaurants.restaurants
    filter data by grades array score > 5 and < 10
*/
{
  $and: [
    { grades: { $elemMatch: { score: { $gt: 5 } } } },
    { grades: { $elemMatch: { score: { $lt: 10 } } } },
  ];
}

// --------> newDB()
/* 
    operator: $in $nin
    1. sample_restaurants.neighborhoods
    filter data by name in Midwood and Jamaica
 */
{
  name: {
    $in: ["Midwood", "Jamaica"];
  }
}
/* 
    2. sample_restaurants.restaurants
    filter data by grades array score > 5 and < 10
*/
{
  property_type: {
    $nin: ["House", "Apartment"];
  }
}
