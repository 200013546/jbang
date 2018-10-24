$("#character-search").on("keyup", function () {
  var searchedCharacter = $("#character-search")
    .val()
    .trim();
  $.get("/api/" + searchedCharacter, function (data) {
    console.log(data);
    $("#well-section").empty();
    if (!data) {
      $("#well-section").clear();
    }
    else {
      for (var i = 0; i < data.length; i++) {
        var linkShow = data[i].typeid;
        if (data[i].typeid === '') {
          linkShow = "Link";
        }
        linkShow += " - Title: " + data[i].title;
        linkTitle = "Description: " + data[i].metadata + "\u000d\u000dURL: " + data[i].url;
        var linkResults = $("<a>");
        linkResults.html(linkShow);
        linkResults.attr("href", data[i].url).attr('target', 'newlink');;
        linkResults.attr("title", linkTitle).attr('target', 'newlink');;
        linkResults.append("<br>");
        $("#well-section").append(linkResults);
      }
    }
  });
});
