import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Pagination,
    Navigation
} from 'swiper/core';

import ContectGreySection from "../contectGreySection/ContectGreySection";
import CircleIcon from "../newUserContent/styled-components/icon-wrapper";
import NewMusicPlayer from "../musicPlayer/newMusicPlayer";
import arrow from "../../assets/arrows.svg";
import discord from "../../assets/Discord.svg";
import telegram from "../../assets/Telegram.svg";
import openSea from "../../assets/Open Sea.svg";
import rarible from "../../assets/Rarible.svg";
import instagram from "../../assets/Instagram.svg";
import blackDiscord from "../../assets/BlackDiscord.svg";
import blackTelegram from "../../assets/BlackTelegram.svg";
import blackOpenSea from "../../assets/BlackOpen Sea.svg";
import blackRarible from "../../assets/BlackRarible.svg";
import blackInstagram from "../../assets/blackInstagram.svg";
import styled from "styled-components";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import './newUserSlider.scss';

SwiperCore.use([Pagination, Navigation]);

const SlideImgItem = styled.div`
    width: 158px;
    height: 158px;
    border: 2px solid transparent;

    img {
     width: 100%;
     height: 100%;
     object-fit: content;
    }

    // @media(max-width: 440px){
    //   width: 146px;
    //   height: 146px;
    // }
    //
    // @media(max-width: 360px){
    //   width: 140px;
    //   height: 140px;
    // }
`;

const SliderWrapp = styled.div`
    max-width: 342px;
    margin: 0 auto;
    margin-top: 16px; 
    // border: 1px solid #fff;
        
    @media (max-width: 370px) {
       margin: 16px 8px; 
    }
`;

const SocialMediaLinks = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SliderPrev = styled.div`
     width: 8px;
     height:14px;
     background-image: url(${arrow});
     // opacity:0.1;
     transform: rotate(180deg);
     position: absolute;
     left: calc(50% - 42px);
     z-index:10;
     cursor: pointer;
     bottom: -43px;
          
     @media (min-width: 1400px) {
       left: calc(50% - 62px);
       bottom: 3px;
     }
`;
const SliderNext = styled.div`
     width: 8px;
     height:14px;
     background-image: url(${arrow});
     // opacity:0.1;
     position: absolute;
     right: calc(50% - 42px);
     z-index:10;
     cursor: pointer;
     bottom: -43px;
     
     @media (min-width: 1400px) {
       right: calc(50% - 62px);
       bottom: 3px;
     }
`;

// const FeaturedContent = styled.div`
//     border: 1px solid transparent;
//     position: relative;
//     border-radius: 12px;
//     max-width: 351px;
//     margin: 0 auto;
//     div {
//       &.edited-text {
//         position: absolute;
//         width: 100%;
//         height: 211%;
//         left: 0px;
//         border-radius: 12px;
//         background-image: linear-gradient(rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%);
//         backdrop-filter: blur(4px);
//         color: #EAEAEA;
//         font-size: 24px;
//         font-weight: 400;
//         z-index: 1000;
//
//         ::after {
//         content: "Edit Featured Content";
//        }
//       }
//
//       &.edited-text-active {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//       }
//     }
// `;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const SliderWrapper = styled.div`
//      max-width: 1200px;
//      width: 100%;
//      margin: 0 auto;
//      height: fit-content;
//      overflow: hidden;
//      position: relative;
//      padding-top: 24px;
//      padding-bottom: 60px;
// `;

const Wrapp = styled.div`
  position: relative;
  

  div {
      &.edited-text {
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
        max-width: 342px;
        height: 100%;
        z-index: 100;
        margin-top: 8px;
        border-radius: 12px;
        background-image: linear-gradient(rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%);
        backdrop-filter: blur(4px);
        color: #EAEAEA;
        font-size: 24px;
        font-weight: 400;
        
        @media (min-width: 1200px) {
         width: 1090px;
         max-width: 1090px;
         height: 333px;
         top: 56px;
       }
       
       @media (min-width: 810px) and (max-width: 1200px) {
         width: 100%;
         max-width: 720px;
         height: 333px;
         top: 24px;
       }
       
       // @media (min-width: 375px) and (max-width: 768px) {
       //   width: 100%;
       //   max-width: 720px;
       //   height: 333px;
       //   top: 24px;
       // }
       
        ::after {
        content: "Edit Featured Content";
       }
       
      }

      &.edited-text-active {
        display: flex;
        justify-content: center;
        align-items: center;
      }  
    }
`;

const UserSlider = ({darkTheme, editedActive, setFeaturedContentModal}) => {
    const pagination = {
        "clickable": true,
        "renderBullet": (index, className) => {
            return '<span class=' + className + '> </span>';
        }
    }
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    // window.removeEventListener("resize", screenWidth)
    return (
        <Wrapp>
            <div className={`${editedActive}`} onClick={() => setFeaturedContentModal(true)}/>
            <div className='desktop-swiper' style={{pointerEvents: editedActive && 'none'}}>
                <Swiper
                    slidesPerColumn={2}
                    loop={false}
                    slidesPerColumnFill={"row"}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    pagination={pagination}
                    className="userSwiper"
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current
                            swiper.params.navigation.nextEl = navigationNextRef.current
                            swiper.navigation.destroy()
                            swiper.navigation.init()
                            swiper.navigation.update()
                        })
                    }}
                    breakpoints={{
                        "720": {
                            "slidesPerView": 1,
                            "slidesPerColumn": 2,
                            "slidesPerColumnFill": "row",
                            "loop": false
                        },
                        "810": {
                            "slidesPerView": 2,
                            "slidesPerColumn": 2,
                            "slidesPerColumnFill": "row",
                            "loop": false
                        },
                        "1200": {
                            "slidesPerView": 3,
                            "slidesPerColumn": 2,
                            "slidesPerColumnFill": "row",
                            "loop": false
                        }
                    }}
                >
                    <SliderPrev ref={navigationPrevRef}/>
                    <SwiperSlide key={1}>
                        <SliderWrapp>
                                <ContectGreySection content='My latest movie “Beautiful Blue Eyes”'
                                                    styles={`${darkTheme && 'light'}`}/>
                                <ContectGreySection
                                    styles={`${darkTheme && 'light'}`}
                                    content={<>My special merch for <span className='nft'>NFT</span> holders!</>}
                                />

                                <SocialMediaLinks>
                                    <CircleIcon imgUrl={darkTheme ? blackDiscord : discord} alt={"icon"}
                                                className={`${darkTheme && 'light'} social-media`}/>
                                    <CircleIcon imgUrl={darkTheme ? blackTelegram : telegram} alt={"icon"}
                                                className={`${darkTheme && 'light'} social-media`}/>
                                    <CircleIcon imgUrl={darkTheme ? blackOpenSea : openSea} alt={"icon"}
                                                className={`${darkTheme && 'light'} social-media`}/>
                                    <CircleIcon imgUrl={darkTheme ? blackRarible : rarible} alt={"icon"}
                                                className={`${darkTheme && 'light'} social-media`}/>
                                    <CircleIcon imgUrl={darkTheme ? blackInstagram : instagram} alt={"icon"}
                                                className={`${darkTheme && 'light'} social-media`}/>
                                </SocialMediaLinks>
                        </SliderWrapp>
                    </SwiperSlide>
                    <SwiperSlide key={2}>
                        <SliderWrapp>
                            <Row>
                                <SlideImgItem>
                                    <img src={cat1} alt=""/>
                                </SlideImgItem>
                                <SlideImgItem>
                                    <img src={cat2} alt=""/>
                                </SlideImgItem>
                            </Row>
                        </SliderWrapp>
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                        <SliderWrapp>
                            <NewMusicPlayer/>
                        </SliderWrapp>
                    </SwiperSlide>
                    <SwiperSlide key={4}>
                        <SliderWrapp>
                            <Row>
                                <SlideImgItem>
                                    <img src={cat1} alt=""/>
                                </SlideImgItem>
                                <SlideImgItem>
                                    <img src={cat2} alt=""/>
                                </SlideImgItem>
                            </Row>
                        </SliderWrapp>
                    </SwiperSlide>
                    <SwiperSlide key={5}>
                        <SliderWrapp>
                            <NewMusicPlayer/>
                        </SliderWrapp>
                    </SwiperSlide>
                    <SwiperSlide key={6}>
                        <SliderWrapp>
                            <Row>
                                <SlideImgItem>
                                    <img src={cat1} alt=""/>
                                </SlideImgItem>
                                <SlideImgItem>
                                    <img src={cat2} alt=""/>
                                </SlideImgItem>
                            </Row>
                        </SliderWrapp>
                    </SwiperSlide>
                    <SliderNext ref={navigationNextRef}/>
                </Swiper>
            </div>


        </Wrapp>
    )
}

export default UserSlider;