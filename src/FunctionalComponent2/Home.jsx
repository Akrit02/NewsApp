import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [page, setpage] = useState(1)
    let [searchParams] = useSearchParams()

    async function getAPIData() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${searchParams.get("q") ?? "All"}&language=${searchParams.get("language") ?? "hi"}&page=1&sortBy=publishedAt&apiKey=2835b11faf0a430eb6a371286d269a18`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(response.articles)
            setTotalResults(response.totalResults)
        }
    }

    let fetchData = async () => {
        setpage(page + 1)
        let response = await fetch(`https://newsapi.org/v2/everything?q=${searchParams.get("q") ?? "All"}&language=${searchParams.get("language") ?? "hi"}&page=${page}&pageSize=24&page=1&sortBy=publishedAt&apiKey=2835b11faf0a430eb6a371286d269a18`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(articles.concat(response.articles))
        }
    }

    useEffect(() => {
        getAPIData()
    }, [searchParams])

    return (
        <div className="container-fluid">
            <h5 className='text-capitalize background mt-1 text-light text-center p-2'>{searchParams.get("q") ?? "All"} Articles</h5>
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