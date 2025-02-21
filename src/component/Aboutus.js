import React, { useEffect, useState } from "react";

const Aboutus = () => {
  const [paragraph, setParagraph] = useState();


  // console.log(CMS_URL);

  useEffect(() => {
    getdata();
  },[]);

  const getdata = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_CMS_URL1}about?fields=*.*`);
      const data = await res.json();
      setParagraph(data.data[0]);
      console.log(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1> About Us</h1>
          <p>Doctor {" > "} About Us </p>
        </div>
      </div>

      <div className="welcome">
        <h3>About Shri Nath Ji Dental Clinic </h3>
        <div className="wel-row">
          <div className="wel-col ">
            <img
              src={paragraph?.image?.data?.full_url.replace(
                "http://",
                "https://"
              )}
              alt="image1"
            />
          </div>
          <div className="wel-col">
            <p
              className="childpara2"
              dangerouslySetInnerHTML={{
                __html: paragraph?.paragraph1 || "No message available.",
              }}
            />
          </div>
        </div>
      </div>

      <div className="doctor-about ">
        <p
          className="childpara2"
          dangerouslySetInnerHTML={{
            __html: paragraph?.paragraph2 || "No message available.",
          }}
        />
      </div>

      <div className="certificate">
        <h1>
          Our Achievements <span style={{ color: "#243A74" }}></span>
        </h1>
        <div className="c-row">
          <div className="c-col">
            <img src="./images/1.jpeg" alt="" />
          </div>
          <div className="c-col">
            <img src="./images/2.jpeg" alt="" />
          </div>
          <div className="c-col">
            <img src="./images/3.jpeg" alt="" />
          </div>
        </div>

        {/* <div className="doc">
          <a href="./images/pdf.pdf" target="_blank">
            Read More About Achievements
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Aboutus;
