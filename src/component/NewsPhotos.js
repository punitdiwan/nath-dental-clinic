import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const NewsPhotos = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const fetcher = async (url) => {
        const response = await axios.get(url);
        return response.data;
    };

    const API_ENDPOINT = `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_SCHOOL}/items/news_paper_photos?fields=*.*.*`;
    const { data, error } = useSWR(API_ENDPOINT, fetcher);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;

    const images = data.data;

    const slides = images.map((item) => ({
        src: item?.image?.data?.full_url?.replace("http://", "https://"),
        alt: item?.title || "News Photo",
    }));

    return (
        <>
            <div className="dr-header">
                <div className="header-contant">
                    <h1>News Paper Photos</h1>
                    <p>Doctor {" > "} News Paper Photos</p>
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
                                src={item?.image?.data?.full_url?.replace("http://", "https://")}
                                alt={`News ${i}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
                plugins={[Thumbnails, Zoom]}
            />
        </>
    );
};

export default NewsPhotos;
