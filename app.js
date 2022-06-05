



// className sends the name of all the class of the given tag
// you can add class in a tag using className


(function() {
	[...document.querySelectorAll(".control")].forEach(button => {
		button.addEventListener("click", function() {
			document.querySelector(".active-btn").classList.remove("active-btn");	//remove the active-btn class from any button holding it 
			this.classList.add("active-btn");										//and add it to the current div classes, this refers to the current element in the array

			document.querySelector(".active").classList.remove("active");
			document.getElementById(button.dataset.id).classList.add("active");
		})
	})
})();


// document.querySelectorAll(".control") will give you the array of classes of each div
// document.querySelector(".active-btn") will grab hold of the entire div
