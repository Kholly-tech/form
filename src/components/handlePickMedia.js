export const handlePickMediaFiles = (files, setMedias) => {
  files.forEach((file) => {
    if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        setMedias((prevMedia) => [
          ...prevMedia,
          { url: readerEvent.target.result, type: file.type },
        ]);
      };
      reader.readAsDataURL(file);
    } else {
      setError(
        "Only JPEG, PNG, JPG, WEBP, GIF, MP4, MOV, MKV, WEBM are accepted"
      );
    }
  });
};
