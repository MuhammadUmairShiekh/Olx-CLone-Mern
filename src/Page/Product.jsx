import React from 'react'
import { useEffect, useState } from "react"
import Card from './Card'


const Product = () => {
  const [phos, setPhotos] = useState([])
  useEffect(() => {    
    getAdsData()
  }, [])
  async function getAdsData() {
    const getAdsData = await fetch("http://localhost:5000/ads")
    const ads = await getAdsData.json()
    console.log(setPhotos(ads.data))
    setPhotos(ads.data)
  }

  // fetch("http://localhost:5000/ads")
  // .then(res => res.json())
  // .then(res => setPhotos(res.ads))


  if (!phos) {
    return <div className='loader' ></div>
  }
  return (
    <div className="main" >

      {
        phos.map((item, id) => {
          return (
            <>
              <Card key={id} tittle={item.title} price={item.price} descrip={item.description}
                btn={("/Product/") + item._id} btn1={"Product"}
              />

            </>

          )
        })
      }

    </div>
  )
}


export default Product