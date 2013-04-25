var fave_things = [
  "In-n-Out",
  "McDonald's",
  "Jack-in-the-Box",
  "Kentucky Fried Chicken",
  "Taco Bell"
];

function fave_fast_food(array) {
  for (var i = 0; i < array.length; i += 1) {
    console.log("My #" + (i+1) + "favorite fast food place is " + array[i]);
  }
}