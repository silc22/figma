import React, { useRef } from "react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Add from '@mui/icons-material/Add';
import img1 from "../../src/assets/products/image-1.png"
import img2 from "../../src/assets/products/image-2.png"
import img3 from "../../src/assets/products/image-3.png"
import img4 from "../../src/assets/products/image-4.png"
import img5 from "../../src/assets/products/image-5.png"
import img6 from "../../src/assets/products/image-6.png"
import img7 from "../../src/assets/products/image-7.png"
import img8 from "../../src/assets/products/image-8.png"
import img9 from "../../src/assets/products/image-9.png"

function Carousel(){

    const reference = useRef(null)


    const content = [
        {tittle: "Mirabelli Loft a Milano ",
        subtittle: "Da chiudere entro il 17 set 2021",
        nameButton: "Mario Palladino",
        tag1: "tag",
        tag2: "tag",
        text: "8 boards, 2 preventivi nel progetto",
        tittleCard1: "Living scandinavo",
        proposte1: "32 proposte",
        img1: img1,
        img2: img2,
        img3: img3,
        tittleCard2: "Kitchen mediterranea",
        proposte2: "12 proposte",
        img4: img4,
        img5: img5,
        img6: img6,
        tittleCard3: "Terrazzo",
        proposte3: "7 proposte",
        img7: img7,
        img8: img8,
        img9: img9},

        {tittle: "La nuova casa a Napoli",
        subtittle: "Da chiudere entro il 25 agosto 2021",
        nameButton: "Jhon Mirabelli",
        tag1: "Vip",
        tag2: "tag",
        text: "Il progetto è vuoto",
        
        },

        {tittle: "Appartamento a Modena",
            subtittle: "Da chiudere entro il 25 agosto 2021",
            nameButton: "Ivy Levan",
            tag1: "tag",
            tag2: "tag",
            text: "8 boards, 2 preventivi nel progetto",
            tittleCard1: "Living scandinavo",
            proposte1: "32 proposte",
            img1: img1,
            img2: img2,
            img3: img3,
            tittleCard2: "Kitchen mediterranea",
            proposte2: "12 proposte",
            img4: img4,
            img5: img5,
            img6: img6,
            tittleCard3: "Terrazzo",
            proposte3: "7 proposte",
            img7: img7,
            img8: img8,
            img9: img9
        },
        {tittle: "Mirabelli Loft a Milano ",
        subtittle: "Da chiudere entro il 17 set 2021",
        nameButton: "Mario Palladino",
        tag1: "tag",
        tag2: "tag",
        text: "8 boards, 2 preventivi nel progetto",
        tittleCard1: "Living scandinavo",
        proposte1: "32 proposte",
        img1: img1,
        img2: img2,
        img3: img3,
        tittleCard2: "Kitchen mediterranea",
        proposte2: "12 proposte",
        img4: img4,
        img5: img5,
        img6: img6,
        tittleCard3: "Terrazzo",
        proposte3: "7 proposte",
        img7: img7,
        img8: img8,
        img9: img9},

        {tittle: "La nuova casa a Napoli",
        subtittle: "Da chiudere entro il 25 agosto 2021",
        nameButton: "Jhon Mirabelli",
        tag1: "Vip",
        tag2: "tag",
        text: "Il progetto è vuoto",
        
        },

        {tittle: "Appartamento a Modena",
            subtittle: "Da chiudere entro il 25 agosto 2021",
            nameButton: "Ivy Levan",
            tag1: "tag",
            tag2: "tag",
            text: "8 boards, 2 preventivi nel progetto",
            tittleCard1: "Living scandinavo",
            proposte1: "32 proposte",
            img1: img1,
            img2: img2,
            img3: img3,
            tittleCard2: "Kitchen mediterranea",
            proposte2: "12 proposte",
            img4: img4,
            img5: img5,
            img6: img6,
            tittleCard3: "Terrazzo",
            proposte3: "7 proposte",
            img7: img7,
            img8: img8,
            img9: img9
        },
        ]
        

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        initialSlide: 0,
        rtl: true
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
                <Add/>
                <p>Nuovo progetto</p>
            </div>
            <div className="slider__content">
            <div className="slider">
            <Slider {...settings} ref={reference}>
                    {content?.map((element, index)=>
                    <div className='project' key={index} >
                        <div className="project-content-top">
                            <div className='card-text'>
                                <p className='card-text-tittle-content'>
                                    {element.tittle}
                                </p>
                                <p className='card-text-subtittle'>
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
                            <div className="project-content-tittle">
                                <p className={element.tittleCard1? "" : "project-content-empty"}>{element.text}</p>    
                            </div> 
                            <div className="project-content-cards">
                                {
                                   element.tittleCard1?
                                   <>
                                    <div className="cards">
                                        <div className="cards-text">
                                            <p className="card-text-tittle">{element.tittleCard1}</p>
                                            <p className="card-text-info">{element.proposte1}</p>
                                        </div>
                                        <div className="cards-img">
                                            <img src={element.img1} alt="product"></img>
                                            <img src={element.img2} alt="product"></img>
                                            <img src={element.img3} alt="product" ></img>
                                        </div>
                                    </div>
                                    <div className="cards">
                                        <div className="cards-text">
                                        <p className="card-text-tittle">{element.tittleCard2}</p>
                                        <p className="card-text-info">{element.proposte2}</p>
                                        </div>
                                        <div className="cards-img">
                                        <img src={element.img4} alt="product"></img>
                                        <img src={element.img5} alt="product"></img>
                                        <img src={element.img6} alt="product"></img>
                                        </div>
                                    </div>
                                    <div className="cards">
                                        <div className="cards-text">
                                        <p className="card-text-tittle">{element.tittleCard3}</p>
                                        <p className="card-text-info">{element.proposte3}</p>
                                        </div>
                                        <div className="cards-img">
                                        <img src={element.img7} alt="product"></img>
                                        <img src={element.img8} alt="product"></img>
                                        <img src={element.img9} alt="product"></img>
                                        </div>
                                    </div>
                                   </> 
                                    :
                                    <div className='card-empty'>
                                        <Add/>
                                        <p>Crea Board</p>
                                    </div>
                                }
                            </div>         
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