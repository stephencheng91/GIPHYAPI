


//api key 8L4aVQa394LnTX4I6B98AtiQCSyY7hHo

var apiKey = "8L4aVQa394LnTX4I6B98AtiQCSyY7hHo";
//input take in as id
var input = "";
var image;

$("#submit").click(function (event) {
    event.preventDefault();


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

            image = $("<img>");

            image.attr("src", imageUrl);
            image.attr("alt", input + " image");

            $(".results").prepend(image);
        }

    })

    createButtons();
    //Checking input and url works
    console.log(queryURL);
    console.log(input);

})

function createButtons() {

    // create a button with id=input

    //  newButton =  button.text(input);
    var newButton = $("<button>");
    newButton.addClass("newButton");
    newButton.attr("id", input);
    newButton.text(input);



    $(".searchedButton").prepend(newButton);

    $(".newButton").click(function (event) {
        event.preventDefault();
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

                image = $("<img>");

                image.attr("src", imageUrl);
                image.attr("alt", input + " image");

                $(".results").prepend(image);
            }
        })
    })
}



