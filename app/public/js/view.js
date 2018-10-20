// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
$("#character-search").on("keyup", function () {
  // save the character they typed into the character-search input
  var searchedCharacter = $("#character-search")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/" + searchedCharacter, function (data) {
    // log the data to our console
    console.log(data);
    // empty to well-section before adding new content
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
      $("#well-section").append("<h2> The force is not strong with this one. Your character was not found. </h2>");
    }
    else {
      // otherwise
      // append the character name
      for (var i = 0; i < data.length; i++) {
        $("#well-section").append("<h2><a href=" + data[i].url + ">" + data[i].title + "</a></h2>");
        // the role
        //$("#well-section").append("<h3>URL: " + data[i].url + "</h3>");
        // the age
        //$("#well-section").append("<h3>MetaDta: " + data[i].metadata + "</h3>");
        // and the force points
        //$("#well-section").append("<h3>Popularity: " + data[i].popularity + "</h3>");
      }
    }
  });
});
