
$(document).ready(function() {
    var option;
    var usersList = [];
     $("#javascript").hide();
     $("#php").hide();
     $("#java").hide();
     $("#Cplusplus").hide();
    $("#submit").click(function(e){
        e.preventDefault();
        var firstName = $("input[name=firstname]").val();
        var lastName = $("input[name=lastname]").val();
        var courseJS = option;

        // Add User info to array
        usersList.push({name: firstName, lastname: lastName, course: courseJS});
        
        // empty node
        //$("#javascript").empty(); FIND THE METHOD TO EMPTY THE ARRAY

        console.log(courseJS);
        // sort array
        for (i = 0; i < usersList.length;i++) {
            if (usersList[i].course == "JavaScript") {
                $("#javascript").append("<div class=\"col-xs-6\">" + usersList[i].name + "</div>" + "<div class=\"col-xs-6\">" + usersList[i].lastname + "</div>");
                $("#javascript").show();
            //$("#last").append("<p>" + usersList[i].lastname + "</p>");
            //$("#course").append("<h1>" + usersList[i].course + "</h1>");
            } else if (usersList[i].course == "PHP") {
                $("#php").append("<div class=\"col-xs-6\">" + usersList[i].name + "</div>" + "<div class=\"col-xs-6\">" + usersList[i].lastname + "</div>");
                $("#php").show();
            } else if (usersList[i].course == "JAVA ") {
                $("#java").append("<div class=\"col-xs-6\">" + usersList[i].name + "</div>" + "<div class=\"col-xs-6\">" + usersList[i].lastname + "</div>");
                $("#java").show();
            } else if (usersList[i].course == "C++") {
                $("#Cplusplus").append("<div class=\"col-xs-6\">" + usersList[i].name + "</div>" + "<div class=\"col-xs-6\">" + usersList[i].lastname + "</div>");
                $("#Cplusplus").show();
            }
            
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
        console.log(e);
    });
});

