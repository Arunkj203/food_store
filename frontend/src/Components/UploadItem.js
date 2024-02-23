import React, { useEffect, useState } from "react";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { collection, doc, getDocs, setDoc } from "firebase/firestore";

import { db, storage } from "../firebase";

import "./UploadItem.css";

function UploadItem() {
  const [imageUpload, setImageUpload] = useState(null);

  const [itemName, setItemName] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [itemURL, setItemURL] = useState("");
  const [itemImageName, setItemImageName] = useState("");
  const [desc, setDesc] = useState("");

  const [itemDetails, setItemDetails] = useState([]);

  const detailsCollectionsRef = collection(db, "items");

  useEffect(() => {
    const getDetails = async () => {
      const data = await getDocs(detailsCollectionsRef);
      setItemDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDetails();
  });

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setItemImageName(imageUpload.name);
          itemDetails.map((user) => {
            if (itemImageName === user.itemimage) {
              alert("Image already uploaded");
            }
          });
          setItemURL(url);
          alert("Image Uploaded");
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const createItem = async () => {
    const addItem = doc(db, "items", itemName);
    itemDetails.map((user) => {
      if (itemName === user.id) {
        alert("Item already exists");
      }
    });
    await setDoc(addItem, {
      itemname: itemName,
      itemprice: Number(itemPrice),
      imgURL: itemURL,
      itemimagename: imageUpload.name,
      desc: desc,
    });
  };
  return (
    <div className="crud-item">
      <h1>UPLOAD ITEM</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => {
          setItemName(event.target.value);
        }}
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        onChange={(event) => {
          setItemPrice(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        onChange={(event) => {
          setDesc(event.target.value);
        }}
      />
      <br />
      <input
        className="choose-image"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <br />
      <button className="upload-image" onClick={uploadImage}>
        Upload Image
      </button>
      <br />
      <br />
      <button className="upload-item" onClick={createItem}>
        Upload Item
      </button>
    </div>
  );
}

export default UploadItem;
