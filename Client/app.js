
$(function(){
    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);

        for(let i = 0; i < data.length; i++)
        {
           //if(i == 0){
           $("#movieList1").append(`<tr><td class="titleheader">${JSON.stringify(data[i].title).substring(1, data[i].title.length + 1)}</td>
           <td class="titleheader">${JSON.stringify(data[i].year).substring(1, data[i].year.length + 1)}</td><td><button type="button" class="btn btn-primary style-btn">Details</button><button type="button" class="btn btn-primary style-btn">Edit</button></td> </tr>`
                
            )
        //     $("#movieYear").append(``
                
        //     )
        //     console.log("In if statement");
        //    }
        //    else
        //    {
        //         //The HTML of the TR row that we want to add to our table.
        //         var title = $("#movieTitle").add(`<div class="titleheader">${JSON.stringify(data[i].title).substring(1, data[i].title.length + 1)}</div>`);
        //         var newTableRow = '<tr data-toggle="collapse" data-target="#accordion" class="clickable collapse-row collapsed"><td id="movieTitle">' + title + '</td></tr> <tr><td colspan="3"><div id="accordion" class="collapse">Movie Details <br></br> <button type="button" class="btn btn-primary">Edit</button></div></td></tr>';

        //         //Add the HTML after the last row by using tr:last.
        //         $('#my_table tr:last').after(newTableRow); 

        //    }
        } 
    })
    

})