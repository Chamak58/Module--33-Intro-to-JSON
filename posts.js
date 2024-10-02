function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

/**
 * 1. get the container elements where you want to add the new elements
 * 2. create child element
 * 3. set innerText or innerHTML
 * 4. add append child to parents
 */

function displayPosts(posts){

    const postsContainer = document.getElementById('posts-container');

    for(const post of posts){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h3>userId: ${post.userId}</h3>
            <h4>id: ${post.id}</h4>
            <h5>title: ${post.title}</h4>
            <p>body: ${post.body}</p>
        `;
        postsContainer.appendChild(div);
    }
}


loadPosts();