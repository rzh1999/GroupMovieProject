"use strict";
$(document).ready(function() {
    //hide form
    $('#createMovie').hide();
    
    //Toggle form on button
    $("#createMovieButton").on("click", function(e){
        $("#createMovie").toggle();
    });
    
    /* data-toggle="modal" data-target="#editModal"  onclick="populate(`+i+`)")>Edit</button></td></tr>` */
    
    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);
        
        for(let i = 0; i < data.length; i++)
        {
            $("#movieList1").append(`<tr><td class="titleheader">${JSON.stringify(data[i].title).substring(1, data[i].title.length + 1)}</td>
            <td class="titleheader">${JSON.stringify(data[i].year).substring(1, data[i].year.length + 1)}
            <button id= "detailButton" type="button" class="btn btn-primary style-btn"
            data-toggle="modal" data-target="#movieModal" onclick="displayMovieDetails(`+i+`)")>Details</button>
            <button id="editButton" type="button" class="btn btn-primary style-btn" 
            data-toggle="modal" data-target="#editModal"  onclick="populate(`+i+`)")>Edit</button></td></tr>`

            
            
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



            $('#updateForm').submit( putMovie);
    
        function putMovie(e){

                var updatedMovie = {
                    MovieId: Number(this["movieId"].value),
                    Title: this["title"].value,
                    Director: this["director"].value,
                    Genre: this["genre"].value,
                    Year: this["year"].value
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
            
              e.preventDefault();
              $('#updateForm').trigger("reset");
            }
        })
    
    


function populate(i)
{
    let id = i+1;
    $.get("https://localhost:44325/api/movie/", function(data){

    $("#updateForm").html(`
    <input type="hidden" id="movieId" name="movieId" value=`+id+`>
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" placeholder="` + data[i].title + `" id="title">
    </div>
    <div class="form-group">
      <label for="director">Director:</label>
      <input type="text" class="form-control" placeholder="` + data[i].director + `" id="director">
    </div>
    <div class="form-group">
        <label for="genre">Genre:</label>
        <input type="text" class="form-control" placeholder="` + data[i].genre + `" id="genre">
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="text" class="form-control" placeholder="` + data[i].year + `" id="year">
      </div>
      <button onclick="form_submit()" type="submit" class="btn btn-primary" form="updateForm">Submit</button>
  `)


})
}

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

