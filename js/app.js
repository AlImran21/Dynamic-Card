const posts = [
    /* {
        title: 'This is title 1',
        body: 'This is body 1'
    },
    {
        title: 'This is title 2',
        body: 'This is body 2'
    },
    {
        title: 'This is title 3',
        body: 'This is body 3'
    },
    {
        title: 'This is title 4',
        body: 'This is body 4'
    },
    {
        title: 'This is title 5',
        body: 'This is body 5'
    },
    {
        title: 'This is title 6',
        body: 'This is body 6'
    },
    {
        title: 'This is title 7',
        body: 'This is body 7'
    },
    {
        title: 'This is title 8',
        body: 'This is body 8'
    } */
]

const fetchData = async (config) => {
    try {
        const response = await axios(config);
        return response.data;
    }
    catch (error) {
        throw Error('data is not fetched');
    }

}


const postsElement = document.querySelector('.posts');

const loadAllData = async () => {
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    posts.map(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `

        <h4 class="post-title">${post.title.length < 15 ? post.title : post.title.slice(0, 15)}</h4>
        <p class="post-body">
            ${post.body.length < 150 ? post.body : post.body.slice(0, 150)}
        </p>

        `;
        postsElement.appendChild(postElement);
    })
}
loadAllData();