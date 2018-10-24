$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newCharacter = {
    title: $("#title").val().trim(),
    url: $("#url").val().trim(),
    metadata: $("#metadata").val().trim(),
    type: $("#type").val().trim()
  };
  $.post("/api/new", newCharacter)
    .then(function(data) {
      console.log(data);
      alert("Adding character...");
    });
  $("#title").val("");
  $("#url").val("");
  $("#metadata").val("");
  $("#type").val("");
});
