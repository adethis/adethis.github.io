searchVisible = 1;
transparent = true;

$(document).ready(function(){
    /*  Activate the tooltips      */
    $('[rel="tooltip"]').tooltip();
      
    $('.wizard-card').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',
         

        onNext: function(tab, navigation, index){
            if(index == 1){
                return validateFirstStep();
            } //etc. 
              
        },
        onTabClick : function(tab, navigation, index){
            // Disable the posibility to click on tabs
            return true;
        }, 
        onTabShow: function(tab, navigation, index) {
            var $total = 1;
            var $current = index;
            
        }
    });

    // Prepare the preview for profile picture
    $("#wizard-picture").change(function(){
        readURL(this);
    });
    
    $('[data-toggle="wizard-radio"]').click(function(){
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked','true');
    });
    
    $('[data-toggle="wizard-checkbox"]').click(function(){
        if( $(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked','true');
        }
    });
    
    $height = $(document).height();
    $('.set-full-height').css('height',$height);
    
    
});

function validateFirstStep(){
    
    $(".wizard-card form").validate({
		rules: {
			
/*  other possible input validations */
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
		
			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},
			
			streetname: {
				required: true,
				minlength: 2
			},
			agree: "required"
/**/			

		},
		messages: {
			firstname: "Please enter your First Name",
			lastname: "Please enter your Last Name",
			email: "Please enter a valid email address",

/*   other posible validation messages */
			username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			},
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			streetname: {
				required: "Enter your street name",
				minlength: "Your streetname must be at least 5 characters"
			},
			email: "Please enter a valid email address",
			agree: "Please accept our policy",
			topic: "Please select at least 2 topics"
/* */
				
		}
	}); 
	
	if(!$(".wizard-card form").valid()){
    	//form is invalid
    	return false;
	}
	
	return true;
}

function validateSecondStep(){
   
    //code here for second step
    $(".wizard-card form").validate({
		rules: {

		},
		messages: {

		}
	}); 
	
	if(!$(".wizard-card form").valid()){
    	console.log('invalid');
    	return false;
	}
	return true;
    
}

function validateThirdStep(){
    //code here for third step
    
    
}

function validateFourthedStep(){
	//code here for fourthed step
}

 //Function to show image before upload

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}
    
// Preloder script
jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('.preloader').fadeOut('slow', function () {
            });
        },1500);

    });  
});

//Preloder script
jQuery(window).load(function(){'use strict';

	// Slider Height
	var slideHeight = $(window).height();
	$('#header .banner-text').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#header .banner-text').css('height',slideHeight);
	});

});
$('#address').validate({
	rules: {
		streetname: "required"
	},
	messages: {
		streetname: "Please enter your Street Name"
	}
});