import React, { useState } from 'react'

import Modal from './Modal';
import { useFetchStudents, useCreateStudents } from './hooks/useStudentsApi';

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading, data: {data: students} = {} } = useFetchStudents();
  const { mutate: addStudents } = useCreateStudents();

  const handleEdit = event => {
    event.preventDefault();
    const studentName = event.target.studentName.value;
    setIsModalOpen(false);
    addStudents({ name: studentName });
  };

  if( isLoading ){
    return <div>Loading please wait...</div>
  }

  return (
    <>
      <div className='flex justify-end'>
        <button className='mr-2 text-blue-400 hover:text-blue-600' onClick={() => setIsModalOpen(true)}>
          Add Student Record
        </button>
      </div>
      <table className='w-full'>
        <tr>
          <th>S.No</th>
          <th>Name</th>
        </tr>
        {students.map(student => (
          <tr className='text-center' key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td className='cursor-pointer'>&#9998;</td>
            <td className='cursor-pointer font'>&#x274C;</td>
          </tr>
        ))}
      </table>
      <Modal
        isOpen={isModalOpen}
        onSubmit={handleEdit}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
};

export default Table;
