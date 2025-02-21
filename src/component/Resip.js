import React, { useEffect, useState } from "react";

const Resip = () => {
  const [treatment, setTreatment] = useState();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_CMS_URL}glaucoma_dianosis?fields=*.*`
      );
      const data = await res.json();
      setTreatment(data.data[0]);
      console.log(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1> Treatment</h1>
          <p>
            Doctor {" > "} {treatment?.title}
          </p>
        </div>
      </div>
      <div className="diabp">
        <h1> Glaucoma Dianosis Using Advanced Keeler Digital Applanation</h1>
        <div className="bp-row">
          <div className="bp-col">
            <p
              className="childpara2"
              dangerouslySetInnerHTML={{
                __html: treatment?.paragraph1 || "No message available.",
              }}
            />
          </div>
          <div className="bp-col">
            <img
              src={treatment?.image?.data?.full_url.replace(
                "http://",
                "https://"
              )}
              alt="image1"
            />
          </div>
        </div>
      </div>
      <p
        className="childpara2"
        dangerouslySetInnerHTML={{
          __html: treatment?.paragraph2 || "No message available.",
        }}
      />
    </>
  );
};

export default Resip;
