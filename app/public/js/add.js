// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var newCharacter = {
    // name from name input
    title: $("#title").val().trim(),
    // role from role input
    url: $("#url").val().trim(),
    // age from age input
    description: $("#description").val().trim(),
    // points from force-points input
    type: $("#type").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newCharacter)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding character...");
    });

  // empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#url").val("");
  $("#description").val("");
  $("#type").val("");

});
