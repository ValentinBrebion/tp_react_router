import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return <div><nav fx="">
    <header>
        <a href="/"><img src={logo} alt="React-Wines logo" /></a>
    </header>
    <div>
        <ul>
            <li>
                <Link href="#">Home</Link>
            </li>
            <li>
                <Link to={"/view/random"}>Random</Link>
            </li>
            <li>
                <Link href="#">Login</Link>
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