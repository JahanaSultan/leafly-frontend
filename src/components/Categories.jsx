import React from 'react'
import Category from './Category'
import black from '../assets/img/tea/black.jpeg'
import white from '../assets/img/tea/white.jpg'
import masala from '../assets/img/tea/masala_chai.jpeg'
import oolong from '../assets/img/tea/oolong.jpeg'
import jasmine from '../assets/img/tea/jasmine.jpeg'
import flower from '../assets/img/tea/sinuxa.png'

const Categories = () => {

    const categories = [
        {
            name: "Qara Çay",
            img: black,
        },
        {
            name: "Ağ Çay",
            img: white,
        },
        {
            name: "Masala Çay",
            img: masala,
        },
        {
            name: "Oolong Çay",
            img: oolong,
        },
        {
            name: "Jasmin Çay",
            img: jasmine,
        },
        {
            name: "Çiçək Çay",
            img: flower,
        },

    ]

    return (
        <div className=''>
            <h1 className="text-center heading">
                <span>Kategoriyalar</span>
                <i class="ri-scissors-line"></i>
            </h1>
            <div className="category-box padding-x">
                {categories.map((category) => (
                    <Category name={category.name} img={category.img} />
                ))}
            </div>
        </div>
    )
}

export default Categories