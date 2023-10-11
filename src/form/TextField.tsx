import { FC, useState, useEffect, ReactNode } from "react";

interface TextFieldProps {
    type?: string
    value: any
    onChangeValue?: (value: string) => void
    placeholder?: string
    className?: string
    id?: string,
    imgLeft?: ReactNode | null
}
export const TextField: FC <TextFieldProps> = ({
    type = 'text',
    value,
    onChangeValue,
    placeholder = '',
    className = '',
    imgLeft,
    id = `text-field-${ Math.random() }`,
}) => {
    const [ isFocused, setIsFocused ] = useState(false);
    const [ valueLocal, setValue ] = useState<string>(value);

    const onChangeLocalValue = (value: string) => {
        setValue(value);

        if (onChangeValue) onChangeValue(value);
    };

    useEffect(() => {
        if (value !== valueLocal) setValue(value)
    }, [ value ])


    return (
        <div className={ `form-group ${ className }` }>
            <div className="form-block">
                <input
                    id={ id }
                    type={ type }
                    value={ valueLocal }
                    onChange={ (e) => onChangeLocalValue(e.target.value) }
                    placeholder={ placeholder }
                    className={ `form-control` }
                    onFocus={ () => setIsFocused(true) }
                    onBlur={ () => setIsFocused(false) }
                />
            </div>
        </div>
    )
}