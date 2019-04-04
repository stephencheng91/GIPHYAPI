


//api key 8L4aVQa394LnTX4I6B98AtiQCSyY7hHo

var apiKey = "8L4aVQa394LnTX4I6B98AtiQCSyY7hHo";
//input take in as id
var input = ""


$("#submit").click(function(event){
    event.preventDefault();


    input=$("#inputText").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    input + "&api_key=" +apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        //getting url from server
        var imageUrl = response.data.images_original_url;
        //create image div in html
        var image = $("<img>");

        image.attr("src", imageUrl);
        image.attr("alt", input + " image");

        $(".results").prepend(image);
    })
    
    createButtons();
    //Checking input and url works
    console.log(queryURL);
    console.log(input);

})

function createButtons(){
    var button = $("<button>");
    
    button.text(input);

    $(".searchedButton").prepend(button);
}
