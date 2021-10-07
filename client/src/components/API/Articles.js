import React from 'react'

export default class Articles extends React.Component {

    state = {
        articlesData: []
    }

    async componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=53e9f1c1a39e4a74b9ccb03412fb05ea'
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ articlesData: data.articles })
    }    

    render() {

        const newsArticles = this.state.articlesData.map(news => (
            <a id='articleLink' href={news.url}>
            <div key={news.title}>
                <img id='articleImg' src={news.urlToImage}  alt={news.urlToImage}/>
                <b>{news.title}</b>
            </div>
            </a>
        ))

        return <div id='articleInfo'>
            {newsArticles}
        </div>

    }

}

