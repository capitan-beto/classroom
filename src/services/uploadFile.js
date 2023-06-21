import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { writeData } from './writeData';

export const uploadFile = async (file, fileData) => {
    const storage = getStorage();
    const addFile = ref(storage, `files/${fileData.subject}/${file.name}`);
    await uploadBytes(addFile, file)
    getDownloadURL(addFile).then(url => {
        writeData(fileData.title, fileData.desc, fileData.subject, url);
    })
}
