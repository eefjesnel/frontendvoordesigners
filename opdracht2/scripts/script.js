// JavaScript Document
console.log("howdy");

// library --> https://sortablejs.github.io/Sortable/
// documentatie --> 

var kledingkast = document.querySelector("section:nth-of-type(1) ul:first-of-type");
var outfit = document.querySelector("section:nth-of-type(2) ul:last-of-type");


new Sortable(kledingkast, {
	group: {
		name: 'kleding', // zelfde naam als bij allesLijstje
		pull: 'clone',
	},
  sort: false,
	animation: 300 // een kleine animatie als een foto van plek wisselt
});

new Sortable(outfit, {
	group: {
		name: 'kleding', // zelfde naam als bij favoLijstje 
    pull: 'true'
	},
	animation: 300 // een kleine animatie als een foto gecloned wordt
});



