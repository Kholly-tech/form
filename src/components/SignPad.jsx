import React, { useRef, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignPad = ({ onSave }) => {
  const sigPad = useRef(null);

  const clear = () => {
    sigPad.current.clear();
  };

  const save = () => {
    if (!sigPad.current.isEmpty()) {
      const signatureData = sigPad.current.toDataURL();
      onSave(signatureData);
    }
  };

  return (
    <div className="w-full">
      <div className="border-2 border-gray-300 rounded-lg">
        <SignatureCanvas
          ref={sigPad}
          canvasProps={{
            className: "w-full h-[200px] bg-white rounded-lg"
          }}
          backgroundColor="white"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={clear}
          className="px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={save}
          className="px-3 py-2 bg-primary text-white rounded-lg hover:bg-opacity-80"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SignPad;
