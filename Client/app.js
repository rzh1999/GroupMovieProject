
$(function(){
    //hide form
    $('#createMovie').hide();

    //Toggle form on button
    $("#createMovieButton").on("click", function(e){
        $("#createMovie").toggle();
    });

   
    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);
console.log(data[0].imageUrl);
        for(let i = 0; i < data.length; i++)
        {
          
          /*  $("#movieList1").append(`<tr><td class="titleheader">${JSON.stringify(data[i].title).substring(1, data[i].title.length + 1)}</td>
           <td class="titleheader">${JSON.stringify(data[i].year).substring(1, data[i].year.length + 1)}</td><td><a class="btn btn-primary" 
           data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
           Details</a><button type="button" class="btn btn-primary style-btn">Edit</button></td> </tr>`
                
            ) */

      /*    $('#test').append(`<p>
         <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
           ${data[i].title}
         </a>
         
       </p>
       <div class="collapse" id="collapseExample">
        <div class="media mb-4">
            <img class="mr-3" src="${data[i].imageURL}" alt="${data[i].title}">
            <div class="media-body">
                <h5 class="mt-0">${data[i].title}</h5><h5 class="mt-0">Director: ${data[i].director}</h5><h5 class="mt-0">Genre: ${data[i].genre}</h5><h5 class="mt-0">Year: ${data[i].year}</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
        </div>
       </div>`)
 */
      /*  $('#editForm').append(`<form  method="POST" name="createMovie" id="createMovie">
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="title">Title</label>
           <input type="text" class="form-control" id="title" placeholder="${data[i].title}">
         </div>
         <div class="form-group col-md-6">
           <label for="director">Director</label>
           <input type="text" class="form-control" id="director" placeholder="${data[i].director}">
         </div>
       </div>
 
       <div class="form-row">
           <div class="form-group col-md-6">
             <label for="genre">Genre</label>
             <input type="text" class="form-control" id="genre" placeholder="${data[i].genre}">
           </div>
           <div class="form-group col-md-6">
             <label for="year">Year</label>
             <input type="text" class="form-control" id="year" placeholder="${data[i].year}">
           </div>
         </div>
 
         <button type="submitMovie" class="btn btn-primary onclick="submitForm(${data});"">Submit</button>
   </form>`) */
        } 
    })
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value,
            Year: this["year"].value,
            ImageURL: this["ImageURL"].value
            
        };
        
       

        
            $.ajax({
                url: 'https://localhost:44325/api/movie',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(dict),
                success: function( data, textStatus, jQxhr ){
                    $('#response pre').html( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
      
            e.preventDefault();
            $("#createMovie").trigger("reset");
           
        }

            $('#createMovie').submit( processForm );

           
})

