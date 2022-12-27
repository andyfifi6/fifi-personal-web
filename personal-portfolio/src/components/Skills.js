import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import colorSharp from "../assets/img/color-sharp.png"
import java from "../assets/img/java.svg";
import python from "../assets/img/python.svg";
import js from "../assets/img/js.svg";
import rt from "../assets/img/ract.svg";
import node from "../assets/img/node.svg";
import mongo from "../assets/img/mongo.svg";
import sql from "../assets/img/sql.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Technical Skills</h2>
                            <p>Here I list few languages, frameworks and Tools, <br></br> please checkout my Github for more information.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={java} alt="Image" />
                                    <h5>Java</h5>
                                </div>

                                <div className="item">
                                    <img src={python} alt="Image" />
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <img src={js} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>

                                <div className="item">
                                    <img src={rt} alt="Image" />
                                    <h5>React</h5>
                                </div>

                                <div className="item">
                                    <img src={node} alt="Image" />
                                    <h5>Node.js</h5>
                                </div>

                                <div className="item">
                                    <img src={sql} alt="Image" />
                                    <h5>SQL</h5>
                                </div>

                                <div className="item">
                                    <img src={mongo} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}