import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from '../store/store';
import { generateOTP, verifyOTP } from '../helper/helper';
import { useNavigate } from 'react-router-dom';
import Header from './Header';


import styles from '../styles/UserName.module.css';


export default function Recovery() {

    const { username } = useAuthStore(state => state.auth);
    const [OTP, setOTP] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        generateOTP(username).then((OTP) => {
            // console.log(OTP);
            if(OTP) return toast.success('Код был выслан на вашу почту');
            return toast.error('Возникла проблема при генерации вашего кода')
        })
    }, [username]);

    async function onSubmit(e) {
        e.preventDefault();
        try {
            console.log("Verifying OTP with:", { username, code: OTP });
            let { status } = await verifyOTP({ username, code: OTP });
            if (status === 201) {
                toast.success('Проверка успешна');
                navigate('/reset');
            } else {
                toast.error('Код не правильный, проверьте свою почту');
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            toast.error('Код не правильный, проверьте свою почту');
        }
    }

    

    //ручная отправка
    function resendOTP(){
        let sendPromise = generateOTP(username);

        toast.promise(sendPromise, {
            loading : 'Отправка',
            success : <b>Код был отправлен на вашу почту</b>,
            error : <b>Не получилось отправить</b>
        });

        sendPromise.then(OTP => {
            // console.log(OTP)
        })
    }

    return (
        <div>
            <Header />
        <div className="container mx-auto">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className='text-2xl fotn-bold'>Восстановление пароля</h4>
                        <span className='py-4 text-xl w-3/3 text-center text-gray-500'>
                            Введите код для смены пароля.
                        </span>
                    </div>

                    <form className='pt-20' onSubmit={onSubmit}>


                <div className="textbox flex flex-col items-center gap-6">

                    <div className="input text-center">
                    <span className='py-4 text-sm text-left text-gray-500'>
                        Ведите 6 значный код
                    </span>
                    <input onChange={(e) => setOTP(e.target.value) } className={styles.textbox} type="text" placeholder='OTP' />
                  </div>

                  <button className={styles.btn} type='submit'>Восстановить пароль</button>
              </div>
                    </form>

                    <div className="text-center py-4">
                            <span className='text-gray-500'>Код не пришел? <button onClick={resendOTP} className='text-red-500'>отправить снова</button></span>
                           </div>

                </div>
            </div>
        </div>
        </div>
    )
}