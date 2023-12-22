import { FC } from "react";

export const Games = () => {
    return (
        <div className='games' id={'games'}>
            <img
                className={'games__image'}
                src="/images/games_1.png" alt="" />

            <img
                className={'games__image-bottom'}
                src="/images/games_2.jpg" alt="" />
        </div>
    )
}