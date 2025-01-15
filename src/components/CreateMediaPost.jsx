import { InlineIcon } from "@iconify/react/dist/iconify.js";
import React, { useRef, useState } from "react";
import { handlePickMediaFiles } from "./handlePickMedia";

const CreateMediaPost = ({ media, setMedia }) => {
  const [isDragging, setIsDragging] = useState(false);
  const mediaInputRef = useRef(null);

  const handleMediaUpload = (e) => {
    let files = Array.from(e.target.files);
    handlePickMediaFiles(files, setMedia);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    let files = Array.from(e.dataTransfer.files);
    handlePickMediaFiles(files, setMedia);
  };

  // Function to remove a media item
  const handleRemoveMedia = (index) => {
    setMedia((prevMedia) => prevMedia.filter((_, i) => i !== index));
  };

  return (
    <div
      className={` w-full h-full rounded-[10px] overflow-hidden ${
        isDragging ? "border border-dashed border-blue-500" : ""
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {media.length < 1 ? (
        <div
          onClick={() => mediaInputRef.current.click()}
          className="w-full h-full p-6 bg-[#444343] border border-dotted flex flex-col items-center justify-center gap-3"
        >
          <InlineIcon
            className="text-[30px] text-slate-300"
            icon="ic:baseline-perm-media"
          />
          <div className="w-[300px] max-w-full cursor-pointer">
            <div className="text-[15px] text-center text-slate-300">
              Drag & drop <span className="text-secondary"> images,video</span>{" "}
              or any <span className="">audio</span> or{" "}
              <span className="text-secondary"> browse files</span> on your
              computer
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-fill h-full">
          <div className="w-full h-full overflow-x-auto scrollbar  ">
            <div className="flex gap-4 items-center justify-center w-max h-full mx-auto">
              {media.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-[10px] h-full overflow-hidden"
                >
                  {item?.type.startsWith("image/") ? (
                    <img
                      src={item?.url}
                      alt="media preview"
                      className="h-full object-contain"
                    />
                  ) : ('')}
                  <button
                    onClick={() => handleRemoveMedia(index)}
                    className="absolute top-2 right-2 w-[30px] h-[30px] p-1 rounded-[8px] bg-slate-200 flex items-center justify-center"
                  >
                    <InlineIcon
                      icon="material-symbols:close"
                      className="text-slate-500"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => mediaInputRef.current.click()}
            className="w-[40px] h-[40px] opacity-45 cursor-pointer absolute bottom-5 right-2 bg-slate-500 rounded-full flex items-center justify-center"
          >
            <InlineIcon
              icon="mdi-light:plus"
              className="text-[20px] text-white"
            />
          </div>
        </div>
      )}
      <input
        type="file"
        multiple
        accept="image/jpeg,image/png,image/gif,image/jpg,video/mp4,video/mov,video/mpeg,video/mkv, video/webm"
        hidden
        ref={mediaInputRef}
        onChange={handleMediaUpload}
      />
    </div>
  );
};

export default CreateMediaPost;
