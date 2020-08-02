
$(document).ready(function(){
	
	initialise();
	getTrainerDetails();
   	getAboutUsDetails();
   	getBannerImages();

	
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

function initialise(){
	$(".passwordErrorField").hide();
	$(".errorField").hide();
	$(".forgotPasswordErrorField").hide();
	$(".forgotPasswordMessageField").hide();
	$(".loginErrorField").hide();
}
function getTrainerDetails(){
	$.ajax({
        url: 'http://localhost:3333/trainers',
        type: 'GET',
        dataType: "json",
        success: function (data) {
        	for (i = 0; i < data.length; i++) {
			  var trainer_content = data[i];
			  console.log(trainer_content.trainer_details)
			  var html = "";

			  html = `
						<div class="card">
						  	<img src="./images/`+trainer_content.trainer_image+`" class="card-img-top" alt="Image">
							  	<div class="card-body">
								<h3 style="text-align:center;">`+trainer_content.trainer_name+`</h3>
								<p>`+trainer_content.trainer_details+`</p>

								<p class="card-text text-center"></p>

							</div>
						</div>
						`;
						$(".trainer_container").append(html);
			  
			}
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        }
    });	
}

function getAboutUsDetails(){
	$.ajax({
        url: 'http://localhost:3333/aboutus',
        type: 'GET',
        dataType: "json",
        success: function (data) {
        	console.log(data);
        	var aboutus_content = data;
            $(".about_us_title").append(data[0].title);
            $(".about_us_content").append(data[0].content);
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });	
}

function getBannerImages(){
	$.ajax({
        url: 'http://localhost:3333/banners',
        type: 'GET',
        dataType: "json",
        success: function (data) {
			var j = 1;
        	for (i = 0; i < data.length; i++) {
			  	var banner_content = data[i];
			  	j=j++;
			  	var html = "";
			  	html = `
			  		<div class="mySlides">
		    			<div class="numbertext">`+j+` / `+data.length+`</div>
		    			<img src="./images/`+banner_content.banner_image+`" height="500" style="width:100%">
		  			</div>
				`;
				$( html ).insertBefore( ".prevButton" );
			}
			showSlides(1);

        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });	
}