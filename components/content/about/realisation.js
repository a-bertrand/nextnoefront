import React from 'react';
import LazyLoad from 'react-lazyload';


export default class Realisation extends React.Component  {
    render(){
        let img_array = []
        for(let i  = 24; i > -1; i--){
            img_array.push("/static/images/folio/"+i+".png")  
        }
        return(
            <div className='columns is-multiline'>
                {
                    img_array.map((img_url, index) => 
                        <LazyLoad height={400}>
                            <div className='column is-half' >
                                <img key={index} className="image" src={img_url} />
                            </div>
                        </LazyLoad>
                    )
                }
            </div>
        )
    }
}