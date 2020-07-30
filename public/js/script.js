$(document).ready(function(){
	$(".passwordErrorField").hide();
	$(".errorField").hide();
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
});