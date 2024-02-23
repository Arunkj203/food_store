import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { db, storage } from "../firebase";

function UpdateItem() {
  const [imageUpload, setImageUpload] = useState();

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [imageUrl, setImageURL] = useState();
  const [imgname, setImageName] = useState();

  const UpdatePrice = async () => {
    await updateDoc(doc(db, "items", name), { itemprice: price });
  };
  const UpdatePhoto = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageName(imageUpload.name);
        setImageURL(url);
        alert("Image Uploaded");
      });
    });
  };

  const UploadImage = async () => {
    await updateDoc(doc(db, "items", name), {
      imgURL: imageUrl,
      itemimagename: imgname,
    });
  };
  return (
    <div className="crud-item">
      <h1>UPDATE ITEM</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <br />

      <button onClick={UpdatePrice}>Update Price</button>
      <br />
      <input
        type="file"
        className="choose-image"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <br />
      <button onClick={UpdatePhoto}>Upload Image</button>
      <br />
      <br />
      <button onClick={UploadImage}>Update Photo</button>
    </div>
  );
}

export default UpdateItem;
