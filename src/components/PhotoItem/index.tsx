import { Container } from "./styles"; 
import { Photo } from "../../types/photo";

export default function PhotoItem({name, url} : Photo) {
    return (
        <Container>
            <a target="_blank" href={url}>
                <img src={url} alt={name} />
                <span>{name}</span>
            </a>
        </Container>
    )
}