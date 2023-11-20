import { FC, useState } from "react";
import { TextField } from "../../form/TextField";
import { Button } from "../../form/Button";

export const Forms = () => {
    const [formFields, setFormFields] = useState([
        {
            key: 'name',
            value: '',
            setValue: '',
            placeholder: 'Имя',
        },
        {
            key: 'number',
            type: 'number',
            value: '',
            setValue: '',
            placeholder: 'Номер телефона',
        },
        {
            key: 'telegram',
            value: '',
            setValue: '',
            placeholder: 'email',
            imgLeft: '/icons/icon_telegram.png'
        }
    ])
    return (
        <div className='forms' id={'forms'}>
            <img className='background' src="/images/cover_main_2.png" alt="" />

            <div className='forms__block'>
                <h1 className='forms__block-title'>
                    Остались <br/>
                    <span>вопросы?</span>
                </h1>

                <p className='forms__block-desc'>Оставьте заявку и наш оператор <br/>
                    свяжется с вами
                </p>

                <div className='forms__block-inputs'>
                    {formFields.map((item: any) => (
                        <TextField
                            imgLeft={item.imgLeft}
                            placeholder={item.placeholder}
                            onChangeValue={() => item.setValue}
                            type={item.type}
                            value={item.value}
                        />
                    ))}
                </div>

                <Button
                    className={'btn forms-btn'}
                    text={'Отправить'}/>
            </div>
        </div>
    )
}