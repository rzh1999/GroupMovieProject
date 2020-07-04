
$(function(){
    //hide form
    $('#createMovie').hide();

    //Toggle form on button
    $("#createMovieButton").on("click", function(e){
        $("#createMovie").toggle();
    });

    

    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);

        for(let i = 0; i < data.length; i++)
        {
          
           $("#movieList1").append(`<tr><td class="titleheader">${JSON.stringify(data[i].title).substring(1, data[i].title.length + 1)}</td>
           <td class="titleheader">${JSON.stringify(data[i].year).substring(1, data[i].year.length + 1)}</td><td>
           <button id= "detailButton" type="button" class="btn btn-primary style-btn"
            data-toggle="modal" data-target="#movieModal" onclick="displayMovieDetails(`+i+`)")>Details</button>
           <button type="button" class="btn btn-primary style-btn">Edit</button></td> </tr>`
                
            )
            
            
        } 
    
        
    })



    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value,
            Year: this["year"].value
            
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
function displayMovieDetails(i)
{
    $.get("https://localhost:44325/api/movie/", function(data){
    $(".modal-body").html(`<div class="card" style="width:400px">
    <img class="card-img-top" src= `+ data[i].imageURL +` alt="Movie Image" "width:400px height: auto">
    <div class="card-body">
      <h4 class="card-title"> `+ data[i].title +` </h4>
      <p class="card-text">` + "Director: " + data[i].director +`</p>
      <p class="card-text"> `+ "Genre: " + data[i].genre +` </p>
      <p class="card-text"> ` + "Year Released: " + data[i].year + `</p>
    </div>
  </div>`)
    })
}
