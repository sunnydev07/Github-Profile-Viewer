import React from "react";
import ReactDom from 'react-dom/client';
import {Header} from "../component/Header.js";
import Body from "../component/Body.js";

function GithubProfile(){
    return(
        <>
        <Header/>
        <Body/>
        </>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<GithubProfile/>);