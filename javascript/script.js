const button =document.getElementById('button')
const postNUM = document.getElementById('numberP')
button.addEventListener('click' , loadPost)

function loadPost()
{
    let xhr = new XMLHttpRequest();
    let num = Number(postNUM.value);
    xhr.open('GET' , `https://jsonplaceholder.typicode.com/posts/${num}` , true)
    xhr.onload = function()
    {
        if(this.status === 200)
        {
            let post = JSON.parse(this.responseText)
            let output = `
            <p class = 'post_id'> Post Id : ${post.id} </p>
            <h2 class='title' > Title : ${post.title} </h2>
            <p class='body'> Body : ${post.body} </p>  `
            document.getElementById('post').innerHTML = output;
        }
    }
xhr.send();
}
