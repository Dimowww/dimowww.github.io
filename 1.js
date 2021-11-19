var articles = [
    {
        title: 'Стоимоить и больше причин учить французский',
        link: '1str.html'
    }
]

var blog = '<ul>', article, amountOfArticles = articles.length

for (article = 0; article < amountOfArticles; article++) {
    blog += `
    <li> 
        <a href= "articles/${articles[article].link}" class="article"> 
            <h5>${articles[article].title}</h5>
        </a>
    </li> `
}

blog += '</ul>'

var root = document.querySelector('#root')
root.innerHTML = blog
