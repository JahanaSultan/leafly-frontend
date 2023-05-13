import React from 'react'

const Category = (props) => {
    return (
        <div className="category">
            <img src={props.img} alt="" />
            <h4>{props.name}</h4>
        </div>
    )
}

export default Category