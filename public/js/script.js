$(document).ready(function(){
	$(".passwordErrorField").hide();
	$(".errorField").hide();
	$(".forgotPasswordErrorField").hide();
	$(".forgotPasswordMessageField").hide();
	$(".loginErrorField").hide();
	$(document).find("#submitUser").on("click",function(){

		if($("#firstName").val() == "" || $("#lastName").val() == "" || $("#email").val() == "" || $("#phone").val()=="" || $("#pwd").val() == "" ){
			$(".errorField").show();
		}
		else {
			$(".errorField").hide();
			if($("#pwd").val() !== $("#pwd2").val()){
				$(".passwordErrorField").show();		
			}
			else {
				$(".passwordErrorField").hide();			
				var user = {first_name:"",last_name:"",email:"",phone_number:"",password:"",created_at:"",updated_at:""};
				user.first_name = $("#firstName").val();
				user.last_name = $("#lastName").val();
				user.email = $("#email").val();
				user.phone_number = $("#phone").val();
				user.password = $("#pwd").val();

				$.ajax({
			        url: 'http://localhost:3333/user',
			        data: user,
			        type: 'POST',
			        dataType: "json",
			        success: function (data) {
			            console.log(jQuery.parseJSON(data));
			        },
			        error: function (xhr, status, error) {
			            console.log('Error: ' + error.message);
			        },
			    });	
			}
			

			
		}
		
	});

	$(document).find("#loginUser").on("click",function(){

		if($(".login_email").val() == "" || $(".login_pwd").val() == "" ){
			$(".loginErrorField").show();
		}
		else {
			$(".loginErrorField").hide();
			
			var user = {email:"",password:""};
			
			user.email = $(".login_email").val();
			user.password = $(".login_pwd").val();
			$.ajax({
		        url: 'http://localhost:3333/user/login',
		        data: user,
		        type: 'POST',
		        dataType: "json",
		        success: function (data) {
		            if(typeof data.data !== "undefined"){
		            	$(".signInButton").hide();
		            	$(".signInLi").append('<a class="nav-link"> Hello '+data.data.first_name+'</a>');
		            	$("#signin").modal('hide');
		            } else {

		            }
		        },
		        error: function (xhr, status, error) {
		            console.log('Error: ' + error.message);
		        },
		    });
		}
		
	});

	$(document).find("#sendEmail").on("click",function(){
		if($(".forgot_password_email").val() == "" ){
			$(".forgotPasswordErrorField").show();
		}
		else {
			$(".forgotPasswordErrorField").hide();
			$(".forgotPasswordMessageField").show();
			$(".forgot_password_email").val("");
		}
		
	});
});