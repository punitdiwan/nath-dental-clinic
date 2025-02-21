import React, { useEffect, useState } from "react";

const Diabbp = () => {
 const [treatment, setTreatment] = useState()

    useEffect(() => {
      getdata();
    }, []);
  
    const getdata = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_CMS_URL}headache_and_migrane?fields=*.*`
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
          <p>Doctor {" > "} {treatment?.title} </p>
        </div>
      </div>

      <div className="diabp">
        <h1>{treatment?.title}</h1>
        <div className="bp-row">
          <div className="bp-col">

          <p    className="childpara2"
              dangerouslySetInnerHTML={{
                __html: treatment?.paragraph1 || "No message available.",
              }}
            />
         
          </div>
          <div className="bp-col">
            {/* <img src="./img/bp.jpg" alt="" /> */}
            <img src={treatment?.image?.data?.full_url.replace(
                    "http://",
                    "https://"
                  )} alt="image1" />
          </div>
        </div>
      </div>
      <div className="diabp">
        {/* <h1>Symptoms of Headache & Migrane -  </h1> */}
        <div className="bp-row">
          <div className="bp-col">
          <p
               className="childpara2"
              dangerouslySetInnerHTML={{
                __html: treatment?.paragraph2 || "No message available.",
              }}
            />
            {/* <p>
            Slow onset of the headache.
            </p>
            <p>
            Head usually hurts on both sides.
            </p>
            <p>
            Pain is dull or feels like a band or vice around the head.
            </p>
            <p>
            Sensitivity to light, sound, and sometimes smell and touch.
            </p>
            <p>
            Nausea and vomiting.
            </p> */}
          </div>
          {/* <div className="bp-col">
            <img src="./img/bp.jpg" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Diabbp;
