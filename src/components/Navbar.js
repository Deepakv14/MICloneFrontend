import React from 'react'
import '../styles/Navbar.css'
const searchIcon = < svg xmlns = "http://www.w3.org/2000/svg"
height = "48"
width = "48" > < path d = "M39.8 41.95 26.65 28.8Q25.15 30.1 23.15 30.825Q21.15 31.55 18.9 31.55Q13.5 31.55 9.75 27.8Q6 24.05 6 18.75Q6 13.45 9.75 9.7Q13.5 5.95 18.85 5.95Q24.15 5.95 27.875 9.7Q31.6 13.45 31.6 18.75Q31.6 20.9 30.9 22.9Q30.2 24.9 28.8 26.65L42 39.75ZM18.85 28.55Q22.9 28.55 25.75 25.675Q28.6 22.8 28.6 18.75Q28.6 14.7 25.75 11.825Q22.9 8.95 18.85 8.95Q14.75 8.95 11.875 11.825Q9 14.7 9 18.75Q9 22.8 11.875 25.675Q14.75 28.55 18.85 28.55Z" / > < /svg>
const Navbar = () => {
    return ( <
        div className = "Nav" >
        <
        div className = "logo" >
        <
        a href = "/" >
        <
        img id = "logoImage"
        src = { "https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" }
        alt = "MI logo" / >
        <
        /a> <
        /div>

        <
        a className = "navlinks"
        href = "/miphones" > Xiaomi Phones < /a> <
        a className = "navlinks"
        href = "/redmiphones" > Redmi Phones < /a> <
        a className = "navlinks"
        href = "/tv" > TV < /a> <
        a className = "navlinks"
        href = "/laptops" > Laptops & Tablets < /a> <
        a className = "navlinks"
        href = "/fitness" > Fitness < /a> <
        a className = "navlinks"
        href = "/home" > Home < /a> <
        a className = "navlinks"
        href = "/audio" > Radio < /a> <
        a className = "navlinks"
        href = "/accessories" > Accessories < /a> <
        div className = 'searchBox' >
        <
        input type = "text"
        name = "search"
        placeholder = "Search Products" / > { searchIcon } <
        /div> <
        /div>
    )
}

export default Navbar