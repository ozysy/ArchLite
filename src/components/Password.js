import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/User.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate'
import useFetch from '../hooks/fetch.hook';
import { useAuthStore } from '../store/store';
import { verifyPassword } from '../helper/helper';
import Header from './Header';


import styles from '../styles/UserName.module.css';


export default function Password() {

    const navigate = useNavigate()
    const { username } = useAuthStore(state => state.auth)
    const [{isLoading, apiData, serverError}] = useFetch(`/user/${username}`)

    const formik = useFormik({
        initialValues : {
          password : 'admin@123'
        },
        validate : passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            // console.log(values)
            let loginPromise = verifyPassword({ username, password : values.password });
            toast.promise(loginPromise, {
                loading: 'Проверка',
                success : <b>Авторизациия успешна</b>,
                error : <b>Пароль не подходит</b>
            })

            loginPromise.then(res => {
                let{ token } = res.data;
                localStorage.setItem('token', token);
                navigate('/profile')
            })
        }
    })
    

    if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
    if(serverError) return <h1 className='text-xl text-red-500'>{serverError.massage}</h1>

    return (
        <div>
            <Header />
        <div className="container mx-auto">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className='text-2xl fotn-bold '>Здравствуйте {apiData?.fisrstName || apiData?.username}</h4>
                        <span className='py-4 text-xl w-3/3 text-center text-gray-500'>
                        Узнайте больше, связавшись с нами.
                        </span>
                    </div>

                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                            <img src={apiData?.profile || avatar} className={styles.profile_img} alt="avatar" />
                        </div>

                <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Пароль' />
                  <button className={styles.btn} type='submit'>Войти</button>
              </div>

                           <div className="text-center py-4">
                            <span className='text-gray-500'>Забыли пароль?</span>
                            <p><Link className='text-red-500' to='/recovery'>восстановить пароль</Link></p>
                           </div>
                    </form>

                </div>
            </div>
        </div>
        </div>
    )
}