import React from 'react';
import './Nav.css';
import { useState, useEffect } from "react";


function Nav() {

    useEffect(() => {

        window.addEventListener("scroll",() => {

            if (window.scrollY>100){

            }
            else handleShow(false);

        });
        return () => {
           window.removeEventListener("scroll");
        };
       
    }, []);


    return (
        <div className = "nav">
            <img 
            className = "nav_logo"
            src ="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F05%2Fnetflix-logo-2000.jpg" />
            
           
        </div>
    );
}

export default Nav
