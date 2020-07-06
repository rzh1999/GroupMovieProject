
$(function(){
    //hide form
    $('#createMovie').hide();

    //Toggle form on button
    $("#createMovieButton").on("click", function(e){
        $("#createMovie").toggle();
    });

    
    $.get("https://localhost:44325/api/movie/", function(data){
        
        for(let i = 0; i < data.length; i++)
        {
            $("#movieList1").append(`<tr><td class="titleheader">${JSON.stringify(data[i].title).substring(1, data[i].title.length + 1)}</td>
            <td class="titleheader">${JSON.stringify(data[i].year).substring(1, data[i].year.length + 1)}
            <button id= "detailButton" type="button" class="btn btn-primary style-btn"
            data-toggle="modal" data-target="#movieModal" onclick="displayMovieDetails(`+i+`)")>Details</button>
            <button id="editButton" type="button" class="btn btn-primary style-btn" 
            data-toggle="modal" data-target="#editModal"  onclick="populate(`+i+`)")>Edit</button></td></tr>`)
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


           

            $('#updateForm').submit( putMovie);
    
        function putMovie(e){

                var updatedMovie = {
                    MovieId: Number(this["movieId"].value),
                    Title: this["title"].value,
                    Director: this["director"].value,
                    Genre: this["genre"].value,
                    Year: this["year"].value,
                    ImageURL: this["imageURL"].value
                };
            
            $.ajax({
                url: "https://localhost:44325/api/movie/",
                dataType: 'json',
                type: 'put',
                contentType: 'application/json',
                data: JSON.stringify(updatedMovie),
                success: function( data, textStatus, jQxhr ){
                    $('#response pre').html( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
                    
              });
            
              // Needs to wait otherwise edit won't go through?
              sleep(6);
              e.preventDefault();
              $('#updateForm').trigger("reset");
            }
        })
    
    

// Insert form inside modal
function populate(i)
{
    let id = i+1;
    $.get("https://localhost:44325/api/movie/", function(data){

    $("#updateForm").html(`
    <input type="hidden" id="movieId" name="movieId" value=` + id + `>
    <input type="hidden" id="imageURL" name="imageURL" value=` + data[i].imageURL + `>
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" value="` + data[i].title + `" id="title">
    </div>
    <div class="form-group">
      <label for="director">Director:</label>
      <input type="text" class="form-control" value="` + data[i].director + `" id="director">
    </div>
    <div class="form-group">
        <label for="genre">Genre:</label>
        <input type="text" class="form-control" value="` + data[i].genre + `" id="genre">
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="text" class="form-control" value="` + data[i].year + `" id="year">
      </div>
      <div class="form-group">
      <label for="year">Image:</label>
      <input type="text" class="form-control" value="` + data[i].imageURL + `" id="imageURL">
    </div>
      <button onclick="form_submit()" type="submit" class="btn btn-primary" form="updateForm">Submit</button>
  `)

})


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }