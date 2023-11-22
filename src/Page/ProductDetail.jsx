import React from 'react'
import image from '../Images/property-for-rent.8436595fbaa90d47f0178006f57090a8.png'
import { useState, useEffect, NavLink } from 'react'
import { Card } from 'reactstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [prodc, setProdc] = useState('')
  const { id } = useParams()
  // const url = 'http://localhost:5000/ads' + _id
  useEffect(() => {
    // fetch('http://localhost:5000/ads' + id)
    //   .then(res => res.json())
    signalAdsData()
   
  }, [])
  async function signalAdsData() {
    const getAdsData = await fetch(`http://localhost:5000/ads/${id}`)
    const ads = await getAdsData.json()
    console.log(ads)
    setProdc(ads.data)
    console.log(setProdc(ads.data))
  }
  

  if (!prodc.length) {
    return <div className='loader' ></div>
  }
  return (
    <div>
      {
        <p>{prodc}</p>
      }
      {/* < NavLink className="btnn" to={"/product"} >Go Back</NavLink>
      <h1 className="tag" >{"prodc.category"}</h1>
      <h1 className="tag" >{"prodc.count"}</h1>
      <Card price={prodc.price} images={image} tittle={prodc.title}
        descrip={prodc.description}
      /> */}


    </div>)
}

export default ProductDetail