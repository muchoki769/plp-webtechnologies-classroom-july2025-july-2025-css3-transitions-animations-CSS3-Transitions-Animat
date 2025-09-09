

// Part 2
function getUser() {
    return {name: "Alice", age: 30};
}
let user = getUser(); //global scope
console.log(user.name);

function calculateArea(length, width) {
    let area = length * width; //local scope
    console.log(`The area of the room is ${area}`);
    return area;
}
calculateArea(5, 4);



//Part 3
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", () => {
    modal.classList.add("show");
});

closeModalButton.addEventListener("click", () => {
    modal.classList.remove("show");
})

