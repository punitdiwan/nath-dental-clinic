import React, { useEffect, useRef } from "react";

const Footer = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!scriptLoaded.current) {
      const script = document.createElement("script");
      script.src = "https://visitorshitcounter.com/js/badgess.js?v=1738760880";
      script.async = true;
      document.body.appendChild(script);
      scriptLoaded.current = true;
    }
    return () => {
      const script = document.querySelector('script[src="https://visitorshitcounter.com/js/badgess.js?v=1738760880"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);


  return (
    <>
      <div className="footer">
        <div className="footer-row">
          <div className="footer-left-upper">
            <div className="footer-left">
              <div className="footer-col footer-col-1">
                <h3>Shri Nath Ji Dental Clinic</h3>
                <p>
                   Shri Nath Ji Dental Clinic. His
                  clinic is one of the best setup in Mandla city and equipped
                  with latest machines.
                </p>
                <div className="contact-detail">
                  <p>
                    Contact Number :{" "}
                    <a href="tel:  9755558867">+91 9755558867 </a>
                  </p>
                  <p>
                    {/* Contact Number : <a href="tel:  8770195044">+91 8770195044</a> */}
                  </p>
                  <p>
                    Email :{" "}
                    <a href="mailto: nitesh_gaur99@yahoo.com">
                      {" "}
                      nitesh_gaur99@yahoo.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-col footer-col-1">
                <h3>ADDRESS</h3>
                <div className="clinic-time">
                  <p>
                  Shri Nath Ji Dental Clinic
                    <br /># Shreenathji Dental Clinic near district hospital above Sehore chemist ganga ashram sehore
                  </p>
                  <p>
                    <span style={{ color: "#ffff" }}>Clinic Time:</span> 11.00am
                    to 3.00pm &nbsp; &nbsp; 6.00pm to 9.00pm
                  </p>
                  <p>
                    {/* <span style={{ color: "#ffff" }}>Friday:</span> Closed */}
                  </p>
                </div>

                {/* <div className="clinic-time-r">
              <p>
                <span style={{ color: "#312e7b" }}>Residential address.</span>
                Vipat pura vardhman colony Narsingh pur behind Anjani. Hospital
              </p>
              <p>
                <span style={{ color: "#312e7b" }}>Clinic Time:</span> 8:30AMto
                9:30 AM and 2:00PM to 4:00PM Monday-saturday
              </p>
            </div> */}
              </div>
            </div>
            {/* <div className="footer-right">
              <div className="footer-left-down">
                <a
                  class="hitCounter"
                  href="https://visitorshitcounter.com/"
                  target="_blank"
                  rel="noreferrer"
                  title="Hit counter"
                  data-name="2ab144abc57e17af11df682059a16e88|5|external|2000|#0099cc|#f5f5f5|large|s-hit"
                >

                </a>
                <script>
                  document.write("
                  <script
                    type="text/javascript"
                    src='https://visitorshitcounter.com/js/hitCounter.js?v="+Date.now()+"'
                  ></script>
                  ");
                </script>
                <div className="col-xs-12 mt20" id="bg">
                  <div

                    style={{
                      margin: "0 auto",
                      width: "310px",
                      height: "80px",
                      background: "none",
                      textAlign: "left",
                      borderRadius: "5px",
                      border: "1px solid white",
                      padding: "3px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "4px",
                        display: "inline-block",
                        borderRight: "1px solid #ffffff",
                      }}
                    >
                      <a
                        href="www.dragrawaleyecaremandla.in"
                        rel="noreferrer"
                        target="_blank"
                        title="Visitor Counter"
                        style={{
                          color: "#ffffff",
                          textDecoration: "none",
                          fontSize: "25px",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                          marginRight: "1px",
                        }}
                      >

                        Total visitors
                      </a>
                    </span>
                    <span
                      className="text"
                      id="dupli_hit_counter"
                      style={{

                        display: "inline-block",
                        color: "#ffffff",
                        width: "100%",
                        fontSize: "30px",
                        textAlign: "center",
                        fontWeight: "bold",
                        marginLeft: "2px"
                      }}
                    >
                    </span>
                    <input
                      type="hidden"
                      id="site_val"
                      className="visitor-counter"
                      value="https://visitorshitcounter.com/counterDisplay?code=2ab144abc57e17af11df682059a16e88&style=0017&pad=5&type=page&initCount=2000"
                    />
                  </div>
                </div>
              </div>
              <script src="https://visitorshitcounter.com/js/badgess.js?v=1738756182"></script>
            </div> */}

          </div>
          <div className="footer-col" id="footermap">
            <h3>LOCATION MAP</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.744101665998!2d77.08213689551613!3d23.199000753027768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf3346411e88b%3A0x6eaecf44ea5a93a7!2sShree%20Nath%20Ji%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1740127616947!5m2!1sen!2sin"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="mapurl"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="policy" id="footer-policy">
        <div className="policy-row">
          <div className="policy-col">
            <p>Copyright ©  Shri Nath Ji Dental Clinic</p>
          </div>
          <div className="policy-col">
            <p>
              Design with <i className="fa-sharp fa-solid fa-heart"></i> by{" "}
              <a href="https://maitretech.com/" target="_blank" rel="noreferrer">
                maitretech.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
