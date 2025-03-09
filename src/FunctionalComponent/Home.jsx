import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home(props) {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [page, setpage] = useState(1)

    async function getAPIData() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&page=1&pageSize=24&sortBy=publishedAt&apiKey=5429ff9289d24b6497b7d9597970b29d`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(response.articles)
            setTotalResults(response.totalResults)
        }
    }

    let fetchData = async () => {
        setpage(page + 1)
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&page=${page}&pageSize=24&sortBy=publishedAt&apiKey=5429ff9289d24b6497b7d9597970b29d`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(articles.concat(response.articles))
        }
    }
    useEffect(() => {
        getAPIData()
    }, [props])

    return (
        <div className="container-fluid">
            <h5 className='text-capitalize background mt-1 text-light text-center p-2'>{props.q} Articles</h5>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length < totalResults}
                loader={
                    <div className='my-5 text-center'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            >
                <div className="row">
                    {
                        articles.map((item, index) => {
                            return <Newsitems
                                key={index}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                pic={item.urlToImage}
                                date={item.publishedAt}
                                source={item.source?.name}
                            />
                        })
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}