import React from "react";
import {Helmet} from "react-helmet";
const MetaData=({title, metaDescription, metaKeywords, canonical})=>{
    // console.log(metaDescription)
    return(
        <Helmet>
            <title>{`${title} - Coding Scholar`}</title>
            <meta name="description" content={`${metaDescription}`}/>
            <meta name="keywords" content={`${metaKeywords}`} />
            <link rel="canonical" href={`${canonical}`}/>
        </Helmet>
    );
}
export default MetaData;