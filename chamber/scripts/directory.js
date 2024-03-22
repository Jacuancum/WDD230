const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
/*
gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
*/

gridbutton.addEventListener("click", () => toggleView("grid"));
listbutton.addEventListener("click", () => toggleView("list"));

function toggleView(view) {
    display.classList.toggle("grid", view === "grid");
    display.classList.toggle("list", view === "list");
}