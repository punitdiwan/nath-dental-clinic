import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerSection from "./BannerSection";

const Home = () => {
  const [paragraph, setParagraph] = useState();

  useEffect(() => {
    getdata();
  }, []);
  console.log(process.env.REACT_APP_CMS_URL)
  const getdata = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_CMS_URL1}about?fields=*.*`
      );
      const data = await res.json();
      setParagraph(data.data[0]);
      console.log(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <BannerSection />

      <div className="welcome">
        <h3>About Shree Nath Ji Dental Clinic</h3>
        <div className="wel-row">
          <div className="wel-col ">
            <img src={paragraph?.image?.data?.full_url.replace(
              "http://",
              "https://"
            )} alt="image1" />
          </div>
          <div className="wel-col">
            <p

              dangerouslySetInnerHTML={{
                __html: paragraph?.paragraph1 || "No message available.",
              }}
            />

            <Link to="/aboutus">
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="speciality">
        <h2>DENTAL SURGERIES</h2>
        <div className="spec-row spec-row-1">
          <div className="spec-col">
            {/* <div>
              <img src="./img/h1.png" alt="" />
            </div> */}

            <div>
              <h3>Orthodontics Treatment (Braces treatment) </h3>
              <p>
                dentistry specialty that addresses the diagnosis, prevention, management, and correction of mal-positioned teeth and jaws, as well as misaligned bite patterns. It may also address the modification of facial growth.
                Orthodontics is a dental specialty focused on aligning your bite and straightening your teeth. You might need to see an orthodontist if you have crooked, overlapped, twisted or gapped teeth. Common orthodontic treatments include traditional braces, clear aligners and removable retainers.              </p>
            </div>
          </div>
          <div className="spec-col">
            {/* <div>
              <img src="./img/h2.png" alt="" />
            </div> */}
            <div>
              <h3>Scaling (Teeth cleaning) </h3>
              <p>
                an ultrasonic scaler to remove plaque and tartar from the teeth. A dental tooth cleaning is a procedure that removes plaque and tartar from teeth to prevent cavities, gum disease, and tooth decay. It's a part of oral hygiene.
              </p>
            </div>
          </div>
        </div>
        <div className="spec-row">
          <div className="spec-col">
            {/* <div>
              <img src="./img/h3.png" alt="" />
            </div> */}
            <div>
              <h3>FPD (fixed teeth placement)</h3>
              <p>
                Fixed Teeth Placement (FPD)  is a dental restoration technique used to replace missing teeth. This method involves attaching artificial teeth to adjacent natural teeth or dental implants to create a permanent solution.
              </p>
            </div>
          </div>
          <div className="spec-col">
            <div>
              <h3>Complete Denture               </h3>
              <p>
                A Complete Denture is a removable dental prosthesis used to replace all the natural teeth in a patient's upper or lower arch. It is commonly recommended for individuals who have lost all their teeth due to decay, disease, or injury.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="spec-row">
          <div className="spec-col">
            <div>
              <h3>Extraction (Removal of tooth without pain) </h3>
              <p>
                Extraction is the process of removing a tooth from its socket in the jawbone. It is typically performed when a tooth is severely damaged due to decay, infection, or trauma, or when it causes crowding or other dental issues. Modern dental techniques ensure that extractions are carried out without pain or discomfort.
              </p>
            </div>
          </div>
          <div className="spec-col">
            <div>
              <h3>Root canal treatment </h3>
              <p>
                Root canal treatment (RCT) is a dental procedure designed to save a damaged or infected tooth by removing the infected pulp (the soft tissue inside the tooth) and sealing it to prevent further damage. This procedure allows patients to keep their natural tooth, avoiding extraction.
              </p>
            </div>
          </div>
        </div>
        <div className="spec-row">
          <div className="spec-col">
            <div>
              <h3>Oral ulcer treatment</h3>
              <p>
                Oral ulcers, also known as canker sores, are painful lesions that can appear inside the mouth, on the gums, tongue, or inner cheeks. These ulcers can be caused by factors such as stress, trauma, infections, certain foods, or underlying medical conditions. Treating oral ulcers helps reduce pain, promote healing, and prevent recurrence.
              </p>
            </div>
          </div>
          <div className="spec-col">
            <div>
              <h3>RVG (Digital X-ray) </h3>
              <p>
                RVG (Radiovisiography), also known as Digital X-ray, is an advanced imaging technology used in dental treatment to capture clear, detailed images of teeth, bones, and surrounding structures. Unlike traditional X-rays, which use film to capture images, RVG employs a digital sensor that instantly transmits the image to a computer screen.
              </p>
            </div>
          </div>
        </div>
        <div className="spec-row">
          <div className="spec-col">
            <div>
              <h3>Bleaching (teeth whitening) </h3>
              <p>
                Teeth bleaching or whitening is a popular cosmetic dental procedure aimed at improving the color and appearance of discolored or stained teeth. It is often performed to restore a bright, natural smile by lightening the enamel, removing stains, and reducing yellowing caused by various factors such as aging, smoking, or consumption of staining foods and beverages.
              </p>
            </div>
          </div>
          <div className="spec-col">
            <div>
              <h3>Restoration ( dental filling)</h3>
              <p>
                Dental restoration, commonly known as a dental filling, is a procedure used to repair teeth damaged by decay, cracks, or wear. The treatment involves removing the decayed portion of the tooth and filling the space with a material to restore its function, shape, and appearance.
              </p>
            </div>
          </div>
        </div>
        <div className="gallery-col2">
          <img src="images/description.jpeg" alt="" />
        </div>
        <div className="extra">
          <h3> Benefits of teeth cleaning - </h3>
          <p>
            Prevents cavities, gingivitis, and periodontal disease<br></br>
            Helps sore, bleeding gums <br></br>
            Prevents tooth loss <br></br>
            Gives you the best chance for long-lasting oral health <br></br>
          </p>
        </div>
        <div className="imp">
          <span>
            <h2>Comprehensive Dental Care and Advanced Treatment Solutions Available</h2>
          </span>
        </div>
      </div>

      <section className="our-team">
        <h1>
          Dental Checkup and Surgeries
          <span style={{ color: "#1d4776" }}> With Latest Machines</span>
        </h1>
        <div className="team-row">
          <div className="team-col">
            <img src="images/machine1.jpeg" alt="" />
            {/*  <h6>Slit Lamp With Applanation Tonometer </h6> */}

            {/* <p>(B.H.M.S, M.D)</p> */}
          </div>
          <div className="team-col">
            <img src="images/machine11.jpeg" alt="" />
            {/*     <h6> Fully Computerised Glass Prescription</h6> */}

            {/* <p>B.H.M.S</p> */}
          </div>
          <div className="team-col">
            <img src="images/machine8.jpeg" alt="" />
            {/*    <h6>Labomed (USA) Operating Microscope</h6> */}

            {/* <p>B.H.M.S</p> */}
          </div>
          <div className="team-col">
            <img src="images/machine7.jpeg" alt="" />
            {/*   <h6>Modular OT</h6> */}

            {/* <p>B.H.M.S</p> */}
          </div>
          <div className="team-col">
            <img src="images/machine12.jpeg" alt="" />
            {/*   <h6>Modular OT</h6> */}

            {/* <p>B.H.M.S</p> */}
          </div>
        </div>
      </section>

      <div className="client">
        <img src="" alt="" />
        <div className="client-row">
          <h3>Our Testimonials</h3>
          <h1>What our Patients Say</h1>
        </div>
      </div>

      <div className="benefit">
        {/* <div className="benefit-row">
          <div className="benefit-col">
            <i class="fa-solid fa-user-doctor"></i>
            <h4>Effective and Fast Acting</h4>
            <p>
              Homeopathic medicine is fast acting, restoring optimal health.
              Homeopathic prescribing is effective in both acute and chronic
              conditions
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Gives Lasting Relief</h4>
            <p>
              Homeopathic treatments addresses disease at the root level, hence
              enhancing resistance to disease.
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-microscope"></i>
            <h4>Free From Side Effects</h4>
            <p>
              Instead of suppressing symptoms, homeopathy gently works with the
              body to stimulate balance or healing.
            </p>
          </div>
        </div> */}
        <div className="benefit-row ">
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Shalu kushwaha</h4>
            <p>
              Doctor is highly experienced. Shree Nath Ji Dental Clinic is
              profession and I am very happy with his treatment🙂.
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Amit Tahilani</h4>
            <p>
              Best Orthodontics , Thank u so much Shree Nath Ji Dental Clinic for the best treatment.
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Vikas Agrawal</h4>
            <p>
              It was nice experience of visiting
              here and had a perfect solution of any dental diseases.
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Rajesh Jain</h4>
            <p>
              Wonderful office, patient oriented, caring treatment, no matter
              your age. Shree Nath Ji Dental Clinic is resourceful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
