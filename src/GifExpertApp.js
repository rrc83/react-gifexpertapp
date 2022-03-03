import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{
    

    const [categories, setCategories] = useState(['Goku']);


    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            
            <ol>
                {
                    categories.map(c =>
                        (
                            <GifGrid category={ c } 
                                     key={ c }
                            /> 
                        )
                    )
                }
            </ol>
        </>

    );
};

export default GifExpertApp;