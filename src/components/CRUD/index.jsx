import React, { useState } from 'react'
import Header from './Header';
import Table from './Table';

const CRUD = () => {
  return (
    <div className='w-full h-full'>
      <Header />
      <Table />
    </div>
  )
};

export default CRUD;
