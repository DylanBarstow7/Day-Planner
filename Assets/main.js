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

updateHour();

/**Running the updateHour function every 30 seconds */
const timeCheck = setInterval(updateHour, 30000);

/** depending on the current time, the past, present, or future id will be chosen and applied to the respected time-blocks */
function updateHour() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
        let hour = parseInt($(this).attr('id'));
        if (hour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (hour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
