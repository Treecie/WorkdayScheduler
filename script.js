$(document).ready(function () {// tells engine to load 1)html & 2)css first.
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
    //assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
    $("#9AM .description").val(localStorage.getItem("9AM"));
    $("#10AM .description").val(localStorage.getItem("10AM"));
    $("#11AM .description").val(localStorage.getItem("11AM"));
    $("#12PM .description").val(localStorage.getItem("12PM"));
    $("#1PM .description").val(localStorage.getItem("1PM"));
    $("#2PM .description").val(localStorage.getItem("2PM"));
    $("#3PM .description").val(localStorage.getItem("3PM"));
    $("#4PM .description").val(localStorage.getItem("4PM"));
    $("#5PM .description").val(localStorage.getItem("5PM"));
    

    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour(); // use of moment.js

       
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); //re-run function
})
