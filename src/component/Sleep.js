import React from "react";

const Sleep = () => {
  return (
    <>
    <div className="dr-header">
        <div className="header-contant">
          <h1> Services</h1>
          <p>Doctor {" > "} Sleep Disorders </p>
        </div>
      </div>
      <div className="diabp">
        <h1>Sleep Disorders</h1>
        <div className="bp-row">
          <div className="bp-col">
            <p>
              Sleep is a behavior that is often overlooked by parents and
              clinician's in day-to-day life. Sleep disorders have often have a
              major effect on the child's daytime behavior, learning and health.
              The impact of disordered sleep in the child also falls onto
              parents and this is seen as lack of energy, marital conflicts,
              employment issues and social inter-relationships. We carry out a
              thorough evaluation at ACPN starting with a comprehensive sleep
              history, a through examination and then judicious use of
              investigative tools like EEG and Polysomnography. For children
              requiring ENT assessments appropriate referrals are made to
              trusted clinicians in partner centers. The most common cause of
              sleep problems in children is behavioural insomnia. In these cases
              appropriate advice is given to parents to establish a sleep
              routine and improve the sleep hygiene of their child. In some
              cases, medications are prescribed as an adjunct to help with
              modulation of sleep pattern.
            </p>
          </div>
          <div className="bp-col">
            <img src="./img/sleep.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sleep;
