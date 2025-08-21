import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const API_ENDPOINT = `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_SCHOOL}/items/gallery?fields=*.*.*`;
  const { data, error } = useSWR(API_ENDPOINT, fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  const images = data.data;

  const slides = images.map((item) => ({
    src: item?.photo?.data?.full_url?.replace("http://", "https://"),
    alt: item?.title || "Gallery Image",
  }));

  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1>Gallery</h1>
          <p>Doctor {" > "} Gallery</p>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-row">
          {images.map((item, i) => (
            <div
              key={i}
              className="gallery-col"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              style={{ cursor: "pointer" }}
            >
              <img
              style={{borderRadius:"5px",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)"}}
                src={item?.photo?.data?.full_url?.replace("http://", "https://")}
                alt={`Gallery ${i}`}
              />
            </div>
          ))}
        </div>

        <div className="gallery-row img-fix">
          {/* Optional: Static images can go here */}
        </div>
      </div>

      <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={index} />
    </>
  );
};

export default Gallery;
