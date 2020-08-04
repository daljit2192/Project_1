
$(document).ready(function(){
	
	initialise();
	getTrainerDetails();
   	getAboutUsDetails();
   	getBannerImages();
	getTestimonials();
	getPricing();
	getBlog();
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
        	var aboutus_content = data;
            $(".about_us_title").append(data[0].title);
            $(".about_us_content").append(data[0].content);
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });	
}

function getTestimonials(){
	$.ajax({
        url: 'http://localhost:3333/testimonials',
        type: 'GET',
        dataType: "json",
        success: function (data) {
        	console.log()
        	for (i = 0; i < data.length; i++) {
			  	var testimonial_content = data[i];
        		var html = "";
        		html = `
			  		<p1>`+testimonial_content.content+`</p1>
					<h6 class="my-5">`+testimonial_content.writer+`</h6>
				`;
				$(".testimonial_content").append(html);
			}
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
			  	
			  	var html = "";
			  	var thumbnailhtml = "";
			  	html = `
			  		<div class="mySlides">
		    			<div class="numbertext">`+j+` / `+data.length+`</div>
		    			<img src="./images/`+banner_content.banner_image+`" height="500" style="width:100%">
		  			</div>
				`;
				thumbnailhtml = `
			  		<div class="column slider_small_image">
			  			<img class="demo cursor" height="100" src="./images/`+banner_content.banner_image+`" style="width:100%" onclick="currentSlide(`+j+`)" alt="Northern Lights">
		  			</div>
				`;
				$( html ).insertBefore( ".prevButton" );
				$(".thumbnail_container").append(thumbnailhtml);
				j=j+1;
			}
			showSlides(1);

        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });	
}

function getPricing() {
	$.ajax({
        url: 'http://localhost:3333/pricing',
        type: 'GET',
        dataType: "json",
        success: function (data) {
			$.each(data, function (i) {
				// var templateString = '<article class="card"><h2>' + response[i].idpricing + '</h2><p>' + response[i].title + '</p><p>' + response[i].price + '</p><button id="tes">Start</button></article>';
			const stringArr = data[i].description.split(',');
			var templateString = `<div class="card-body"> <h4> ${data[i].title}</h4> <br> <p>$${data[i].price}</p> <br> <ul class="list-unstyled"> <li>${stringArr[0]}</li> <li>${stringArr[1]}</li> <li>${stringArr[2]}</li> <li>${stringArr[3]}</li> </ul> </div>`
			$(`#pricingCard${i+1}`).append(templateString);
			});
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });	
}

function getBlog() {
	$.ajax({
        url: 'http://localhost:3333/blogs',
        type: 'GET',
        dataType: "json",
        success: function (response) {
        	$.each(response, function (i) {
				const date = new Date(response[i].createdDate).toDateString();
				var templateString = `
				<div class="card-body text-center">
					<span class="date-formate"> ${date} </span>
				<h5 id="blog-title">
				${response[i].title}
				</h5>
				<p class="card-text">
					${response[i].description}
				</p>
	
				<content${i} style="display:none">
					${response[i].content}
				</content${i}>
				
				</div>`;
				$(`#blogcontent${i+1}`).append(templateString);
			})
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });		
}

function clickOnContent(thisData, i) {
	const data = thisData;
	const titleDate = data.outerText.split('\n');
	const contentData = $(`content${i}`).text().trim(' ');
	$(`#blog-modal-body`).text('');
	$(`#blog-modal-body`).append(contentData);
	$(`#blog-modal-title`).text('');
	$(`#blog-modal-title`).append(titleDate[1]);
}