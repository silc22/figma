import React, { useRef } from "react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddBoxIcon from '@mui/icons-material/AddBox';


function Carousel(){

    const reference = useRef(null)

    const content = [
        {tittle: "Mirabelli Loft a Milano ",
        subtittle: "Da chiudere entro il 17 set 2021",
        nameButton: "Mario Palladino",
        tag1: "tag",
        tag2: "tag",
        text: "8 boards, 2 preventivi nel progetto"},
        {tittle: "La nuova casa a Napoli",
        subtittle: "Da chiudere entro il 25 agosto 2021",
        nameButton: "Jhon Mirabelli",
        tag1: "Vip",
        tag2: "tag",
        text: "Il progetto è vuoto",
        projects: [
            {text1: "Living scandinavo",
            text2: "32 proposte",
            img1: require("../assets/products/image-1.png"),
            img2: require("../assets/products/image-2.png"),
            img3: require("../assets/products/image-3.png"),
            },
            {text1: "Kitchen mediterranea",
            text2: "12 proposte",
            img1: require("../assets/products/image-4.png"),
            img2: require("../assets/products/image-5.png"),
            img3: require("../assets/products/image-6.png"),
            },
            {text1: "Terrazzo",
            text2: "7 proposte",
            img1: require("../assets/products/image-7.png"),
            img2: require("../assets/products/image-8.png"),
            img3: require("../assets/products/image-9.png"),
            }]},
        {tittle: "Appartamento a Modena",
        subtittle: "Da chiudere entro il 25 agosto 2021",
        nameButton: "Ivy Levan",
        tag1: "tag",
        tag2: "tag",
        text: "12 boards, 4 preventivi nel progetto",
        projects: [
            {text1: "Living scandinavo",
            text2: "32 proposte",
            img1: require("../assets/products/image-1.png"),
            img2: require("../assets/products/image-2.png"),
            img3: require("../assets/products/image-3.png"),
            },
            {text1: "Kitchen mediterranea",
            text2: "12 proposte",
            img1: require("../assets/products/image-4.png"),
            img2: require("../assets/products/image-5.png"),
            img3: require("../assets/products/image-6.png"),
            },
            {text1: "Terrazzo",
            text2: "7 proposte",
            img1: require("../assets/products/image-7.png"),
            img2: require("../assets/products/image-8.png"),
            img3: require("../assets/products/image-9.png"),
            }]},
            {tittle: "Mirabelli Loft a Milano ",
            subtittle: "Da chiudere entro il 17 set 2021",
            nameButton: "Mario Palladino",
            tag1: "tag",
            tag2: "tag",
            text: "8 boards, 2 preventivi nel progetto"},
            {tittle: "La nuova casa a Napoli",
            subtittle: "Da chiudere entro il 25 agosto 2021",
            nameButton: "Jhon Mirabelli",
            tag1: "Vip",
            tag2: "tag",
            text: "Il progetto è vuoto",
            projects: [
                {text1: "Living scandinavo",
                text2: "32 proposte",
                img1: require("../assets/products/image-1.png"),
                img2: require("../assets/products/image-2.png"),
                img3: require("../assets/products/image-3.png"),
                },
                {text1: "Kitchen mediterranea",
                text2: "12 proposte",
                img1: require("../assets/products/image-4.png"),
                img2: require("../assets/products/image-5.png"),
                img3: require("../assets/products/image-6.png"),
                },
                {text1: "Terrazzo",
                text2: "7 proposte",
                img1: require("../assets/products/image-7.png"),
                img2: require("../assets/products/image-8.png"),
                img3: require("../assets/products/image-9.png"),
                }]},
            {tittle: "Appartamento a Modena",
            subtittle: "Da chiudere entro il 25 agosto 2021",
            nameButton: "Ivy Levan",
            tag1: "tag",
            tag2: "tag",
            text: "12 boards, 4 preventivi nel progetto",
            projects: [
                {text1: "Living scandinavo",
                text2: "32 proposte",
                img1: require("../assets/products/image-1.png"),
                img2: require("../assets/products/image-2.png"),
                img3: require("../assets/products/image-3.png"),
                },
                {text1: "Kitchen mediterranea",
                text2: "12 proposte",
                img1: require("../assets/products/image-4.png"),
                img2: require("../assets/products/image-5.png"),
                img3: require("../assets/products/image-6.png"),
                },
                {text1: "Terrazzo",
                text2: "7 proposte",
                img1: require("../assets/products/image-7.png"),
                img2: require("../assets/products/image-8.png"),
                img3: require("../assets/products/image-9.png"),
                }]},
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 900
      };

    return(
       <>
       <div className='content-carousel-principal'>
           <div className="content-carousel-top">
                <p>I miei ultimi Progetti</p>
                <div className='arrow-conteiner'>
                    <div onClick={()=>reference.current.slickNext()}>
                        <ArrowBackIcon />
                    </div>
                    <div onClick={()=>reference.current.slickPrev()}>
                    <ArrowForwardIcon />
                    </div>
                </div>
          </div>
          <div className="content-carousel-bottom">
          <div className='newproject'>
                <AddBoxIcon/>
                <p>Nuovo progetto</p>
            </div>
          <div className="slider__content">
            <div className="slider">
            <Slider {...settings} ref={reference}>
                    {content?.map((element, index)=>
                    <div className='project' key={index}>
                        <div className="project-content-top">
                            <div className='card-text'>
                                <p className='text-tittle'>
                                    {element.tittle}
                                </p>
                                <p className='card-subtittle'>
                                    {element.subtittle}  
                                </p>
                            </div>
                            <div className='card-button'>
                                <p className='name'>
                                {element.nameButton} 
                                </p>
                                <p className={element.tag1.startsWith('V') ? "vip" : "tag"}>
                                {element.tag1} 
                                </p>
                                <p  className='tag'>
                                {element.tag2} 
                                </p>
                            </div>
                        </div>
                        <div className="project-content-bottom">
                            
                        </div>
                    </div>)}
            </Slider>
            </div>
            </div>
          </div>
        </div>
       </>
    )
}

export default Carousel