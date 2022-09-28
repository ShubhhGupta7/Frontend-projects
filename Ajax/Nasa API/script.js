function displayIamge(data) {
    // There are lots of method to create a tag dynamically. We are using some of them.
    console.log('Funtion Called');
    $('#information').html(data.explanation);
    $('#heading').html(data.title);

    // Method1
    // var img = $('<img>');
    // img.attr({
    //     src: data.url,
    //     // height: '100%', 
    //     // width: '100%'
    // });
    // img.appendTo('#image-container');
    // // or $('#image-container).append(img);

    // Method2
    // $('<img>', {
    //     src: data.url,
    //     // height: '100%',
    //     // width: '100%'
    // }).appendTo('#image-container');

    // Method 1 and 2 are slightly slow we will be using

    // Method3
    $(document.createElement('img')).attr('src', data.url).appendTo('#image-container');
}

$.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    success : displayIamge,
    data: {
        api_key: 'aObmNWDHmgLTsc8P4HpsrU8F8LsCTfz61g0qfpDF',
        // date: '2001-09-19'
    }
});

// API Keys are used by the organization to identify us as a developer and give us all the benifits as a authenticated developer and also tracks our record.
// All the organization give us there api for the use of there products such as paytm google pay phonepe they give us there api on there website to access there payment modes on our website

