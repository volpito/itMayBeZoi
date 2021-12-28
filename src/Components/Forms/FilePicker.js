import React, { useState } from "react";

export default function FilePicker(props) {
  const [images, setImages] = useState(props.images || []);

  const onImageChange = (evt) => {
    setImages([]);
    
    if (evt.target.files && evt.target.files.length > 0) {

      Object.keys(evt.target.files).forEach((index) => {

        const file = evt.target.files[index];

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = (e) => {
          setImages(images => [...images, reader.result]);
        };
      });
    }
  };

  return (
    <div className={props?.className}>
      {images.length > 0 && images.map((image) => (
        <img src={image} key={image} className="w-full h-auto mb-2"  />
      ))}
      <label
        htmlFor={props?.name}
        className={`flex items-center justify-center w-full py-2 px-6 bg-blue-400 rounded text-base text-white font-medium mb-6 ${props?.className}`}
        style={props?.style}
      >
        {images.length > 0 ? "Update your cover" : "Upload a cover" || props?.label }
      </label>
      <input
        type="file"
        id={props?.name}
        name={props?.name}
        multiple={props?.multiple || false}
        className="opacity-0 absolute -z-1 hidden"
        onChange={onImageChange}
        accept={props?.accept}
        required={props?.required}
      />
    </div>
  );
}
