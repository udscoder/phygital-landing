import { FC } from "react";
import { Button } from "../../form/Button";

export const AndroidsMobile = () => {
    return (
        <div  className={'androids'}>
            <div id={'androids'}>
                <div style={{marginBottom: 120}} className='androids__content'>
                    <img src="/images/androids-mobile-1.png" alt="" />
                </div>
            </div>

            <div className={'androids__second'} id='ios'>
                <h1 className={'androids__title'}>возможности </h1>
                <img
                    className={'androids-mobile-2'}
                    src="/images/androids-mobile-2.png" alt="" />

                <Button
                    className={'btn'}
                    text={'Присоединиться'}
                />
            </div>

        </div>
    )
}