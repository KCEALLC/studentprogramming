
$(document).ready(function() {
    var option;
    // Set empty array
    var usersList = [];
    // hide initial state of divs
     $("#javascript").hide();
     $("#php").hide();
     $("#java").hide();
     $("#Cplusplus").hide();

     // Function for submit
    $("#submit").click(function(e){
        e.preventDefault();
        var firstName = $("input[name=firstname]").val();
        var lastName = $("input[name=lastname]").val();
        var courseJS = option;

        // Add User info to array
        usersList.push({name: firstName, lastname: lastName, course: courseJS});

        // sort array
        for (i = 0; i < usersList.length;i++) {
            if (usersList[i].course == "JavaScript") {
                $("#javascript").append("<div class=\"col-xs-6\">" + usersList[i].name + "</div>" + "<div class=\"col-xs-6\">" + usersList[i].lastname + "</div>");
                $("#javascript").show();
            } else if (usersList[i].course == "PHP") {
                $("#php").append("<div class=\"col-xs-6\">" + usersList[i].name + "</div>" + "<div class=\"col-xs-6\">" + usersList[i].lastname + "</div>");
                $("#php").show();
            } else if (usersList[i].course == "JAVA") {
                $("#java").append("<div class=\"col-xs-6\">" + usersList[i].name + "</div>" + "<div class=\"col-xs-6\">" + usersList[i].lastname + "</div>");
                $("#java").show();
            } else if (usersList[i].course == "C++") {
                $("#Cplusplus").append("<div class=\"col-xs-6\">" + usersList[i].name + "</div>" + "<div class=\"col-xs-6\">" + usersList[i].lastname + "</div>");
                $("#Cplusplus").show();
            }
            // Empty node array
            usersList.length = 0;
        }

        // Reset form after submission
        $("#form")[0].reset();
            
    });

    $(".selector").click(function(e) {
        e.preventDefault();
        option = $(this).html();
    });
});

