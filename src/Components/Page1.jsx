import React from "react";
import "./Page1.css";
import image1 from "./image/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png";
import image3 from "./image/logo.png";
import image5 from "./image/device-pile-in.png";
import image7 from "./image/x.png";
import image9 from "./image/tv.png";
import { FaChevronRight } from "react-icons/fa6";
import { IoLanguageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import v1 from "./video/v1.mp4"

const Page1 = () => {
  return (
    <div>
      <div className="Fdiv0">
        <div className="Fdiv1">
          <img src={image3} alt="" className="Fimage1" />

          <div className="Fdiv2">
            <div>
              <select className="select">
                <option>
                  <IoLanguageOutline />
                  <p>English</p>
                </option>

                <option>हिन्दी</option>
              </select>
            </div>
            <div>
              <Link to="/login">
                <button className="FBtn1">Sign in</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="Fdiv3">
          <p className="Fp1">Unlimited movies, TV shows and more</p>
          <p className="Fp2">Watch anywhere. Cancel anytime.</p>
          <p className="Fp3">
            Ready to watch? Enter your email or mobile number to create or
            restart your membership.
          </p>
          <div className="Fdiv4">
            <input
              type="text"
              className="Fin1"
              placeholder="Email or Placeholder"
            />
            <button className="Fbtn2">
              Get Started <FaChevronRight className="Ficon1" />
            </button>
          </div>
        </div>
      </div>
      <div className="divgap"></div>

      <div className="Fdiv5">
          <div className="Fdiv6">
            <p className="Fp4">Enjoy on your TV</p>
            <div>
              <p className="Fp5">
                Watch on smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple
                TV, Blu-ray players and <br /> more.
              </p>
            </div>
          </div>
          <div className="Fdiv7">
            <div className="video-container">
              <img src={image9} alt="" className="Fimage2" />
              <video className="v1-card"  autoPlay loop>
                <source src={v1} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      <div className="divgap"></div>

      <div className="Fdiv5">
        <div className="Fdiv7">
          <img src={image7} alt="" className="FFimage2" />
        </div>
        <div className="Fdiv6">
          <p className="Fp4">
            Download your <br /> shows to watch <br /> offline
          </p>
          <p className="Fp5">
            Save your favourites easily and always have <br /> something to
            watch.
          </p>
        </div>
      </div>
      <div className="divgap"></div>

      <div className="Fdiv5">
        <div className="Fdiv6">
          <p className="Fp4">Watch everywhere</p>
          <p className="Fp5">
            Stream unlimited movies and TV shows on <br /> your phone, tablet,
            laptop, and TV.
          </p>
        </div>
        <div className="video-container-1">
              <img src={image5} alt="" className="Fimage2" />
              <video className="v1-card-1"  autoPlay loop>
                <source src={v1} type="video/mp4" />
              </video>
            </div>
      </div>

      <div className="divgap"></div>

      <div className="Fdiv5">
        <div className="Fdiv7">
          <img src={image1} alt="" className="Fimage2" />
        </div>
        <div className="Fdiv6">
          <p className="Fp4">
            Create profiles for <br /> kids
          </p>
          <p className="Fp5">
            Send children on adventures with their <br /> favourite characters
            in a space made just for <br /> them—free with your membership.
          </p>
        </div>
      </div>
      <div className="divgap"></div>

      <div className="Fdiv8">
        <p className="Fp8">Frequently Asked Questions</p>

        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="page1" />
            <label htmlFor="page1">What is Netflix?</label>
            <div className="content">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="page2" />
            <label htmlFor="page2">How much does Netflix cost?</label>
            <div className="content">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹149 to ₹649 a month. No extra costs, no contracts.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="page3" />
            <label htmlFor="page3">Whrere can i watch?</label>
            <div className="content">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favourite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="page4" />
            <label htmlFor="page4">How do i cancel?</label>
            <div className="content">
              <p>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="page5" />
            <label htmlFor="page5">What can i watch on Netflix?</label>
            <div className="content">
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="page6" />
            <label htmlFor="page6">Is Netflix good for kids?</label>
            <div className="content">
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space. Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don’t want kids to see.
              </p>
            </div>
          </li>
        </ul>

        <p className="Fp33">
          Ready to watch? Enter your email or mobile number to create or restart
          your membership.
        </p>
        <div className="Fdiv4">
          <input
            type="text"
            className="Fin1"
            placeholder="Email or Placeholder"
          />

          <button className="Fbtn2">
            Get Started <FaChevronRight className="Ficon1" />
          </button>
        </div>
      </div>

      <div className="divgap"></div>

      <div className="container-fluid re-b-c text-white pt-0 px-5 ps-5 pb-0">
        <div className="row p-5">
          <p className="Fp6">Questions? Call 000-800-919-1694</p>
          <div className="col-lg-2 col-md-6  pt-0  ps-5  pb-0 mx-5 ms-0">
            <a className="Fp7">FAQ</a> <br /> <br />
            <a className="Fp7">Investor Relations</a> <br /> <br />
            <a className="Fp7">Privacy</a> <br /> <br />
            <a className="Fp7">Speed Test</a> <br />
            <select className="select">
              <option>
                <p>
                  <IoLanguageOutline /> English
                </p>
              </option>

              <option>हिन्दी</option>
            </select>{" "}
            <br /> <br />
            <a className="Fp7">Netflix India</a>
          </div>
          <div className="col-lg-2 col-md-6  pt-0  mx-5 ps-5 pb-0 ms-0">
            <a className="Fp7">Help Centre</a> <br /> <br />
            <a className="Fp7">Media Centre</a> <br />
            <br />
            <a className="Fp7">Jobs</a> <br /> <br />
            <a className="Fp7">Cookie Preferences</a> <br /> <br />
            <a className="Fp7">Legal Notices</a> <br /> <br />
          </div>
          <div className="col-lg-2 col-md-6  pt-0  mx-5 ps-5 pb-0 ms-0">
            <a className="Fp7">Account</a> <br /> <br />
            <a className="Fp7">Ways to Watch</a> <br /> <br />
            <a className="Fp7">Corporate Information</a> <br /> <br />
            <a className="Fp7">Only on Netflix</a> <br />
          </div>
          <div className="col-lg-2 col-md-6  pt-0  mx-5 ps-5 ms-0 pb-0">
            <a className="Fp7">Media Centre</a> <br /> <br />
            <a className="Fp7">Terms of Use</a> <br /> <br />
            <a className="Fp7">Contact Us</a> <br />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page1;
