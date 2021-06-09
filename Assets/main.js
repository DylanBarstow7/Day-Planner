/**Creating Save button */
document.querySelectorAll(".saveBtn").forEach((btn) => {
    btn.addEventListener("click", saveText);
});

/**Creating local storage */
function saveText() {
    let hour = $(this).parent().attr("id");
    let task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
}

/**Adding Momentjs to the page*/
document.querySelector("#currentDay").innerHTML =    
    moment().format("MMMM Do YYYY");
/**formats date as Jun 9th, 2021 */