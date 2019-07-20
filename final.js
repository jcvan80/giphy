const topics = ["stars" , "aurora" , "ocean" , "unknown" , "mystery"];

$("#buttons-view").empty();

for( let i =0; i < topics.length; i++) {
    var gifBttn = $("<button>")
    gifBttn.attr("id" , topics[i]);
    gifBttn.text(topics[i]);

    $("#buttons-view").append(gifBttn);
}

$("button").on("click" , function() {

    $("#showGif").empty();

    var gif = $(this).attr("id");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=K84VfPbCuUIxM6RSTgtiW1aB8Z3jgIcu&q="+gif+"&limit=10&offset=0&rating=G&lang=en"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;

        for (var g = 0; g < results.length; g++) {

            var gifImg = $("<img>");
            var gifDiv = $("<div>");

            gifImg.attr("src" , results[g].images.fixed_height.url);
            gifDiv.append(gifImg);

            $("#showGif").prepend(gifDiv);
        }
    })
})