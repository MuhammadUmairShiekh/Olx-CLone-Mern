import React from 'react'
import image from '../Images/property-for-rent.8436595fbaa90d47f0178006f57090a8.png'
import { useState, useParams, useEffect, NavLink } from 'react'
import { Card } from 'reactstrap'

const ProductDetail = () => {
  const [prodc, setProdc] = useState('')
  const { _id } = useParams()
  useEffect(() => {
    // fetch('http://localhost:5000/ads' + id)
    //   .then(res => res.json())
    signalAdsData()
  }, [])
  async function signalAdsData() {
    const getAdsData = await fetch("http://localhost:5000/ads/" + _id)
    const ads = await signalAdsData.json()
    console.log(ads.data)
    setProdc(ads.data)
    console.log(setProdc(ads.data))
  }

  if (!prodc) {
    return <div className='loader' ></div>
  }
  return (
    <div>
      < NavLink className="btnn" to={"/product"} >Go Back</NavLink>
      <h1 className="tag" >{"prodc.category"}</h1>
      <h1 className="tag" >{"prodc.count"}</h1>
      {/* <p>{prodc.count}</p> */}
      <Card price={prodc.price} images={image} tittle={prodc.title}
        descrip={prodc.description}
      />

    </div>)
}

export default ProductDetail