import React, {useState} from 'react';

import {IconContext} from "react-icons";
import {FcAddDatabase} from "react-icons/fc";
import {TfiMicrophone} from "react-icons/tfi";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {purchaseActions} from "../../redux/slices";
import {IoMdClose} from "react-icons/io";
import {speech} from "../../speech";

const Footer = () => {

    const dispatch = useDispatch();
    const {purchaseForEdit, trigger} = useSelector(state => state.purchases);
    const [inputActive, setInputActive] = useState(false);
    const [purchase, setPurchase] = useState('');
    console.log(inputActive, '-------------')



    const newPurchase = () => {
        if (purchase.trim() !== '') {
            const newPurchase = {
                id: uuidv4(),
                purchase: capitalizeFirstLetter(purchase)
            }
            dispatch(purchaseActions.setPurchase(newPurchase));
            clear();
            setPurchase('');

        } else {
            if (purchaseForEdit) {
                const newPurchase = {
                    id: uuidv4(),
                    purchase: capitalizeFirstLetter(purchaseForEdit)
                }
                dispatch(purchaseActions.setPurchase(newPurchase));
                clear();
                setPurchase('');
                dispatch(purchaseActions.setPurchaseForEdit(''))
                setInputActive(!inputActive)
            } else {
                return []
            }
        }
    }

    const clear = () => {
        const elem = document.getElementById('text__area');
        elem.value = '';
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let timeOut = 0;

    return (
        <div className={'Footer'}>

            <textarea
                type="text"
                id={'text__area'}
                className={inputActive ? 'input__item' : 'input__item__hidden'}
                onChange={(e) => setPurchase(e.target.value)}
            />

            <button
                className={inputActive ? 'enter__button' : 'enter__button__hidden'}
                onClick={newPurchase}
            >
                зберегти
            </button>

            <button
                id={'closeButton'}
                className={inputActive ? 'close__button' : 'close__button__hidden'}
                onClick={() => {
                    setInputActive(!inputActive)
                    clear()
                }
                }
            >
                <IconContext.Provider value={{className: 'icon__close', size: 40}}>
                    <IoMdClose/>
                </IconContext.Provider>
            </button>


            <IconContext.Provider value={{className: 'icon__add', size: 40}}>

                <TfiMicrophone
                    onTouchStart={() => {
                        setInputActive(!inputActive)
                        timeOut = setTimeout(() => {
                            speech(dispatch)
                        }, 1000)
                    }}
                    onTouchEnd={() => {
                        clearTimeout(timeOut)
                        clear()
                    }}
                />

                <FcAddDatabase

                    className={'icon__add__plus'} onClick={() =>
                    setInputActive(!inputActive)
                }/>

            </IconContext.Provider>
        </div>
    );
};

export {
    Footer
}