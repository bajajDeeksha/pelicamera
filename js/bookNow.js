$(function() {

    $("#bookForm input,#bookForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmitBookNow").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            var date = $("#btnSubmitBookNow").attr("data-date");
            var bookingType = $("#btnSubmitBookNow").attr("data-bookingType");
            var name = $("input#bookNowName").val();
            var email = $("input#bookNowEmail").val();
            var sub = $("input#bookNowSub").val();
            var message = $("textarea#bookNowMessage").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/book_now.php",
                type: "POST",
                data: {
                    bookingType : bookingType,
                    date : date,
                    name: name,
                    sub: sub,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Enable button & show success message
                    $("#btnSubmit").attr("disabled", false);
                    $('#bookNowSuccess').html("<div class='alert alert-success'>");
                    $('#bookNowSuccess > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#bookNowSuccess > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#bookNowSuccess > .alert-success')
                        .append('</div>');
                    console.log("success");
                    //clear all fields
                    $('#bookForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#bookNowSuccess').html("<div class='alert alert-danger'>");
                    $('#bookNowSuccess > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#bookNowSuccess > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#bookNowSuccess > .alert-danger').append('</div>');
                    //clear all fields
                    console.log("error");
                    $('#bookForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#bookNowName').focus(function() {
    $('#bookNowSuccess').html('');
});