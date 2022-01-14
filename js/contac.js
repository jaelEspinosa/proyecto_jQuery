$(document).ready(function(){
	



// posts



// selector de tema

let theme=$("#theme")


$("#to-green").click(()=>{
     theme.attr("href","css/green.css");
});

$("#to-blue").click(()=>{
     theme.attr("href","css/blue.css");
});

$("#to-red").click(()=>{
     theme.attr("href","css/red.css");
});



// scroll hacia arriba de la web


$(".subir").click((e)=>{
	
    e.preventDefault();

	$("html, body").animate({
		scrollTop:0
	}, 1000);
	return false

});

              //login falso

$("#login form").submit(()=>{

  let formName = $("#name").val();
  
  localStorage.setItem("formName", formName);
})

let formName=localStorage.getItem("formName")

if(formName !=null && formName!= "undefined"){
	let aboutParrafo = $("#about p")

	aboutParrafo.html("<strong>Bienvenido, " + formName +"</strong></hr>");
	aboutParrafo.append("<hr><a href ='#' id ='logout'> cerrar sesion</a>")
	$("#login").hide();
    $("#logout").click(()=>{
    	
    	localStorage.clear();
    	location.reload();
    })
}


// validacion


$("form input[name = 'date']").datepicker({
	dateFormat:'dd-mm-yy'
});

$.validate({
	lang :'es',
	errorMessagePosition: 'top',
	scrollToTopOnError: true
   });
 







}); // end ready