var input_container = document.querySelectorAll('.input-container'),
	lively_bar = document.querySelectorAll('.lively-bar'),
	row_input_content = document.querySelectorAll('.row-input-content'),
	form_input = document.querySelectorAll('.form-input');

/*function livelyBar(posicion){
	return function(){
		lively_bar[posicion].classList.add('active');
		row_input_content[posicion].classList.add('active');
		for(var b=0; b<input_container.length; b++){
			input_value = form_input[posicion].value;
			if(input_value === ''){
				console.log('Todos los  input estan vacio');
			}else{
				console.log('Todos los  input estan lleno');
			}

		}
	};
}

for(var a=0; a<input_container.length; a++){
	input_container[a].addEventListener('click', livelyBar(a));
}*/

//Script para el select
/*var form_select = document.querySelector('.form-select'),
	ul_form_select = document.querySelector('.ul-form-select');

form_select.addEventListener('click', function(){
	ul_form_select.classList.add('active');
});*/

//Para que si no escribes nada, regrese a aus estado
$('.form-input').focusin(function() {
	$(this).parent().find('.lively-bar').addClass('active');
	$(this).parent().find('.row-input-content').addClass('active');

});
$('.form-input').focusout(function() {
	$(this).parent().find('.row-input-content').removeClass('active');
	$(this).parent().find('.lively-bar').removeClass('active');
});
$('body').on('change', '.form-input', function(event) {
	$input = $(this);
	if ($input.val().length < 1) {
		$(this).parent().find('.row-input-content').removeClass('active1');
		console.log('Estoy vacio');
	}else{
		$(this).parent().find('.row-input-content').addClass('active1');
		console.log('Estoy lleno');
	}
});


//Validacion del formulario

$("form").validationEngine('attach', {
	promptPosition : "bottomLeft",
	autoHidePrompt: true,
	autoHideDelay: 2000,
	binded: false,
	scroll: false,
	validateNonVisibleFields: true,
	prettySelect : true,
	useSuffix: "_chosen",
	'custom_error_messages': {
		'custom[number]': {
			'message': "Debe ingresar un número válido"
		}

	}
});

$(".button-form").click(function(e) {
	e.preventDefault();
	var valid = $(this).closest('form').validationEngine('validate');
	if (!valid){
		// alert ('error');
	}else{
		// window.location.href='gracias.html';
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var phone = document.getElementById('tel').value;
		var description = document.getElementById('write').value;
		console.log("Contactanos: "+name+","+email+","+phone+","+description);
		$.ajax({
		type: 'POST',
		dataType: 'json',
				url: 'https://www.doapps.me/client/api/send-email.php',
				data: {
						message_name: name,
						message_phone: phone,
						message_email: email,
						message_text: description},
				beforeSend: function() {
						swal({   title: "Enviando...",   text: "Falta muy poco.",   showConfirmButton: false });
				},
				success: function(data){
						if (data.success == 1)
						{
								console.log(data.message);
								swal("Mensaje enviado!", "Revisaremos tu correo, gracias por contactarnos.", "success");
								document.getElementById('name').value = "";
								document.getElementById('email').value = "";
								document.getElementById('tel').value = "";
								document.getElementById('write').value = "";
						}
						else{
								console.log(data.message);
								swal("Ocurrió un problema", "Inténtalo nuevamente o escríbenos a hola@doapps.me", "error");
						}
				},
				error: function(){
						console.log('error!');
						swal("Ocurrió un problema", "Inténtalo nuevamente o escríbenos a hola@doapps.me", "error");
				}
		});
	}
});
