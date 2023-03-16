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
    var jsonArgs
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
        .then(json => {
            var result = document.getElementById("response")
            result.innerHTML = "<br><strong>Results:</strong><br>args: " + 
                JSON.stringify(json.args) + "<br>data: " + 
                JSON.stringify(json.data) + "<br>files: " + 
                JSON.stringify(json.files) + "<br> form: " + 
                JSON.stringify(json.form) + "<br>headers: " + 
                JSON.stringify(json.headers) + "<br> json: " + 
                JSON.stringify(json.json) + "<br> origin: " + 
                JSON.stringify(json.origin) + "<br> url: " + 
                JSON.stringify(json.url)
        })
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
        .then(json => {
            var result = document.getElementById("response")
            result.innerHTML = "<br><strong>Results:</strong><br>args: " + 
                JSON.stringify(json.args) + "<br>data: " + 
                JSON.stringify(json.headers) + "<br> json: " + 
                JSON.stringify(json.origin) + "<br> url: " + 
                JSON.stringify(json.url)
        })
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
        .then(json => {
            var result = document.getElementById("response")
            result.innerHTML = "<br><strong>Results:</strong><br>args: " + 
                JSON.stringify(json.args) + "<br>data: " + 
                JSON.stringify(json.data) + "<br>files: " + 
                JSON.stringify(json.files) + "<br> form: " + 
                JSON.stringify(json.form) + "<br>headers: " + 
                JSON.stringify(json.headers) + "<br> json: " + 
                JSON.stringify(json.json) + "<br> origin: " + 
                JSON.stringify(json.origin) + "<br> url: " + 
                JSON.stringify(json.url)
        })
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
        .then(json => {
            var result = document.getElementById("response")
            result.innerHTML = "<br><strong>Results:</strong><br>args: " + 
                JSON.stringify(json.args) + "<br>data: " + 
                JSON.stringify(json.data) + "<br>files: " + 
                JSON.stringify(json.files) + "<br> form: " + 
                JSON.stringify(json.form) + "<br>headers: " + 
                JSON.stringify(json.headers) + "<br> json: " + 
                JSON.stringify(json.json) + "<br> origin: " + 
                JSON.stringify(json.origin) + "<br> url: " + 
                JSON.stringify(json.url)
        }) 
}