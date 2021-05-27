import React from "react"

function Nav (){

    function hideSearch(){

        const hideSearchEle = document.getElementById("hide-search")

       if(hideSearchEle.style.display === "none"){
           hideSearchEle.style.display = "block"
       } else{
        hideSearchEle.style.display = "none"
        }
    }

    return (
        <nav>
            <span className = "nav-left">
            
                <span className="hamburger-container">
                    <button className="hamburger-btn" onClick={hideSearch}>
                        <div className = "hamburger-line"></div>
                        <div className = "hamburger-line"></div>
                        <div className = "hamburger-line"></div>
                    </button> 
                </span>

                <span>
                    <a href ="/"><img src ="https://i.imgur.com/vztpIzG.jpeg" alt="logo" height="20rem" className="logo"/></a>
                </span>
                
            </span>

            <a className="nav-center" href="/"><img className = "centerlogo" src="https://i.imgur.com/IIHoAPW.jpeg" alt="the new republic"/> </a>

            <span className="nav-right">
                <a href ="https://newrepublic.com/magazine" target="_blank"> <button className = "magBtn">magazine</button>
                </a>
                <a href="https://tnr-reg.onecount.net/onecount/form/display.php?id=65b62084-2a9e-41e3-a826-9069eec96f50&src_code=347" target ="_blank">
                <button className = "subsBtn">subscription</button>
                </a>
            </span>

            <div className = "hide-search" id = "hide-search"></div>
            
        </nav>
    )
}

export default Nav