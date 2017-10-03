

var farmAnimalsArr = ["Goat", "Cow", "Piglet", "Rooster"];

function createButtons() {
	$("#buttons-view").empty();

	for (var i = 0; i < farmAnimalsArr.length; i++) {
	var animalButton = $("<button>");
	animalButton.addClass("farmanimal");
	animalButton.attr("data-name", farmAnimalsArr[i]);
	animalButton.text(farmAnimalsArr[i]);
	$("#buttons-view").append(animalButton);
	
	};
};

createButtons()

$("button").on("click", function() {
//how you grab data-person value from DOM
		var animalName = $(this).attr("data-name");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=XUJPQDaJO9j5MN6weo5lg0HFvU9YPXF9";

 	$.ajax({
 		url: queryURL,
	 	method: "GET"
	})

	.done(function(response) {
		console.log(response)

		var animalResults = response.data;
		for (var i = 0; i < 11; i++) {
		var gifDiv = $("<div class='item'>");
		var imgRating = animalResults[i].rating;
		var ratingDiv = $("<p>").text("Rating: " + imgRating);
		var animalPicture = $("<img>");
		animalPicture.attr("src", animalResults[i].images.fixed_height_still.url);

		gifDiv.append(ratingDiv);
		gifDiv.append(animalPicture)
		$("#animal-gifs").prepend(gifDiv)

		//createButtons()

			}
		})
});

		$("#add-animal").on("click", function(event) {

		event.preventDefault()
		var newAnimalName = $("#farm-input").val().trim();
		farmAnimalsArr.push(newAnimalName);
		
		createButtons()
})
	
//reassigning attribute to animated image when click the image div
$(".item").on("click", function() {

		animalPicture.attr("src", animalResults[i].images.fixed_height.url);
		gifDiv.append(animalPicture)
		$("#animal-gifs").prepend(gifDiv)
})
	function newFarmAnimal() {
	var farmAnimalName = $(this).attr("data-name");
	
}
	$(document).on("click", ".farmanimal", newFarmAnimal);
	//createButtons();





