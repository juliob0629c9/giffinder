$(document).ready(function() {
    let ID;
    let input;
    let h3 = document.querySelector("h3");

    //https://i.giphy.com/media/Mvi1ZqG17NSso/giphy.webp
    function link(ID) {
        return "https://i.giphy.com/media/" + ID + "/giphy.webp";
    }

    function Image(srcURL) {
        // write a function that will append an <img> to the body with the
        // URL provided in the parameters
        h3.innerHTML = "<img src=" + srcURL + ">"
    }

    function API(searchTerm) {
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
                masterFunction(response);
            },
        });
    }

    function masterFunction(x) {
        let max = x.pagination.count;
        if (max == 0) {
            h3.innerHTML = ("<h1> Invalid Search! Try again! </h1>");
            return;
        }

        let ran = Math.floor(Math.random() * Math.floor(max));

        ID = (x.data[ran].id);

        let fullLink = link(ID);
        Image(fullLink);

    }
    $('button').click(function() {
        input = $('input').val();
        API(input);

    });
    $('h3').click(function() {
        input = $('input').val();
        API(input);

    });
});
