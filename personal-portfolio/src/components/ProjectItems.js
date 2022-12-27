import {Container} from "react-bootstrap";

export const ProjectItems = ({title, description, imgUrl}) => {
    return(
        <Container className="col-12 col-sm-6">
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Container>
    )
}