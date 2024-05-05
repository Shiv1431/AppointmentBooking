import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[30px] lg:gap-[40px] xl:gap-0 flex-col lg:flex-row">
            {/* ================about image================== */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img src={aboutImg} alt="" />
              {/* <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                <img src={aboutCardImg} alt="" />
              </div> */}
            </div>

            {/* ===============About content=================== */}
            <div className="w-full lg:w-1/2 xl:w-[670] order-1 lg:order-2">
              <h2 className="heading">Proud to be one of the nation's best</h2>
              <p className="text__para">
                For 30 years in a row, our appointment-based healthcare service
                has been recognized as one of the best in the nation and #1 in
                Uttar Pradesh. We take pride in offering top-notch care to our
                patients.
              </p>
              <p className="text__para mt-[30px]">
                Our dedication to excellence is unwavering. Every day, we focus
                on providing exceptional service and improving our offerings to
                ensure the best possible outcomes for our patients.
              </p>

              <Link to="/">
                {" "}
                <button className="btn">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
