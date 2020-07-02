
$(function(){
    $('#createMovie').hide();
    $("#createMovieButton").on("click", function(e){
        $("#createMovie").toggle();
    });

    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);

        for(let i = 0; i < data.length; i++)
        {
          
           $("#movieList1").append(`<tr><td class="titleheader">${JSON.stringify(data[i].title).substring(1, data[i].title.length + 1)}</td>
           <td class="titleheader">${JSON.stringify(data[i].year).substring(1, data[i].year.length + 1)}</td><td><button type="button" class="btn btn-primary style-btn">Details</button><button type="button" class="btn btn-primary style-btn">Edit</button></td> </tr>`
                
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

