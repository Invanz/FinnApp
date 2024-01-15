import { Input, InputGroup, InputRightElement, Button, Box, Divider, AbsoluteCenter } from '@chakra-ui/react';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function Login(){
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <div className="bg-gray-400 min-h-screen flex items-center justify-center text-black">
            <div className="bg-gray-100 max-w-lg rounded-lg shadow-lg border border-gray-200 p-6 m-2">
                <h1 className='text-black text-center text-4xl font-bold'>Login</h1><br />
                <p className='text-gray-700'>Al iniciar sesión, acepta nuestros <a href="" className='text-blue-500 hover:text-blue-700'>términos</a> y <a href="" className='text-blue-500 hover:text-blue-700'>condiciones</a>.</p><br />
                <Input placeholder='Correo electrónico o número de teléfono' colorScheme='gray' /><br /><br />
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Contraseña'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Ocultar' : 'Mostrar'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <a href='' className='ms-1 text-sm underline text-gray-400 hover:text-gray-500'>Olvidé la contraseña</a>
                <Box position='relative' padding='10'>
                    <Divider />
                    <AbsoluteCenter>
                        <div className='bg-gray-100 px-4'>
                            <p className='text-gray-400'> O </p>
                        </div>
                    </AbsoluteCenter>
                </Box>
                <button className='border border-gray-400 rounded-full p-3 min-w-full bg-gray-300 font-bold hover:shadow-inner hover:bg-gray-200 hover:border-gray-200'>
                    <div className='grid grid-cols-4 content-center'>
                        <FcGoogle className="w-5 h-5 mr-5 justify-self-start self-center" />
                        <span className='col-span-3 justify-self-start self-center'>Iniciar sesión con Google</span>
                    </div></button><br /><br />
                <button className='border border-blue-700 rounded-full p-3 min-w-full font-bold bg-blue-600 text-white hover:text-black hover:shadow-inner hover:bg-gray-200 hover:border-gray-200'>
                    <div className='grid grid-cols-4 content-center'>
                        <FaFacebook className="w-5 h-5 mr-5 justify-self-start self-center" />
                        <span className='col-span-3 justify-self-start self-center'>Iniciar sesión con Facebook</span>
                    </div>
                </button>
                <br /><br />
                <Divider /><br />
                <p className='text-gray-400 text-center'>¿Eres nuevo? <Link to="/register" className='text-blue-400 hover:text-blue-600'>Regístrate</Link></p>
            </div>
        </div>
    )
}