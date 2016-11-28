  $(document).ready(function() {


    $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor ingresa tu nombre'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor ingresa tu apellido'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingresa tu direccion de e-mail'
                    },
                    emailAddress: {
                        message: 'Por favor ingresa una direccion de e-mail válida'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingresa tu teléfono'
                    }
                }
            },
            hostel: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingresa un hostel'
                    }
                }
            },
			room: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingresa un tipo de habitación'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 0,
                        max: 400,
                        message:'Por favor ingresa un comentario menor a 400 caracteres'
                    }
                    }
                }
            }
        })
        // .on('success.form.bv', function(e) {
        //     $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
        //         $('#contact_form').data('bootstrapValidator').resetForm();
        //
        //     // Prevent form submission
        //     e.preventDefault();
        //
        //     // Get the form instance
        //     var $form = $(e.target);
        //
        //     // Get the BootstrapValidator instance
        //     var bv = $form.data('bootstrapValidator');
        //
        //     // Use Ajax to submit form data
        //     $.post($form.attr('action'), $form.serialize(), function(result) {
        //         console.log(result);
        //     }, 'json');
        // });
});
