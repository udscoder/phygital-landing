import { Header } from "../header/Header";
import { Button } from "../../form/Button";

export const Introduction = () => {
    return (
        <div className='introduction'>
            <img className='background' src="/images/cover_main_1.png" alt="" />
            <Header />

            <div className='introduction__content'>
                <div className='introduction__content-left'>
                    <h1 className='introduction__title'>Открой мир <br /> киберспорта</h1>

                    <p className='introduction__desc'>
                        Открой для себя захватывающий мир киберспорта, где страсть к <br/> соревнованиям переплетается с
                        передовыми технологиями <br/>
                        нашего инновационного комьюнити.
                    </p>

                    <Button
                        className={ 'btn introduction__btn' }
                        text={ 'Продолжить' }
                    />
                </div>

                <div className='introduction__socials'>
                    <img src="/icons/icon_telegram.png" alt="" />
                    <img src="/icons/icon_instagram.png" alt="" />
                    <img src="/icons/icon_facebook.png" alt="" />
                    <img src="/icons/icon_messanger.png" alt="" />
                </div>
            </div>
        </div>
    )
}