/* This function simply adds event listeners for "clicks" to all 
   of the buttons */
export function allButtons() {
	var postBtn = document.getElementById("postBtn");
	postBtn.addEventListener("click", postFunc);

	var getBtn = document.getElementById("getBtn");
	getBtn.addEventListener("click", getFunc);

	var putBtn = document.getElementById("putBtn");
	putBtn.addEventListener("click", putFunc);

    var deleteBtn = document.getElementById("deleteBtn");
	deleteBtn.addEventListener("click", deleteFunc);
}

/* This function is called when the post button is pressed. */
function postFunc() {
    var id = document.getElementById("id").value
    var article_name = document.getElementById("article_name").value
    var article_body = document.getElementById("article_body").value
    var date = document.getElementById("date").value
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify({
        id: id,
        article_name: article_name,
        article_body: article_body,
        date: date
        }),
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
}

/* This function is called when the get button is pressed. */
function getFunc() {
    var id = document.getElementById("id").value
    fetch('https://httpbin.org/get?id=' + id, {
        method: 'GET',
        args: {
            id: "test"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))  
}

/* This function is called when the put button is pressed. */
function putFunc() {
    var id = document.getElementById("id").value
    var article_name = document.getElementById("article_name").value
    var article_body = document.getElementById("article_body").value
    var date = document.getElementById("date").value
    fetch('https://httpbin.org/put', {
        method: 'PUT',
        body: JSON.stringify({
        id: id,
        article_name: article_name,
        article_body: article_body,
        date: date
        }),
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))  
}

/* This function is called when the delete button is pressed. */
function deleteFunc() {
    var id = document.getElementById("id").value
    fetch('https://httpbin.org/delete?id=' + id, {
        method: 'DELETE',
        args: {
            id: "test"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))  
}