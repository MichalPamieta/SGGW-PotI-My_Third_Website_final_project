//Here should be the implementation of sending email via the contact form (send json and return result of sending), but from May 30, 2022 it will be unavailable for google domain (gmail addresses)
jQuery(document).ready(function ($) {
  "use strict";

  //Contact form
    /*
    $(function () {
        $("form.contactForm input, form.contactForm textarea").jqBootstrapValidation({
            preventSubmit: true,
            submitError: function ($form, event, errors) {
            },
            submitSuccess: function ($form, event) {
                event.preventDefault();
                var name = $("input#name").val();
                var email = $("input#email").val();
                var subject = $("input#subject").val();
                var message = $("textarea#message").val();
                */

                /*
                var formData = { 
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                }

                var formData = {};
                formData.Name = name;
                formData.Email = email;
                formData.Subject = subject;
                formData.Message = message;
                */

             /*
                $("#sendMessageButton").prop("disabled", true);

                $.ajax({
                    url: "/Home/SendMessage",
                    type: "POST",
                    //data: formData,
                    data: {
                        name: name,
                        email: email,
                        subject: subject,
                        message: message
                    },
                    cache: false,
                    success: function (response) {
                        if (response.success) {
                            $("#sendMessageSuccess").addClass("show");
                            $("#sendMessageError").removeClass("show");
                            $('.contactForm').find("input, textarea").val("");
                        } else {
                            $("#sendMessageSuccess").removeClass("show");
                            $("#sendMessageError").addClass("show");
                        }
                    },
                    error: function (response) {
                        $("#sendMessageSuccess").removeClass("show");
                        $("#sendMessageError").addClass("show");
                        $('.contactForm').trigger("reset");
                    },
                    complete: function () {
                        setTimeout(function () {
                            $("#sendMessageButton").prop("disabled", false);
                        }, 5000);
                        setTimeout(function () {
                            $("#sendMessageSuccess").removeClass("show");
                            $("#sendMessageError").removeClass("show");
                        }, 30000);
                    },
                    dataType: "json",
                    contentType: 'application/json; charset=utf-8'
                });
            },
            filter: function () {
                return $(this).is(":visible");
            },
        });

    });

    $(".form-control").focus(function () {
        $("#sendMessageSuccess").removeClass("show");
        $("#sendMessageError").removeClass("show");
    });
    */

    /*
    $("form.contactForm").focusin(function () {
        $("#sendMessageSuccess").removeClass("show");
        $("#sendMessageError").removeClass("show");
    });
    */

});