
$(function(){
    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);

        for(let i = 0; i < data.length; i++){
            $("#MovieList").append(
                `<div>${JSON.stringify(data[i].title).substring(1, data[i].title.length + 1)} ${JSON.stringify(data[i].year).substring(1, data[i].year.length + 1)}</div>`
            )
        }
    })
})