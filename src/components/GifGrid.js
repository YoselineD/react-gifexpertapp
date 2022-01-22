import React from 'react';
//import { } from 'react/cjs/react.development';
import { useFetchGifts } from '../Hooks/useFetchGifs';
//import { getGifts } from './getGifs';
import { GifGridItem } from './GifGridtem';

export const GifGrid = ({category}) => {

    const {data:images,loading} =useFetchGifts ( category);

   // console.log(data);
    console.log(loading);

   //const [count,setCount]=useState(0);

   //const [images,setImages]=useState([]);

   // useEffect(()=>{
       // getGifts( category)
        //.then(setImages);

   // },[category])

    

   
    //getGifts();
  return (
      <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div className='card-grid'>
          {
              images.map( img =>(
                <GifGridItem
                key={img.id}
                {...img}/>
              ))
          }
  </div>
  </>
  )
};
