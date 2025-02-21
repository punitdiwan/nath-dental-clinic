import React from "react";
import axios from "axios";
import useSWR from "swr";


const NewsPhotos = () => {
    const fetcher = async (url) => {
        const response = await axios.get(url);
        return response.data;
    };

    // Replace API_ENDPOINT with the actual API endpoint
    const API_ENDPOINT = `${process.env.REACT_APP_CMS_URL1}news_paper_photos?fields=*.*.*`;
    const { data, error } = useSWR(API_ENDPOINT, fetcher);
    
    
    if (error) {
        return <div>Error loading data</div>;
    }
    
    if (!data) {
        return <div>Loading...</div>;
    }
    
    // Extract the image data from the API response
    const images = data.data;

    return (
        <>
            <div className="dr-header">
                <div className="header-contant">
                    <h1> News Paper Photos</h1>
                    <p>Doctor {" > "} News Paper Photos </p>
                </div>
            </div>

            <div className="gallery">
                <div className="gallery-row">
                    {
                        images.map((item, i) => {
                            console.log("cleck items", item)
                            return (
                                <div key={i} className="gallery-col">
                                    <img src={item?.image?.data?.full_url?.replace('http://', 'https://')} alt={`${i}`} />
                                </div>

                            )

                        })
                    }
                </div>
            </div>


        </>
    )

}

export default NewsPhotos;