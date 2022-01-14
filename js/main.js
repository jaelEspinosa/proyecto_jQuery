


$(document).ready(function(){
	
	// slider	
	
  $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    auto: true,
    slideWidth: 1200
  });


// posts


let posts = [
{
	title :'Prueba de titulo 1',
	date : "publicado el " + moment().format("dddd") +" " + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
	content :'Cras molestie nisi nec risus lobortis mollis. Aliquam augue tellus, tempor quis consequat eu, placerat sed velit. Donec interdum felis sit amet condimentum cursus. Ut dolor mi, lacinia vehicula mauris et, pulvinar malesuada dui. In sodales orci ut ipsum gravida, a mollis augue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, dui et pretium pharetra, nisl turpis accumsan neque, non commodo mauris quam sed quam. Nullam convallis neque non dolor consequat feugiat'
},
{
	title :'Prueba de titulo 2',
	date : "publicado el " + moment().format("dddd") +" " + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
	content :'Cras molestie nisi nec risus lobortis mollis. Aliquam augue tellus, tempor quis consequat eu, placerat sed velit. Donec interdum felis sit amet condimentum cursus. Ut dolor mi, lacinia vehicula mauris et, pulvinar malesuada dui. In sodales orci ut ipsum gravida, a mollis augue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, dui et pretium pharetra, nisl turpis accumsan neque, non commodo mauris quam sed quam. Nullam convallis neque non dolor consequat feugiat'
},
{
	title :'Prueba de titulo 3',
	date : "publicado el " + moment().format("dddd") +" " + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
	content :'Cras molestie nisi nec risus lobortis mollis. Aliquam augue tellus, tempor quis consequat eu, placerat sed velit. Donec interdum felis sit amet condimentum cursus. Ut dolor mi, lacinia vehicula mauris et, pulvinar malesuada dui. In sodales orci ut ipsum gravida, a mollis augue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, dui et pretium pharetra, nisl turpis accumsan neque, non commodo mauris quam sed quam. Nullam convallis neque non dolor consequat feugiat'
},
{
	title :'Prueba de titulo 4',
    date : "publicado el " + moment().format("dddd") +" " + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
	content :'Cras molestie nisi nec risus lobortis mollis. Aliquam augue tellus, tempor quis consequat eu, placerat sed velit. Donec interdum felis sit amet condimentum cursus. Ut dolor mi, lacinia vehicula mauris et, pulvinar malesuada dui. In sodales orci ut ipsum gravida, a mollis augue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, dui et pretium pharetra, nisl turpis accumsan neque, non commodo mauris quam sed quam. Nullam convallis neque non dolor consequat feugiat'
},

{
	title :'Prueba de titulo 5',
	date : "publicado el " + moment().format("dddd") +" " + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
	content :'Cras molestie nisi nec risus lobortis mollis. Aliquam augue tellus, tempor quis consequat eu, placerat sed velit. Donec interdum felis sit amet condimentum cursus. Ut dolor mi, lacinia vehicula mauris et, pulvinar malesuada dui. In sodales orci ut ipsum gravida, a mollis augue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, dui et pretium pharetra, nisl turpis accumsan neque, non commodo mauris quam sed quam. Nullam convallis neque non dolor consequat feugiat'
},
{
	title :'Prueba de titulo 6',
	date : "publicado el " + moment().format("dddd") +" " + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
	content :'Cras molestie nisi nec risus lobortis mollis. Aliquam augue tellus, tempor quis consequat eu, placerat sed velit. Donec interdum felis sit amet condimentum cursus. Ut dolor mi, lacinia vehicula mauris et, pulvinar malesuada dui. In sodales orci ut ipsum gravida, a mollis augue consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, dui et pretium pharetra, nisl turpis accumsan neque, non commodo mauris quam sed quam. Nullam convallis neque non dolor consequat feugiat'
},
]

/*
posts.forEach((item, index)=>{
	let post =`<article class="post">
			    <h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
			    </article>
	`

$("#posts").append(post);



})
*/


for(let item in posts){
	let post =`<article class="post">
			    <h2>${posts[item].title}</h2>
					<span class="date">${posts[item].date}</span>
					<p>
						${posts[item].content}
					</p>
					<a href="#" class="button-more">Leer más</a>
			    </article>




	`
	$("#posts").append(post);
}
 
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



}); // end ready