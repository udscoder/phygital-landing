import { FC } from "react";
import { Button } from "../../form/Button";

export const Androids = () => {
    return (
        <div className='androids' id={'androids'}>

            <div className='androids__content'>
                <img
                    className={' androids__image'}
                    src="/images/android_1.png" alt=""
                />
            </div>

            <img className='img androids__image-bottom' src="/images/android_2.png" alt="" />

            <Button
                className={'btn'}
                text={'Присоединиться'}
            />

        </div>
    )
}