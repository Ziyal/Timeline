$(document).ready(function() {
    
    function checkActive() {
        console.log("Check Active hit!")
        if($(this).siblings("#content").hasClass("active")) {
            $(this).siblings("#content").removeClass("active")
        } else {
            $(this).siblings("#content").addClass("active")
        }
    }

    $(document).on("click", ".title", checkActive);
});
