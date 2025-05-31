import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Navbar() {
    let [searchParams, setSearchParams] = useSearchParams("")
    let navigate = useNavigate()

    function changeQ(q) {
        navigate(`/?q=${q}&language=${searchParams.get("language") ?? "hi"}`)
    }
    function changeLanguage(language) {
        navigate(`/?q=${searchParams.get("q") ?? "All"}&language=${language}`)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary background sticky-top">
                <div className="container-fluid">
                    <button className="navbar-brand nav-link text-light" to="#">News App</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className='bi bi-list text-light fs-1'></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><button className="nav-link text-light active" aria-current="page" onClick={() => changeQ("All")}>All</button></li>
                            <li className="nav-item"><button className="nav-link text-light" onClick={() => changeQ("Politics")}>Politics</button></li>
                            <li className="nav-item"><button className="nav-link text-light" onClick={() => changeQ("Crime")}>Crime</button></li>
                            <li className="nav-item"><button className="nav-link text-light" onClick={() => changeQ("Education")}>Education</button></li>
                            <li className="nav-item"><button className="nav-link text-light" onClick={() => changeQ("Science")}>Science</button></li>
                            <li className="nav-item"><button className="nav-link text-light" onClick={() => changeQ("Technology")}>Technology</button></li>
                            <li className="nav-item"><button className="nav-link text-light" onClick={() => changeQ("Sports")}>Sports</button></li>
                            <li className="nav-item"><button className="nav-link text-light" onClick={() => changeQ("Cricket")}>Cricket</button></li>

                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Other</a>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => changeQ("Entertainment")}>Entertainment</button></li>
                                    <li><button className="dropdown-item" onClick={() => changeQ("Economics")}>Economics</button></li>
                                    <li><button className="dropdown-item" onClick={() => changeQ("World")}>World</button></li>
                                    <li><button className="dropdown-item" onClick={() => changeQ("India")}>India</button></li>
                                    <li><button className="dropdown-item" onClick={() => changeQ("Jokes")}>Jokes</button></li>
                                    <li><button className="dropdown-item" onClick={() => changeQ("Mahakumbh")}>Mahakumbh</button></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Language</a>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => changeLanguage("hi")}>Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={() => changeLanguage("en")}>English</button></li>
                                    <li><button className="dropdown-item" onClick={() => changeLanguage("de")}>German</button></li>
                                    <li><button className="dropdown-item" onClick={() => changeLanguage("ar")}>Arabic</button></li>
                                    <li><button className="dropdown-item" onClick={() => changeLanguage("ru")}>Russian</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" >
                            <input className="form-control me-2" name='q' type="search" placeholder="Search" aria-label="Search" />
                            <input type="hidden" name="language" value={searchParams.get("language") ?? "hi"} />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}