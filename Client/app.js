"use strict";
$(document).ready(function() {
    
    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);
        
        for(let i = 0; i < data.length; i++)
        {
            $("#movieList1").append(`<tr><td class="titleheader">${JSON.stringify(data[i].title).substring(1, data[i].title.length + 1)}</td>
           <td class="titleheader">${JSON.stringify(data[i].year).substring(1, data[i].year.length + 1)}
           </td><td><button type="button" class="btn btn-primary style-btn">Details</button>
           <button id="editButton" type="button" class="btn btn-primary style-btn" 
            data-toggle="modal" data-target="#editModal"  onclick="populate(`+i+`)")>Edit</button></td></tr>`
            
            
            )
        } 
        
        
    })
    
    
})

function populate(i)
{
    let id = i+1;
    $.get("https://localhost:44325/api/movie/", function(data){

    $(".modal-body").html(`<form id="updateForm">
    <input type="hidden" id="movieId" name="movieId" value=`+id+`>
    <div class="form-group">
      <label for="titleform">Title:</label>
      <input type="title" class="form-control" placeholder="` + data[i].title + `" id="titleForm">
    </div>
    <div class="form-group">
      <label for="directform">Director:</label>
      <input type="director" class="form-control" placeholder="` + data[i].director + `" id="directorForm">
    </div>
    <div class="form-group">
        <label for="genreform">Genre:</label>
        <input type="genre" class="form-control" placeholder="` + data[i].genre + `" id="genreForm">
      </div>
      <div class="form-group">
        <label for="yearform">Year:</label>
        <input type="year" class="form-control" placeholder="` + data[i].year + `" id="yearForm">
      </div>
    <button id="updateMovie" type="submit" class="btn btn-primary">Submit</button>
  </form>`)


})
}




$("#updateMovie").submit( function(){
    var updatedMovie = {
        movieId: this["movieId"].value(),
        title: this["titleForm"].value(),
        director: this["directorForm"].value(),
        genre: this["genreForm"].value(),
        year: this["yearForm"].value()
    }
    console.log(updatedMovie.movieId)
    putMovie(updatedMovie.movieId, updatedMovie);
  
})

function putMovie(id, data){
$.ajax({
    url: "https://localhost:44325/api/movie/" + id,
    type: 'put',
    dataType: 'json',
    contentType: 'application/json',
    data: data,
    success: function( data ) {
      
        
    }
  });
}

