import React from 'react';
import Image from 'next/image';


const Slider = ({slides}) => {
    return (
        <div id='gallery'>
            <h1> Galería</h1>
            <div>
                {slides.map((slide, index) => {
                    return (
                        <div key={index}>
                            <Image 
                                src={slide.image} 
                                alt='/' 
                                width='1440'
                                height='600'
                                objectFit='cover'
                            />
                        </div>
                    )
                }
                    )
                }
            </div>
                
        
        </div>
      );
}
 
export default Slider;