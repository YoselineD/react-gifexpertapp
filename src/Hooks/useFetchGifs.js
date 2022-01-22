
import {useState} from 'react'
import { useEffect } from 'react/cjs/react.development';
import {getGifts} from  '../helpers/getGifs';
export const useFetchGifts = (category) => {
  const [state,setState]= useState({
    data: [],
    loading : true

  });


  useEffect(()=>{
    getGifts( category)
    .then(imgs => {
        

        setTimeout(()=>{
            console.log(imgs)
            setState({
                data:imgs,
                loading:false
            });
        },3000);

        })
       

  },[category])
//   setTimeout(()=>{
//       setState({
//           data:[1,2,3,4,5,6,7],
//           loading: false
//       })
//   },3000);

  return state;
  
};
