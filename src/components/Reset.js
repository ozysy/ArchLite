import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import{ resetPasswordValidation } from '../helper/validate';
import { resetPassword } from '../helper/helper';
import { useAuthStore } from '../store/store';
import { useNavigate, Navigate } from 'react-router-dom';
import useFetch from '../hooks/fetch.hook'

import styles from '../styles/UserName.module.css';


export default function Reset() {

    const { username } = useAuthStore(state => state.auth);
    const navigate = useNavigate();
    const [{isLoading, apiData, status, serverError }] = useFetch('createResetSession')

    // useEffect(() =>{
    //      console.log(apiData)
    // })

    const formik = useFormik({
        initialValues : {
          password : '',
          confirm_pwd:''
        },
        validate : resetPasswordValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            // console.log(values)

            let resetPromise = resetPassword({ username, password: values.password })

            toast.promise(resetPromise, {
                loading: 'Обновление',
                success: <b>Сброс пароля успешен</b>,
                error: <b>не получилось сбросить пароль</b>
            });

            resetPromise.then(function(){ navigate('/password')})

        }
    })

    
    if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
    if(serverError) return <h1 className='text-xl text-red-500'>{serverError.massage}</h1>
    if(status && status !== 201) return <Navigate to={'/password'}></Navigate>

    return (
        <div className="container mx-auto">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass} style={{ width : "50%"}}>
                    <div className="title flex flex-col items-center">
                        <h4 className='text-5xl fotn-bold'>Восстановление пароля</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                            Введите новый пароль.
                        </span>
                    </div>

                    <form className='pt-20' onSubmit={formik.handleSubmit}>


                <div className="textbox flex flex-col items-center gap-6">

                    <div className="input text-center">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Новый пароль' />
                  <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="text" placeholder='Повторите пароль' />
                  </div>

                  <button className={styles.btn} type='submit'>Восстановить</button>
              </div>

                    </form>

                </div>
            </div>
        </div>
    )
}