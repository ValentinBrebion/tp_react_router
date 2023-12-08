import React from 'react'
import logo from '../assets/logo.png'

const Layout = (props) => {
    return <div><nav fx="">
    <header>
        <a href="/"><img src={logo} alt="React-Wines logo" /></a>
    </header>
    <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">Random</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
        </ul>
    </div>
    </nav>
    <main>
        {
            props.children
        }
    </main>
    <footer>
            <p>La Rochelle Université</p>
        </footer>
    

</div>

}
export default Layout