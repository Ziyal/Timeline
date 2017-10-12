$(document).ready(function() {
    
    function checkActive() {
        console.log("Check Active hit!")
        if($(this).siblings("#content").hasClass("active")) {
            $(this).siblings("#content").removeClass("active")
        } else {
            $(this).siblings("#content").addClass("active")
        }
    }

    function displayForm() {
        
    }

    $(document).on("click", ".title", checkActive);
    $(document).on("click", ".add-btn", displayForm);
    
});
