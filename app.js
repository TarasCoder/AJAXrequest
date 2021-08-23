let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
xhr.onload = function() {
    let data = JSON.parse(this.response);
    console.log(data)
}
xhr.send();
