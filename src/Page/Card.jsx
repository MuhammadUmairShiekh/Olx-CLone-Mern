import react from "react"
import { NavLink } from "react-router-dom"
import '../Styles/Card.css'
import image from '../Images/property-for-rent.8436595fbaa90d47f0178006f57090a8.png'


function Card(props) {
    const { images, tittle , price , model ,descrip , btn , btn1} = props
     
    return (
        <div>           
           
            <div className="card">
                <div className="card-image1"> <img src={image} /> </div>
                <div className="category">{tittle}</div>
                <div className="heading"> Price: {price} 
                    <div className="author"> CATEGORY:{descrip}</div>
                    <p> {}</p>              
                </div>
                <NavLink className="btn" to={btn}>{btn1}</NavLink>
                
            </div>

        </div>
    )
}

export default Card