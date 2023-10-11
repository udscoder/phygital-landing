import { FC } from "react";
import { Header } from "../header/Header";
import { Button } from "../../form/Button";

export const IntroductionMobile = () => {
    return (
        <div className='introduction'>
            <img className='background' src="/images/cover_main_1.png" alt="" />
            <Header />

            <div className='introduction__content'>
                <div className='introduction__content-left'>
                    <h1 className='introduction__title'>Открой мир <br /> киберспорта</h1>

                    <p className='introduction__desc'>
                        У вас активен бесплатный период использования У вас активен <br/>
                        бесплатный период использования У вас
                        активен бесплатный <br/>
                        период использования
                    </p>

                    <Button
                        className={'btn introduction__btn'}
                        text={'Продолжить'}
                    />
                </div>
            </div>
        </div>
    )
}