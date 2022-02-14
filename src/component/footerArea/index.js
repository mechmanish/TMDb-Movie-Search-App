import React from "react";
import "./index.css";

const FooterBox = () =>{

    

    // const apiHandler = async () =>{
    //     console.log("https://api.themoviedb.org/3/search/movie?query=uri&api_key=cfe422613b250f702980a3bbf9e90716");
    //     const apiLink = "https://api.themoviedb.org/3/search/movie?query=uri&api_key=cfe422613b250f702980a3bbf9e90716";
    //     const data = await fetch(apiLink);
    //     const parData = await data.json();
    //     console.log(parData.results);
    // }

    




    return(
        <div className="footerContainer">
            <span>
                <a href="/">Designed & developed by Stephen Kempin</a>
            </span>
            <span>
                <a href="/">View Code</a>
            </span>
            <span>
                <a href="/">Developer Google Play Store</a>
            </span>
            <span>
                <a href="/">Developer Apple App Store</a>
            </span>

            {/* <button onClick={apiHandler}>Click</button> */}
        </div>
    );
}

export default FooterBox;