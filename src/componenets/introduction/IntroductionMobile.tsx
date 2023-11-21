import { FC, useState } from "react";
import { Header } from "../header/Header";
import { Button } from "../../form/Button";
import { scrollTo } from "../../utils";

export const IntroductionMobile = () => {
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const titles = [ 'О нас', 'Игры', 'Андроиды', 'Формы']

    const renderedTitles = titles.map((item: any, index) => {
        const handleClick = () => {
            setIsMenuClicked(false)
            setMenuClass('menu hidden')

            if (index === 0)
                scrollTo("about_us", 'start')

            if (index === 1)
                scrollTo("games", 'start')

            if (index === 2)
                scrollTo("androids", 'start')

            if (index === 3)
                scrollTo("forms", 'end')

            // if (index === 3)
            //     window.open('https://vsk.onlinedoctor.ru/lpu/')
        }

        return <p onClick={handleClick} className='img header__titles-title'>{ item }</p>
    })

    return (
        <div className='introduction'>
            <img className='background' src="/images/cover_main_1.png" alt="" />
            <Header
                isMenuClicked={isMenuClicked}
                setIsMenuClicked={setIsMenuClicked}
                setMenuClass={setMenuClass}
            />

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

            {menuClass === "menu visible" && (
                <div className={'menu'}>
                    <div className={'menu__content'}>
                        {renderedTitles}
                    </div>

                    <div className={'menu__icons'}>
                        <img src="/icons/icon_telegram.png" alt="" />
                        <img src="/icons/icon_instagram.png" alt="" />
                        <img src="/icons/icon_facebook.png" alt="" />
                        <img src="/icons/icon_messanger.png" alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}