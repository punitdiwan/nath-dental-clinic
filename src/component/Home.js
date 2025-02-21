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
        <h3>About Shri Nath Ji Dental Clinic</h3>
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
              <h3>Root Canal Treatment </h3>
              <p>
                Root canal treatment is a treatment sequence for the infected pulp of a tooth that is intended to result in the elimination of infection and the protection of the decontaminated tooth from future microbial invasion.
              </p>
            </div>
          </div>
          <div className="spec-col">
            {/* <div>
              <img src="./img/h2.png" alt="" />
            </div> */}
            <div>
              <h3>Periodontal Surgery (Gum Surgery) </h3>
              <p>
                Periodontal surgery is performed to address advanced gum disease or correct cosmetic gum
                concerns. Common periodontal surgeries include gum grafting, pocket reduction surgery,
                and crown lengthening.
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
              <h3>Jaw Surgery (Orthognathic Surgery)</h3>
              <p>
                Orthognathic surgery is performed to correct significant jaw misalignment or skeletal discrepancies
                that impact the bite, speech, or facial aesthetics. This surgical procedure involves repositioning
                the upper jaw, lower jaw, or both to achieve proper alignment. Jaw surgery can improve oral function,
                alleviate TMJ disorders, enhance facial symmetry, and enhance the overall balance of the facial profile.
              </p>
            </div>
          </div>
          <div className="spec-col">
            <div>
              <h3>Dental Implants</h3>
              <p>
                Dental implants are a popular tooth replacement option that involves surgically placing an artificial
                tooth root into the jawbone. This procedure provides a stable foundation for a dental crown or bridge.
                Dental implants offer numerous benefits, including improved chewing and speaking ability,
                enhanced aesthetics, and preservation of bone structure.
              </p>
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
        <div className="extra">
          <h3> Tooth Extraction</h3>
          <p>
          Tooth extractions are minor procedures and the most common type of mouth surgery. They involve removing a 
          tooth from its gum socket. While dentists generally prefer to save a natural tooth, restorative 
          methods like dental fillings and crowns are not always possible. Extracting a tooth that’s damaged 
          beyond repair allows dentists to restore function and aesthetics with a dental implant.
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
            <h6>Slit Lamp With Applanation Tonometer </h6>

            {/* <p>(B.H.M.S, M.D)</p> */}
          </div>
          <div className="team-col">
            <img src="images/machine2.jpeg" alt="" />
            <h6> Fully Computerised Glass Prescription</h6>

            {/* <p>B.H.M.S</p> */}
          </div>
          <div className="team-col">
            <img src="images/machine3.jpeg" alt="" />
            <h6>Labomed (USA) Operating Microscope</h6>

            {/* <p>B.H.M.S</p> */}
          </div>
          <div className="team-col">
            <img src="images/machine5.jpeg" alt="" />
            <h6>Modular OT</h6>

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
              Doctor is highly experienced. Shri Nath Ji Dental Clinic is 
              profession and I am very happy with his treatment🙂.
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Amit Tahilani</h4>
            <p>
              Best Orthodontics , Thank u so much Shri Nath Ji Dental Clinic for the best treatment.
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Vikas Agrawal</h4>
            <p>
              Best Dental Clinic , It was nice experience of visiting
              here and had a perfect solution of any dental diseases.
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Rajesh Jain</h4>
            <p>
              Wonderful office, patient oriented, caring treatment, no matter
              your age. Shri Nath Ji Dental Clinic is resourceful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
