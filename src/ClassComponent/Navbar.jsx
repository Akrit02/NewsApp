import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
        }
    }
    postSearch(e) {
        e.preventDefault()
        this.props.getSearch(this.state.search)
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary background sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="#">News App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className='bi bi-list text-light fs-1'></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link text-light active" aria-current="page" to="/All" onClick={()=>this.props.getSearch()} >All</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/Politics" onClick={()=>this.props.getSearch()} >Politics</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/Crime" onClick={()=>this.props.getSearch()} >Crime</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/Education" onClick={()=>this.props.getSearch()} >Education</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/Science" onClick={()=>this.props.getSearch()} >Science</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/Technology" onClick={()=>this.props.getSearch()} >Technology</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/Sports" onClick={()=>this.props.getSearch()} >Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/Cricket" onClick={()=>this.props.getSearch()} >Cricket</Link></li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Other</a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/Entertainment" onClick={()=>this.props.getSearch()} >Entertainment</Link></li>
                                        <li><Link className="dropdown-item" to="/Economics" onClick={()=>this.props.getSearch()} >Economics</Link></li>
                                        <li><Link className="dropdown-item" to="/World" onClick={()=>this.props.getSearch()} >World</Link></li>
                                        <li><Link className="dropdown-item" to="/India" onClick={()=>this.props.getSearch()} >India</Link></li>
                                        <li><Link className="dropdown-item" to="/Jokes" onClick={()=>this.props.getSearch()} >Jokes</Link></li>
                                        <li><Link className="dropdown-item" to="/Mahakumbh" onClick={()=>this.props.getSearch()} >Mahakumbh</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Language</a>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => this.props.getLanguage("hi")}>Hindi</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.getLanguage("en")}>English</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.getLanguage("de")}>German</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.getLanguage("ar")}>Arabic</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.getLanguage("ru")}>Russian</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e) => this.postSearch(e)}>
                                <input className="form-control me-2" name='search' onChange={(e) => this.setState({ search: e.target.value })} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
