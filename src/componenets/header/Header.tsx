import { FC, useEffect, useRef, useState } from "react";
import { scrollTo } from "../../utils";
import { Button } from "../../form/Button";

interface HeaderProps {
    setMenuClass?: any,
    isMenuClicked?: any,
    setIsMenuClicked?: any
}

export const Header: FC<HeaderProps> = ({
    setMenuClass,
    isMenuClicked,
    setIsMenuClicked
}) => {
    const windowWidth: any = useRef(window.innerWidth);
    const titles = [ 'О нас', 'Преимущества', 'Как начать', 'Возможности', 'Контакты']
    const [isActive, setIsActive] = useState('')

    const updateMenu = () => {
        if (!isMenuClicked) {
            setMenuClass('menu visible')
        } else {
            setMenuClass('menu hidden')
        }

        setIsMenuClicked(!isMenuClicked)
    }

    const renderedTitles = titles.map((
        item: any,
        index: number
    ) => {
        const handleClick = () => {
            if (index === 0)
                scrollTo("about_us", 'center')

            if (index === 1)
                scrollTo("games", 'start')

            if (index === 2)
                scrollTo("androids", 'start')

            if (index === 3)
                scrollTo("ios", 'end')

            if (index === 4)
                scrollTo("forms", 'end')

            setIsActive(item)
            // if (index === 3)
            //     window.open('https://vsk.onlinedoctor.ru/lpu/')
        }


        return <p onClick={ handleClick } className={`img header__titles-title ${isActive === item ? 'isActive' : ""}`}>{ item }</p>
    })

    useEffect(() => {
        const bodyOverFlow = document.body.style.overflow

        if (isMenuClicked) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = bodyOverFlow
        }
    }, [ isMenuClicked ])

    return (
        <div style={ {background: isMenuClicked ? 'black' : 'rgba(0, 0, 0, 0.58)'} } className='header'>
            <img className='img header__logo' src="/icons/main_logo.png" alt="" />

            { windowWidth.current < 930 ? (
                    <div onClick={ () => updateMenu() }>
                        { !isMenuClicked ?
                            (
                                <div onClick={ () => updateMenu() } className='hamburger'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            ) :

                            (
                                <div className={ 'hamburger__close' }>

                                </div>
                            )
                        }
                    </div>
                ) :
                (
                    <div className='img header__right'>
                        <div className='img header__titles'>
                            { renderedTitles }
                        </div>

                        <Button
                            className={ 'header__btn btn' }
                            text={ 'Скачать' }
                        />
                    </div>
                )
            }
        </div>
    )
}