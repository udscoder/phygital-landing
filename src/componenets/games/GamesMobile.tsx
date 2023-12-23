import { FC } from "react";

export const GamesMobile: FC = () => {
    return (
        <div style={{marginBottom: 100}} className={'games-mobile'} id={'games'}>
            <img
                className='games__mobile-img'
                src="/images/games-mobile-1.jpg" alt="" />
        </div>
    )
}