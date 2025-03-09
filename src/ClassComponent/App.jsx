import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            language: "hi",
            search: "",
        }
        this.getLanguage = this.getLanguage.bind(this)
        this.getSearch = this.getSearch.bind(this)
    }
    getLanguage(input) {
        if (this.state.language !== input)
            this.setState({ language: input })
    }
    getSearch(input) {
        if (this.state.search !== input)
            this.setState({ search: input })
    }
    render() {
        return (
            <BrowserRouter>
                <Navbar getLanguage={this.getLanguage} getSearch={this.getSearch} />
                <Routes>
                    <Route path='' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "All"} />} />
                    <Route path='/All' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "All"} />} />
                    <Route path='/Politics' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Politics"} />} />
                    <Route path='/Crime' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Crime"} />} />
                    <Route path='/Education' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Education"} />} />
                    <Route path='/Science' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Science"} />} />
                    <Route path='/Technology' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Technology"} />} />
                    <Route path='/Sports' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Sports"} />} />
                    <Route path='/Cricket' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Cricket"} />} />
                    <Route path='/Entertainment' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Entertainment"} />} />
                    <Route path='/Economics' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Economics"} />} />
                    <Route path='/World' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "World"} />} />
                    <Route path='/India' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "India"} />} />
                    <Route path='/Jokes' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Jokes"} />} />
                    <Route path='/Mahakumbh' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Mahakumbh"} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}
