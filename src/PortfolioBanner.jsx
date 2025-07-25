import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WelcomeSound from "./WelcomeSound"; // Adjust path as needed

const PortfolioBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3500); // Preloader duration: 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const sliderItems = [
    {
      position: 1,
      image: "/images/dragon_1.jpg",
      alt: "Dragon illustration 1",
    },
    {
      position: 2,
      image: "/images/dragon_2.jpg",
      alt: "Dragon illustration 2",
    },
    {
      position: 3,
      image: "/images/dragon_3.jpg",
      alt: "Dragon illustration 3",
    },
    {
      position: 4,
      image: "/images/dragon_4.jpg",
      alt: "Dragon illustration 4",
    },
    {
      position: 5,
      image: "/images/dragon_5.jpg",
      alt: "Dragon illustration 5",
    },
    {
      position: 6,
      image: "/images/dragon_6.jpg",
      alt: "Dragon illustration 6",
    },
    {
      position: 7,
      image: "/images/dragon_7.jpg",
      alt: "Dragon illustration 7",
    },
    {
      position: 8,
      image: "/images/dragon_8.jpg",
      alt: "Dragon illustration 8",
    },
    {
      position: 9,
      image: "/images/dragon_9.jpg",
      alt: "Dragon illustration 9",
    },
    {
      position: 10,
      image: "/images/dragon_10.jpg",
      alt: "Dragon illustration 10",
    },
  ];

  return (
    <div className={`banner ${isLoaded ? "loaded" : ""}`}>
      <style>
        {`
          @import url("https://fonts.cdnfonts.com/css/ica-rubrik-black");
          @import url("https://fonts.cdnfonts.com/css/poppins");

          .banner {
            width: 100%;
            height: 100vh;
            text-align: center;
            overflow: hidden;
            position: relative;
            background: linear-gradient(to bottom, rgba(37,40,59,0.1) 0%, rgba(210,210,210,0.2) 100%);
          }

          .banner .preloader {
            position: absolute;
            inset: 0;
            background: #d2d2d2;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 1.2s ease-in-out, visibility 1.2s ease-in-out;
            opacity: 1;
            visibility: visible;
          }

          .banner.loaded .preloader {
            opacity: 0;
            visibility: hidden;
          }

          .banner .preloader h1 {
            font-family: Poppins, sans-serif;
            font-size: clamp(2em, 8vw, 5em);
            color: #25283b;
            animation: text-focus-in 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }
          
          @keyframes text-focus-in {
            0% { filter: blur(8px); opacity: 0; }
            100% { filter: blur(0px); opacity: 1; }
          }
          
          .banner .slider,
          .banner .content {
            opacity: 0;
            transition: opacity 1.5s ease-in 0.8s;
          }
          
          .banner.loaded .slider,
          .banner.loaded .content {
            opacity: 1;
          }

          .banner .slider {
            position: absolute;
            width: clamp(120px, 18vw, 220px);
            height: clamp(160px, 24vw, 280px);
            top: 15%;
            left: 50%;
            transform-style: preserve-3d;
            animation: autoRun 30s linear infinite;
            z-index: 2;
          }

          .banner.loaded .slider {
             animation-play-state: running;
          }

          .banner .slider:hover {
            animation-play-state: paused;
          }

          @keyframes autoRun {
            from { transform: translateX(-50%) perspective(1200px) rotateY(0deg); }
            to { transform: translateX(-50%) perspective(1200px) rotateY(360deg); }
          }
          
          .banner .slider .item {
            position: absolute;
            inset: 0;
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(clamp(200px, 45vw, 580px));
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            backface-visibility: hidden;
          }

          .banner .slider .item:hover {
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(clamp(210px, 46vw, 600px)) scale(1.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }

          .banner .slider .item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
          
          .banner .content {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: min(1400px, 95vw);
            padding-bottom: clamp(40px, 10vh, 120px);
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            z-index: 1;
            gap: 2rem;
          }
          
          .banner .content .author {
            font-family: Poppins, sans-serif;
            text-align: right;
            max-width: 240px;
            z-index: 3;
            flex-grow: 1;
          }

          .banner .content .author h2 {
            font-size: clamp(2.5em, 5vw, 3.2em);
            margin-bottom: 0.5rem;
          }

          .banner .content .author .view-portfolio {
            margin-top: 1.5rem;
            display: inline-block;
            background-color: #25283b;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(37,40,59,0.2);
          }

          .banner .content .author .view-portfolio:hover {
            background-color: #d2d2d2;
            color: #25283b;
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 6px 20px rgba(210,210,210,0.4);
          }
          
          .banner .content .model {
            background-image: url(/images/Batman.png);
            width: 100%;
            height: 80vh;
            position: absolute;
            bottom: 0;
            left: 0;
            background-size: auto clamp(100%, 120vw, 140%);
            background-repeat: no-repeat;
            background-position: top center;
            z-index: 1;
            filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
          }

          @media screen and (max-width: 1023px) {
            .banner .content {
              justify-content: center;
              padding-bottom: 8vh;
            }
            .banner .content .author {
              color: #fff;
              padding: 24px;
              text-shadow: 0 8px 20px #000;
              max-width: 500px;
              width: 100%;
              text-align: center;
              order: 2;
            }
            .banner .content .model {
              order: 1;
            }
          }
        `}
      </style>
      <WelcomeSound isLoaded={isLoaded} /> {/* Add this line */}
      <div className="preloader" aria-hidden={isLoaded}>
        <h1>Welcome to my Portfolio</h1>
      </div>
      <div className="slider" role="region" aria-label="3D Image Carousel">
        {sliderItems.map((item) => (
          <div
            key={item.position}
            className="item"
            style={{
              "--position": item.position,
              "--quantity": sliderItems.length,
            }}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/220x280/d2d2d2/25283b?text=Image";
              }}
            />
          </div>
        ))}
      </div>
      <div className="content">
        <div className="author">
          <h2>PRANAY MESHRAM</h2>

          <Link
            to="/portfolio"
            className="view-portfolio"
            aria-label="View the main portfolio"
          >
            View Portfolio
          </Link>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
