var selections = ["alex", "alfred", "anita", "anne", "bernard", "bill", "charles", "claire"]; 
var selectionsTwo = ["david", "eric", "frans", "george", "herman", "joe", "maria", "max"];
var selectionsThree = ["paul", "peter", "philip", "richard", "robert", "sam", "susan", "tom"];
var allSelections = selections.concat(selectionsTwo, selectionsThree);

//functon to come up with random player card
function random() {
	var x = Math.floor((Math.random() * allSelections.length));
	var randomCard='images/' + allSelections[x] + '.jpg';
	document.getElementById('fourth').src = randomCard;
}

//call the random card function
random();

$(document).ready(function(){
//add the card rows
function entry(row) {
for (var i=0; i < selections.length; i++) {
	//iterate through pictures
	var col="<img class='picture' src='images/" + row[i] + ".jpg' alt='" + row[i] + "'>";
$('.first-row').append(col);
}
}
$('.first-row').append(entry(selections)).append(entry(selectionsTwo)).append(entry(selectionsThree));

//add or remove opacity of clicked cards
$('.picture').on('click', function() {
		$(this).toggleClass('notChoice');
})
});


//to do: restart button