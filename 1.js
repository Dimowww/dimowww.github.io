var articles = [
    {
        title: 'Home',
        link: '1str.html'
    }
]

var blog = '<ul>', article, amountOfArticles = articles.length

for (article = 0; article < amountOfArticles; article++) {
    blog += `
    <li> 
        <a href= "articles/${articles[article].link}" class="article"> 
            <h3>${articles[article].title}</h3>
        </a>
    </li> `
}

blog += '</ul>'

var root = document.querySelector('#root')
root.innerHTML = blog
