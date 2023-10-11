import { FC, useRef } from "react";
import { Button } from "../../form/Button";

export const Header = () => {
    const windowWidth: any = useRef(window.innerWidth);
    const titles = [ 'О нас', 'О нас', 'Выгода', 'По приколу', 'О нас' ]

    const renderedTitles = titles.map((item: any) => {
        return <p className='img header__titles-title'>{ item }</p>
    })
    return (
        <div className='header'>
            <img className='img header__logo' src="/icons/main_logo.png" alt="" />

            { windowWidth.current < 930 ? (
                    <div className='hamburger'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) :
                (
                    <div className='img header__right'>
                        <div className='img header__titles'>
                            { renderedTitles }
                        </div>

                        <Button
                            className={ 'btn' }
                            text={ 'Скачать' }
                        />
                    </div>

                )
            }
        </div>
    )
}