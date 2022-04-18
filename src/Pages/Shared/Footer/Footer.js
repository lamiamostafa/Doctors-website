import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-black text-white m-4 p-2'>
            <p ><small>copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;