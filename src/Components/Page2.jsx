import React from "react";
import "./Page2.css";
import { FaInstagram, FaSearch, FaBell, FaCaretDown, FaPlay, FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { FaSquareTwitter } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import image3 from "./image/logo.png";
import image2 from "./image/mobile-0819.jpg";
import image0 from "./picture/1.png";
import image00 from "./picture/2.png";
import image000 from "./picture/3.png";
import video from "./video/v1.mp4";
import m1 from "./picture/m1.jpg";
import m2 from "./picture/m6.jpg";
import m3 from "./picture/m3.jpg";
import m4 from "./picture/m12.jpg";
import m5 from "./picture/m5.jpg";
import m6 from "./picture/m11.jpg";
import m7 from "./picture/m7.jpg";
import m8 from "./picture/m8.jpg";
import m9 from "./picture/m9.jpg";
import m10 from "./picture/m10.jpg";
import { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Page2 = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [m3, m7, m2];

  const [imageIndex, setImageIndex] = useState(0);
  const images = [image0, image00, image000];

  const [scroll, setScroll] = useState(false);

  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Commander Yu Dayou works together with General Qi to train a special forces team and help them defeat a group of fearsome and ruthless Japanese pirates along the Chinese coastlines.",
    "Anya Taylor-Joy and Chris Hemsworth star in Academy Award-winning mastermind George Miller’s “Furiosa: A Mad Max Saga,” the much-anticipated films.",
    "The film opens with tension already in the air as the brothers, whose names are revealed to be Mark and John, move through the dense foliage, their senses on high alert.",
  ];

  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(backgroundInterval);
      clearInterval(imageInterval);
      clearInterval(textInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div>
      <div className="eg"></div>
      <div
        className="Sdiv0"
        style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
      >
        <div className={`Sdiv1 ${scroll ? "scroll-background" : ""}`}>
         
          <div className="Sdiv2">
          <img src={image3} alt="" className="Simage1" />
            <p className="Sp1">Home</p>
            <p className="Sp1">TV Show</p>
            <p className="Sp1">Movies</p>
            <p className="Sp1">Recently Added</p>
            <p className="Sp1">My List</p>
          </div>
          <div className="Sdiv3">
            <FaSearch className="Sp1-" />
            <p className="Sp1">Kids</p>
            <p className="Sp1">DVD</p>
            <FaBell className="Sp1-" />
            <img src={image2} alt="" className="Simage2" />
            <FaCaretDown className="Sp1-" />
          </div>
        </div>

        <div>
          <img src={images[imageIndex]} alt="" className="Simage3" />
          <p className="Sp2">{texts[textIndex]}</p>
          <div className="Sdiv4">
            <button className="Sbtn1">
              <FaPlay /> Play
            </button>
            <button className="Sbtn2">
              <CiCircleInfo /> More Info
            </button>
          </div>
        </div>

        <p className="Sp3">Popular on Netflix</p>
        <div className="Sdiv5">
          <div className="Sdiv6">
            <img src={m9} alt="" className="Simage4" />
          </div>
          <div className="Sdiv6">
            <img src={m10} alt="" className="Simage4" />
          </div>
          <div className="Sdiv6">
            <img src={m7} alt="" className="Simage4" />
          </div>
          <div className="Sdiv6">
            <img src={m3} alt="" className="Simage4" />
          </div>
          <div className="Sdiv6">
            <img src={m4} alt="" className="Simage4" />
          </div>
          <div className="Sdiv6">
            <img src={m6} alt="" className="Simage4" />
          </div>

          <div className="Sdiv6">
            <img src={m8} alt="" className="Simage4" />
          </div>

          <div className="Sdiv6">
            <img src={m1} alt="" className="Simage4" />
          </div>
          <div className="Sdiv6">
            <img src={m2} alt="" className="Simage4" />
          </div>

          <div className="Sdiv6">
            <img src={m5} alt="" className="Simage4" />
          </div>
        </div>
        <div className="Sdiv7">
          <p className="Sp4">Blockbuster Movie</p>
          <div className="Sdiv5">
            <div className="Sdiv6">
              <img src={m4} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              <img src={m5} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              <img src={m6} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              <img src={m1} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              <img src={m2} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              <img src={m3} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              <img src={m7} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              <img src={m8} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              <img src={m9} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              <img src={m10} alt="" className="Simage4" />
            </div>
          </div>
          <p className="Sp4">Only on Netflix</p>
          <div className="Sdiv55">
            <div className="Sdiv66">
              <img src={m6} alt="" className="Simage44" />
            </div>
            <div className="Sdiv66">
              <img src={m7} alt="" className="Simage44" />
            </div>
            <div className="Sdiv66">
              <img src={m8} alt="" className="Simage44" />
            </div>
            <div className="Sdiv66">
              <img src={m1} alt="" className="Simage44" />
            </div>
            <div className="Sdiv66">
              <img src={m2} alt="" className="Simage44" />
            </div>
            <div className="Sdiv66">
              <img src={m3} alt="" className="Simage44" />
            </div>
            <div className="Sdiv66">
              <img src={m4} alt="" className="Simage44" />
            </div>
            <div className="Sdiv66">
              <img src={m5} alt="" className="Simage44" />
            </div>
          </div>
          <p className="Sp4">Topic for you</p>
          <div className="Sdiv5">
            <div className="Sdiv6">
              {" "}
              <img src={m1} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m2} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m3} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m4} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m5} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m6} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m7} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m8} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m9} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m10} alt="" className="Simage4" />
            </div>
          </div>
          <p className="Sp4">Topic for you</p>
          <div className="Sdiv5">
            <div className="Sdiv6">
              {" "}
              <img src={m1} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m2} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m3} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m4} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m5} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m6} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m7} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m8} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m9} alt="" className="Simage4" />
            </div>
            <div className="Sdiv6">
              {" "}
              <img src={m10} alt="" className="Simage4" />
            </div>
          </div>

        
          
          <div className="Sdiv8">
          <p className="Sp10">
            <FaInstagram className="Sicon" />{" "}
            <FaFacebookSquare className="Sicon" />{" "}
            <FaYoutube className="Sicon" />{" "}
            <FaSquareTwitter className="Sicon" />
          </p>
          <div className="Sdiv9">
            <div>
              <p>Audio description</p>
              <p>Investor Relations</p>
              <p>Legal Notices</p>
              <p></p>
            </div>
            <div>
              <p>Help center</p>
              <p>Jobs</p>
              <p>Cookie perferences</p>
            </div>
            <div>
              <p>Gift cards</p>
              <p>Terms of use</p>
              <p>corporate Information</p>
            </div>
            <div>
              <p>Media Center</p>
              <p>privacy</p>
              <p>Contact us</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Page2;
