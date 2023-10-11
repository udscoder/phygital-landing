import { FC, ReactNode } from "react";
interface ButtonProps {
    loading?: boolean
    text: string | ReactNode
    onClick?: (event: any) => void
    className?: string
}
export const Button: FC< ButtonProps> = ({
    loading,
    text,
    onClick,
    className
}) => {
    function onClickBtn(event: any) {
        onClick && onClick(event)
    }

    return (
        <button
            onClick={(event) => onClickBtn(event)}
            className={className}
        >

            { loading ? (
                <div className="vertical-center img" style={{ position: 'relative' }}>

                </div>
            ) : <div className='img header__text'>{text}</div>}

        </button>
    )
}