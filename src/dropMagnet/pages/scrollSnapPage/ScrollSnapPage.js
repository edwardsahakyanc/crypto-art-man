import React, {useEffect, useRef, useState} from "react";
import "./ScrollSnapPage.scss";
import NewUserContent from "../../components/newUserContent/newUserContent";
import Gallery from "../../components/gallery/gallery";
import galleryImage from "../../assets/gallery.png";
import HoveredCard from "../../components/3dCard/3dCard";
import Three from "../../components/threeJs/threeJs";
import VideoPlayer from "../../components/videoPlayer/videoPlayer";
import Portrait from "../../components/portrait/portrait";
import Landscape from "../../components/landscape/landscape";


const ScrollSnapPage = ({darkTheme,changeSlide, data}) => {
    // console.log(data);
    const galleryRef = useRef(null);
    const coverPageRef = useRef(null);
    const firstSlide = {id: 1, imgUrl: galleryImage, backgroundColor: "#292929", price: "100"};
    const [filteredData, setFilteredData] = useState([]);

    // useEffect(() => {
    //
    // },[data])
    // console.log(data)

    const slideItems = [
        {
            id: 1,
            content: <section ref={coverPageRef}><NewUserContent galleryRef={galleryRef} coverPageRef={coverPageRef} darkTheme={darkTheme} changeSlide={changeSlide}/></section>
        },
        {
            id: 2,
            content: <section ref={galleryRef}><Gallery {...firstSlide}/></section>
        },
        {
            id: 3,
            content: <section><HoveredCard/></section>
        },
        {
            id: 4,
            content: <section><Three/></section>
        },
        {
            id: 5,
            content: <section><VideoPlayer/></section>
        },
        {
            id: 6,
            content: <section><Portrait/></section>
        },
        {
            id: 7,
            content: <section><Landscape/></section>
        }
    ];

    useEffect(() => {
        const sortOrder = data.map(e => +e.id);
        const sortedArr = [];
        if (sortOrder.length) {
            sortedArr.push(slideItems[0])
        }
        sortOrder.forEach(e => {
            const idx = slideItems.findIndex(el => e === el.id);
            sortedArr.push(slideItems[idx])
        })
        setFilteredData(sortedArr.length ? sortedArr : slideItems);
        // console.log(sortedArr);

    },[data])
    return (
        <article className="scroller">
            {
                filteredData.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            {item.content}
                        </React.Fragment>
                    )
                })
            }
        </article>
    )
}

export default ScrollSnapPage