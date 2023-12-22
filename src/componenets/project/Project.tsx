import { FC } from "react";
import { Button } from "../../form/Button";

export const Project = () => {
    return (
        <div className='project' id='about_us'>
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

                <p className='desc project__content-desc'>"Фиджитал" – это не просто место для игры на компьютерах; это
                    виртуальная арена, в которой происходит настоящая симфония между миром игры и передовыми
                    технологиями. Наш проект становится исключительным и уникальным пространством, где каждый, будь то
                    начинающий геймер, в поиске своих первых виртуальных подвигов, или опытный ветеран киберспорта,
                    ищущий новые вызовы, может открыть для себя невероятные возможности в захватывающем мире виртуальных
                    приключений. Мы стремимся создать уникальное сообщество, где гармония между игровой страстью и
                    передовыми технологиями встречается, открывая путь каждому человеку к увлекательному и
                    инновационному опыту в мире киберспорта..
                </p>

                <Button
                    className={ 'btn project__content-btn' }
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