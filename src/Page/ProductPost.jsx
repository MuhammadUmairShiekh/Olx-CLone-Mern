// import { NavLink } from "react-router-dom"
import { useState } from "react"
import { NavLink } from "react-router-dom"
// import postAds from "../config/backend"
import '../Styles/ProductPost.css'
import Swal from 'sweetalert2'




function PostAd() {
    const [title, setTitle] = useState("")
    const [description, setdescription] = useState("")
    const [price, setPrice] = useState("")
    const [number, setNumber] = useState("")
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")
    // const [file, setFile] = useState("")
    const [condition, setCondition] = useState("")
    const [loading, setLoading] = useState(false)


    const resgisterAcct = async (e) => {
        e.preventDefault();
        if (title == "" || category == " " || description == " " || price == " ") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        } else {
            try {
                const response = await fetch('http://localhost:5000/ads/addData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        price: price,
                    }),

                });
                const result = await response.json();
                Swal.fire({
                    icon: 'success',
                    title: 'Ads Post',
                })
            } catch (e) {
                Swal.fire({
                    icon: (e),
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        }
        setLoading(true)
        setTitle("")
        setdescription("")
        setPrice("")
        setCategory("")
        setNumber("")
        setLocation("")
        setCondition("")
        setLoading(false)
    }


    if (loading) {
        return <div className='loader' ></div>
    }
    return (
        <>
            <div className="ads" >
                <NavLink className="btn2" to={"/"}>Go Back</NavLink>

                < div className="form1" >
                    <p className="logo">Post Your Ad</p>
                    <label>Tittle</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Product Tittle" required="" />
                    <label>Category</label>
                    <select onChange={e => setCategory(e.target.value)} value={category}  >
                        <option selected disabled >Items-Category</option>
                        <option>Electronic</option>
                        <option>Vehicle</option>
                        <option>Mobile Phone</option>
                        <option>Laptop</option>
                        <option>Animals</option>
                        <option>Bike</option>
                    </select>
                    <label>Condition</label>
                    <select onChange={e => setCondition(e.target.value)} value={condition}  >
                        <option></option>
                        <option>Use Condition </option>
                        <option>New Condition </option>
                    </select>
                    <label>Description</label>
                    <textarea rows="4" cols="50" onChange={(e) => setdescription(e.target.value)} value={description} placeholder="Product Descrip" required="" > </textarea>
                    <label>Mobile No</label>
                    <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} placeholder="Enter Mobile Number" required="" />
                    <label>Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Product Price" required="" />
                    <label>Location</label>
                    <input type="text" onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Product Tittle" required="" />
                    {/* <input type="file" className="file" onChange={(e) => setFile(e.target.files)} required="" /> */}
                    <button onClick={resgisterAcct} className="login">Submit</button>
                    <hr />

                </div>
            </div>
        </>
    )
}

export default PostAd


