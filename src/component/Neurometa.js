import React from 'react'

const Neurometa = () => {
  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1> Services</h1>
          <p>Doctor {" > "}    Neurometabolic & Neurogenetic Conditions</p>
        </div>
      </div>

      <div className="diabp">
        <h1>Neurometabolic & Neurogenetic Conditions</h1>
        <div className="bp-row">
          <div className="bp-col">
            <p>
            These conditions are rare but collectively they have a substantial impact on the local healthcare system. These conditions require a systematic and evidence-based diagnostic approach with continuous discussion with parents. Many a times a definitive diagnosis is not reached in spite of all the investigative processes and in those cases symptomatic management is initiated. We have collaborated with accredited and reputed laboratories across the country for the judicious use of investigative procedures. Once the diagnosis is made appropriate referral to the clinical geneticist and metabolic physician is made. 
            </p>
          </div>
          <div className="bp-col">
            <img src="./img/neurogenetic-conditions.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Neurometa
