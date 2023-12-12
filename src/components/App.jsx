import React from 'react'
import Layout from '../components/Layout'
import ReviewList from '../components/ReviewList'
import Review from '../components/Review'
import NotFound from '../components/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/view/:slug" element={<Review/>} />
                        <Route index element={<ReviewList />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout> 
            </BrowserRouter>
}

export default App