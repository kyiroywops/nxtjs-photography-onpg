import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('white');
                setTextColor('black');
            } else {
                setColor('transparent');
                setTextColor('white');
            }
        };
        window.addEventListener('scroll', changeColor); 
    }, []);

    const handleNav = () => {
        setNav(!nav);

    };




    return ( 
        <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <h1 style={{color:`${textColor}`}} className='font-bold text-4xl'>Capturar</h1>
                
                </Link>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>

                    </li>
                    <li className='p-4'>
                        <Link href='/#galeria'>Galeria</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#portafolio'>Trabajo</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='#/contacto'>Contacto</Link>
                    </li>

                </ul>

                {/* Mobile Menu */}
                <div className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose/> : <AiOutlineMenu size={20} style={{color:`${textColor}`}} />}
                </div>
                <div className={nav ? 'sm:hidden absolute top-0 bottom-0 right-0 left-0  justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
                :
                'sm:hidden absolute top-0 bottom-0 right-0 left-[-100%]  justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>

                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#galeria'>Galeria</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#portafolio'>Trabajo</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='#/contacto'>Contacto</Link>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </div>
     );
}
 
export default Navbar;