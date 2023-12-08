import React from 'react'

import logo from '../assets/logo.png'

const App = () => {
    return <>
        <nav fx="">
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
            
            
        </main>
        <footer>
            <p>La Rochelle Université</p>
        </footer>
    </>
}

export default App