import React from 'react'
import dbjdon from '../api/db.json'

const ReviewList = () => {  
    return <section data-name="review-list">
    <div className="hidden">
        <h4>Categories</h4>
        <p>
            <select>
                <option value="">All</option>
                <option value="bordeaux">Bordeaux</option>
                <option value="cotes-du-rhone">Côtes du Rhone</option>
            </select>
        </p>
    </div>
    <grid>
        <div col="1/2">
            <card>
                <a href="/">
                    <h5>Yvon Mau 2008 Seigneurs de Bergerac Rosé (Bergerac)</h5>
                    <p>83 / 100</p>
                </a>
            </card>
        </div>
        <div col="1/2">
            <card>
                <a href="/">
                    <h5>Château Tour des Gendres 2016 Vigne d'Albert Red (Bergerac)</h5>
                    <p>87 / 100</p>
                </a>
            </card>
        </div>
        <div col="1/1" txt="c" className="hidden">
            <card>
                <a href="/"><h5>Add a review</h5></a>
            </card>
        </div>
    </grid>
</section>
}

export default ReviewList