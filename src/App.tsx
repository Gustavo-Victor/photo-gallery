import { useState, useEffect, FormEvent } from "react";
import { getAll, insert } from "./services/photos";
import { Photo } from "./types/photo";
import PhotoItem from "./components/PhotoItem";
import { Area, Container, Header,
   PhotoList, ScreenWarning, UploadForm } 
from "./App.styles";

export default function App() {  
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [sending, setSending] = useState(false);  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const formData = new FormData(e.currentTarget); 
    const file = formData.get('image') as File; 
    
    if(file && file.size > 0) {
      setSending(true); 
      const result = await insert(file); 
      setSending(false); 
    
      if(result instanceof Error) {
        alert(`${result.name}: ${result.message}`); 
      } else {
        const photoListCopy = [...photos]; 
        photoListCopy.push(result); 
        setPhotos(photoListCopy); 
      }
    }
  }

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true); 
      setPhotos(await getAll()); 
      setLoading(false); 
    }
    getPhotos(); 
  }, []); 

  return (
    <Container>  
      <Area>
        <Header>Galeria de Fotos</Header>
      
        {/*parte de upload*/}
        <UploadForm method="POST" onSubmit={handleSubmit} encType="multipart/form-data" >
          <input type="file" name="image" id="image-upload" required disabled={sending} />
          <input type="submit" name="submit" id="submit" disabled={sending} value={sending ? "Enviando..." : "Enviar"} />
        </UploadForm>

        {/*lista de fotos*/}
        {loading &&  
          (<ScreenWarning>
            <div className="emoji">✋</div>
            <div className="loading-message">Carregando...</div>
          </ScreenWarning>)
        }

        {!loading && photos.length > 0 && 
          <PhotoList>
            {photos.map((photo, index) => (
              <PhotoItem key={index} {...photo} />
            ))}
          </PhotoList>
        }
        
        {!loading && photos.length == 0 && 
          <ScreenWarning>
            <div className="emoji">😞</div>
            <div className="loading-message">Não há fotos cadastradas :(</div>
          </ScreenWarning>
        }

      </Area>
    </Container>
  )
}
