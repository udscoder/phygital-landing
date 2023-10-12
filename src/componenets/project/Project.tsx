import { FC } from "react";
import { Button } from "../../form/Button";

export const Project = () => {
    return (
        <div className='project'>
            <img
                className='project__img'
                src="/images/project_left.png"
                alt=""
            />

            <div className='project__content'>
                <img
                    className={ 'project__title' }
                    src="/images/project_title.png"
                    alt="#"
                />

                <p className='desc project__content-desc'>Узнай о спорте больше с Диджитал-ТВ. Прямые трансляции, яркие
                    моменты, лучшие стримеры, а также море
                    эксклюзивного контента и твой стрим на большом экране. Узнай о спорте больше с Диджитал-ТВ. Прямые
                    трансляции, яркие моменты, лучшие стримеры, а также море эксклюзивного контента и твой стрим на
                    большом экране.Узнай о спорте больше с Диджитал-ТВ. Прямые трансляции, яркие моменты, лучшие
                    стримеры, а также море эксклюзивного контента и твой стрим на большом экране.Узнай о спорте больше с
                    Диджитал-ТВ. Прямые трансляции, яркие моменты, лучшие стримеры, а также море эксклюзивного контента
                    и твой стрим на большом экране.
                </p>

                <Button
                    className={ 'btn' }
                    text={ 'Присоединиться' }
                />
            </div>

            <img className='project__img'
                 src="/images/project_right.png"
                 alt=""
            />
        </div>
    )
}