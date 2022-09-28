// Normal JavaScript Ajax Request 
// function fetchRandomDogImage() {
//     var xhrRequest = new XMLHttpRequest();

//     xhrRequest.onload = function() {
//         console.log(xhrRequest.response);

//         // response in the xhrRequest is in string format to change it into JSON
//         var responseJSON = JSON.parse(xhrRequest.response);
//         var imageURL = responseJSON.message;

//         // To convert a JSON object to a string we can use a method JSON.stringfy

//         $('#dog-image').attr('src', imageURL);
//     }

//     xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
//     xhr.onerror = function() {
//         console.log('Request Error');
//     }
//     xhrRequest.send();
    
// }

// $('#fetch-dog-image-button').click(fetchRandomDogImage);


// Ajax request using jquery
// function fetchRandomDogImage() {
//     // In the handler function make a ajax request using jquery 
//     $.ajax({
//         // takes only url, method, and the success call back function
//         url: 'https://dog.ceo/api/breeds/image/random',
//         method: 'GET',
//         success: function(data) {
//             var imageURL = data.message;

//             $('#dog-image').attr('src', imageURL);
//         }
//     }).fail(function() {
//         console.log('Request Failed');
//     }); 
// }

// $('#fetch-dog-image-button').click(fetchRandomDogImage);

// By using the ajax it is more simpler now
function fetchRandomDogImage() {
    $.get('https://dog.ceo/api/breeds/image/random', function(data) {
        var imageURL = data.message;

        $('#dog-image').attr('src', imageURL);
    }).fail(function(xhr, textStatus, errorThrown) {
        console.log('Request Failed');
    });
}

$('#fetch-dog-image-button').click(fetchRandomDogImage);

// All of these mthods are simpler to use but deep down jquery is making the xhrRequest as we were making in our initial code