import { Container, Content, Buttons } from "./styles"; 
import { PhotoItemProps } from "../../types/photo";

export default function PhotoItem({name, url, handleClick} : PhotoItemProps) {

    return (
        <Container>
            <Content>
                <img src={url} alt={name} />
                <span>{name}</span>
            </Content>
            <Buttons>
                <a 
                href={url}
                download={url}
                target="_blank">Download</a>

                <button 
                onClick={() => handleClick(name)}
                className="delete">
                    Delete
                </button>
            </Buttons>
        </Container>
    )
}