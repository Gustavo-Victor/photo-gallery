import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { Photo } from "../types/photo"; 
import { v4 as createId } from "uuid";

export const getAll = async () => {
    const list: Photo[] = []; 
    const imagesFolder = ref(storage, "images"); 
    const photoList = await listAll(imagesFolder); 

    for(const item in photoList.items) {
        const photoURL = await getDownloadURL(photoList.items[item]); 
        list.push({
            name: photoList.items[item].name, 
            url: photoURL
        }); 
    }
    
    return list; 
}

export const insert = async (fileData: File) => {
    if(["image/jpeg", "image/jpg", "image/png"].includes(fileData.type)) {
        const randomName = createId(); 
        const newFile = ref(storage, `images/${randomName}`); 
        const upload = await uploadBytes(newFile, fileData); 
        const photoURL = await getDownloadURL(upload.ref); 

        return {name: upload.ref.name, url: photoURL} as Photo; 
    } else {
        return new Error("Type not allowed.\nOnly the following types are accepted: .jpg, .jpeg or .png"); 
    }
}

export const remove = (id: string) => {
    const desertRef = ref(storage, `images/${id}`); 
    return deleteObject(desertRef); 
    
}