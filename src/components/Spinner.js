import React, { Component } from "react";

const Spinner = ()=>{
        return (
            <div className="container d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
export default Spinner