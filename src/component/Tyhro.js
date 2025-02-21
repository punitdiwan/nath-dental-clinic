import React, { useEffect, useState } from "react";

const Tyhro = () => {
  const [treatment, setTreatment] = useState();
  
    useEffect(() => {
      getdata();
    }, []);
  
    const getdata = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_CMS_URL}cornea_and_dry_eye?fields=*.*`
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
        <h1> {treatment?.title} </h1>
        <div className="bp-row">
          <div className="bp-col">
          <p  className="childpara2"
              dangerouslySetInnerHTML={{
                __html: treatment?.paragraph1 || "No message available.",
              }}
            />

            {/* <p>
              The transparent part of the eye that covers the iris and the pupil
              and allows light to enter the inside. The cornea is a transparent
              avascular tissue that acts as a structural barrier and protects
              the eye against infections. [1] Along with the tear film, it
              provides proper anterior refractive surface for the eye. Cornea
              contributes to two-third of the refractive power of the eye.
            </p>
            <p>
              Injuries to the cornea can occur anytime something abnormal makes
              contact with the cornea. Conditions like dry eye syndrome can also
              increase the risk for a corneal injury. Foreign bodies or trauma
              of the cornea can result in abrasions (scratches), keratitis
              (inflammation) or corneal edema (swelling).
            </p> */}
          </div>
          <div className="bp-col">
          <img src={treatment?.image?.data?.full_url.replace(
                    "http://",
                    "https://"
                  )} alt="image1" />
          </div>
        </div>
      </div>
      <div className="diabp">
        
      <p  className="childpara2"
              dangerouslySetInnerHTML={{
                __html: treatment?.paragraph2 || "No message available.",
              }}
            />
      </div>
    </>
  );
};

export default Tyhro;
