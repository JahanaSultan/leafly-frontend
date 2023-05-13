import React from 'react'
import Tea from './Tea'


const Featured = () => {
    return (
        <section className='featured padding-x'>
            <div className="buttons">
                <button className="active">Yeni Gələnlər</button>
                <button className="">Ən Çox Satılanlar</button>
                <button className=''>Premium</button>

            </div> <div className="cards">
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
                <Tea />
            </div>
        </section>
    )
}

export default Featured