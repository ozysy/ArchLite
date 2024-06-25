import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/User.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import{ usernameValidate } from '../helper/validate';
import { useAuthStore } from '../store/store';
import Header from './Header';

import styles from '../styles/UserName.module.css';


export default function Username() {

    const navigate = useNavigate();
    const setUsername = useAuthStore(state => state.setUsername);
    // const username = useAuthStore(state => state.auth.username);


    // useEffect(() => {
    //     console.log(username)
    // }) 
    const formik = useFormik({
        initialValues : {
          username : 'ozysy'
        },
        validate : usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            // console.log(values)
            setUsername(values.username);
            navigate('/password');
        }
    })

    return (
        <div>
            <Header />
        <div className="container mx-auto">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className='text-5xl fotn-bold'>Здравствуйте!</h4>
                        <span className='py-4 text-xl w-3/3 text-center text-gray-500'>
                        Узнайте больше, присоединившись к нам.
                        </span>
                    </div>

                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                            <img src={avatar} className={styles.profile_img} alt="avatar" />
                        </div>

                <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                  <button className={styles.btn} type='submit'>продолжить</button>
              </div>

                           <div className="text-center py-4">
                            <span className='text-gray-500'>Не зарегистрированы <Link className='text-red-500' to='/register'>Зарегистрироваться</Link></span>
                           </div>
                    </form>

                </div>
            </div>
        </div>
        </div>
    )
}