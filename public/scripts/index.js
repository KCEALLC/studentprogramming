
$(document).ready(function() {
    var option = undefined;
    var usersList = [];
    $("#submit").click(function(e){
        e.preventDefault();
        var firstName = $("input[name=firstname]").val();
        var lastName = $("input[name=lastname]").val();
        var courseJS = option;

        // Add User info to array
        usersList.push({name: firstName, lastname: lastName, course: courseJS});
        
        // sort array
        
        for (i = 0; i < usersList.length;i++) {
            $("#first").append("<p>" + usersList[i].name + "</p>");
            $("#last").append("<p>" + usersList[i].lastname + "</p>");
            $("#course").append("<h1>" + usersList[i].course + "</h1>");
            usersList.length = 0;
        }

        $("#course").text();
        $("#first").text();
        $("#last").text();
        $("#form")[0].reset();

            
    });

    $(".selector").click(function(e) {
        e.preventDefault();
        option = $(this).html();
        console.log($(this).html());
    });
});

