import { FC } from "react";
import { Button } from "../../form/Button";

export const Androids = () => {
    return (
        <div  style={{marginTop: 120}} className={'androids'}>

            <div id='androids' className='androids__content'>
                <img
                    className={' androids__image'}
                    src="/images/android_1.png" alt=""
                />
            </div>

            <div  style={{marginTop: 120}} className={'androids__second'} id='ios'>
                <img className='img androids__image-bottom' src="/images/android_2.png" alt="" />

                <Button
                    className={'btn'}
                    text={'Присоединиться'}
                />
            </div>

        </div>
    )
}