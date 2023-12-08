import React from 'react'
import Layout from '../components/Layout'
import ReviewList from '../components/ReviewList'
import Review from '../components/Review'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/view" element={<Review/>} />
                        <Route path="/reviewList" element={<ReviewList />} />
                    </Routes>
                </Layout> 
            </BrowserRouter>
}

export default App