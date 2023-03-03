import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit, student }) => {
  const [studentName, setStudentName] = useState(student);

  return(
    <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-40 ${isOpen ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center w-11/12 p-8 text-center bg-white border rounded-lg shadow-lg md:max-w-md">
        <div className="relative w-full h-full">
          <span className="absolute top-0 right-0 cursor-pointer hover:text-red-700" onClick={onClose}>&times;</span>
          <h1 className="mb-2 text-xl">Student Name</h1>
          <form onSubmit={onSubmit}>
            <input
              name="studentName"
              type="text"
              value={studentName}
              className="w-full p-2 mb-4 bg-gray-100 border-2 rounded-lg"
              onChange={event => setStudentName(event.target.value)}
            />
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
