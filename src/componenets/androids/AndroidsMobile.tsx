import { FC } from "react";
import { Button } from "../../form/Button";

export const AndroidsMobile = () => {
    return (
        <div className={'androids'}>
            <div className='androids__content'>
                <img src="/images/android-mobile-1.png" alt="" />
            </div>

            <h1 className={'androids__title'}>возможности </h1>
            <img
                className={'androids-mobile-2'}
                src="/images/androids-mobile-2.png" alt="" />

            <Button
                className={'btn'}
                text={'Присоединиться'}
            />
        </div>
    )
}