import React from 'react';
import { Link } from 'react-router-dom';

const Controll = () => {
    return (
        <div className='mt-32 mb-80 flex justify-center gap-20 max-w-3xl mx-auto'>
            <Link to='/iteamsadd' className='bg-red-400 p-2 rounded-md'>Item Adds</Link>
            <Link to='/updateanddelete' className='bg-yellow-400 p-2 rounded-md'>Item Adds</Link>
        </div>
    );
};

export default Controll;