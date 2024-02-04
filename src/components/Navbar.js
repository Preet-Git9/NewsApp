import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
        return (
            // we can also set navbar sticky using the bootstrap class of fixed-top
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style= {{position: "sticky",top:"0"}}>
                <Link className="navbar-brand" to="/">
                    News App
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                       
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Categories
                            </Link>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <Link className="dropdown-item" to="/business">
                                    Business
                                </Link>
                                <Link className="dropdown-item" to="sports">
                                    Sports
                                </Link>
                                <Link className="dropdown-item" to="/technology">
                                    Technology
                                </Link>
                                <Link className="dropdown-item" to="/entertainment">
                                    Entertainment
                                </Link>
                                <Link className="dropdown-item" to="/science">
                                    Science
                                </Link>
                                <Link className="dropdown-item" to="/health">
                                    Health
                                </Link>
                            </div>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Countries
                            </Link>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            > */}
                                {/* <div className="row" style={{width:"750px"}}>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            ae
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ar
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            at
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            au
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            be
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            bg
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            br
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ca
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ch
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            br
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ca
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ch
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            br
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ca
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ch
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            br
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ca
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ch
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            br
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ca
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ch
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            br
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ca
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ch
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            cn
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            co
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            cu
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            cz
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            de
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            eg
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            fr
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            gb
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            gr
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            hk
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            hu
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            id
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            ie
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            il
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            in
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            it
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            jp
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            kr
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            lt
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            lv
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ma
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            mx
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            my
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ng
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            nl
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            no
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            nz
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            ph
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            pl
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            pt
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            ro
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            rs
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ru
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            sa
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            se
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            sg
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            si
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            sk
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            th
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            tr
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            tw
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ua
                                        </Link>
                                    </div>
                                    <div className=" col-md-2">
                                        <Link className="dropdown-item" to="#">
                                            us
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            ve
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            za
                                        </Link>
                                    </div> */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </li> */}
                    </ul>
                </div>
            </nav>
        );
    }

export default Navbar