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
              <h3>Root Canal Treatment</h3>
              <p>
                Root canal treatment is a treatment sequence for the infected pulp of a tooth that is intended to result in the elimination of infection and the protection of the decontaminated tooth from future microbial invasion.
              </p>
            </div>
          </div>
          <div className="spec-col">
            <div>
              <h3>Fixed Partial Dentures</h3>
              <p>
                The fixed partial denture (FPD) (Fixed teeth)
                It is a dental restoration used to replace missing teeth and that is permanently attached to adjacent teeth or dental implants. It is like a ‘bridge’ fixed on the ‘stages.’ Here, the adjacent teeth or dental implants, called abutments, act as the stages to support the FPD bridge.              </p>
            </div>
          </div>
        </div>
        <br />
        {/* <div className="spec-row">
          <div className="spec-col">
            <div>
              <h3>Glue with BCL </h3>
              <p>
                Cyanoacrylate Tissue Adhesive (TA) with Bandage Contact Lens
                (BCL) has become a cornerstone in treating severe corneal
                thinning and perforations ≤2.5 mm in size.
              </p>
            </div>
          </div>
          <div className="spec-col">
            <div>
              <h3>Sutureless</h3>
              <p>
                The sutureless technique did not reduce the rate of restenosis,
                progression of the disease to previously uninvolved pulmonary
                veins, or mortality rate.
              </p>
            </div>
          </div>
        </div> */}
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
