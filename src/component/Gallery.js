import React from "react";
import axios from "axios";
import useSWR from "swr";

const Gallery = () => {
  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

// Replace API_ENDPOINT with the actual API endpoint
const API_ENDPOINT = `${process.env.REACT_APP_CMS_URL1}gallery?fields=*.*.*`;
const { data, error } = useSWR(API_ENDPOINT, fetcher);


if (error) {
    return <div>Error loading data</div>;
}

if (!data) {
    return <div>Loading...</div>;
}

// Extract the image data from the API response
const images = data.data;
console.log("check", images)

  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1> Gallery</h1>
          <p>Doctor {" > "} Gallery </p>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-row">
          {
            images.map((item, i) =>{
              console.log("cleck items",item)
              return(
                   <div key={i} className="gallery-col">
                       <img src={item?.photo?.data?.full_url?.replace('http://', 'https://')} alt={`${i}`} />
                   </div>

              )
              
            })
          }


        </div>
          {/* <div className="gallery-col">
            <img src="./images/g2.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./images/g3.jpeg" alt="" />
          </div> */}
       
        {/* <div className="gallery-row">
          <div className="gallery-col">
            <img src="./images/g4.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./images/g5.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./images/g6.jpeg" alt="" />
          </div>
        </div>
        <div className="gallery-row">
          <div className="gallery-col">
            <img src="./images/g7.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./images/g8.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./images/g10.jpeg" alt="" />
          </div>
        </div>
        <div className="gallery-row">
          <div className="gallery-col">
            <img src="./images/g9.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./images/g11.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./images/g12.jpeg" alt="" />
          </div>
        </div> */}
        <div className="gallery-row img-fix">
          {/* <div className="gallery-col">
            <img src="./images/g13.jpeg" alt="" />
          </div> */}
          {/* <div className="gallery-col certificate-1">
            <img src="./img/maravi-certificate.jpeg" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Gallery;
