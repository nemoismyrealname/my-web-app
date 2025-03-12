document.getElementById('changeTextButton').addEventListener('click', function () {
    document.getElementById('textChange').textContent = "You clicked the button!";

    fetch('http://backend:3000/api/notify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Button clicked!' })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

});
