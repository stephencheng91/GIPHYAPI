


//api key 8L4aVQa394LnTX4I6B98AtiQCSyY7hHo

var apiKey = "8L4aVQa394LnTX4I6B98AtiQCSyY7hHo";
//input take in as id
var input = "";
var image;
var topics = [];

$("#submit").click(function (event) {
    event.preventDefault();
    $(".results").empty();
    input = $("#inputText").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        input + "&api_key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //getting url from server ;
        var gifData = response.data
        //create image div in html
        for (var i = 0; i < gifData.length; i++) {

            var imageUrl = gifData[i].images.original.url;
            var imageUrlAlt = gifData[i].images.original_still.url;

            image = $("<img>");

            image.addClass("clickImage");
            image.attr("src", imageUrl);
            image.attr("alt-src", imageUrlAlt);
            image.attr("alt", input + " image");

            $(".results").prepend(image);
        }
        $(".clickImage").on("click", function (event) {
            event.preventDefault();
            var imageCurrent = $(this).attr("src");
            var imageAlt = $(this).attr("alt-src");
            $(this).attr("src", imageAlt);
            $(this).attr("alt-src", imageCurrent);
        })

    })
    topics.push(input);
    console.log(topics)
    createButtons();
    //Checking input and url works
    console.log(queryURL);
    console.log(input);

})

function createButtons() {

    // create a button with id=input
    $(".searchedButton").empty();
    //  newButton =  button.text(input);
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("newButton");
        newButton.attr("id", topics[i]);
        newButton.text(topics[i]);
        console.log("createButtons")
        $(".searchedButton").prepend(newButton);
    }

    $(".newButton").click(function (event) {
        event.preventDefault();
        console.log("onclick")
        $(".results").empty();

        var topic = $(this).attr("id");
        console.log(topic);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            topic + "&api_key=" + apiKey;

        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            //getting url from server ;
            var gifData = response.data
            //create image div in html
            for (var i = 0; i < gifData.length; i++) {

                var imageUrl = gifData[i].images.original.url;
                var imageUrlAlt = gifData[i].images.original_still.url;

                image = $("<img>");

                image.addClass("clickImage");
                image.attr("src", imageUrl);
                image.attr("alt-src", imageUrlAlt);
                image.attr("alt", input + " image");

                $(".results").prepend(image);
            }
            $(".clickImage").on("click", function (event) {
                event.preventDefault();
                var imageCurrent = $(this).attr("src");
                var imageAlt = $(this).attr("alt-src");
                $(this).attr("src", imageAlt);
                $(this).attr("alt-src", imageCurrent);
            })

        })
    })
}



