import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";

import {IconContext} from "react-icons";
import {FcAddDatabase} from "react-icons/fc";
import {TfiMicrophone} from "react-icons/tfi";
import {IoMdClose} from "react-icons/io";

import {useDispatch, useSelector} from "react-redux";
import {purchaseActions} from "../../redux/slices";

import {speech} from "../../speech";

const Footer = () => {

    const dispatch = useDispatch();
    const {purchaseForEdit, trigger} = useSelector(state => state.purchases);
    const [purchase, setPurchase] = useState('');


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
                dispatch(purchaseActions.changeTrigger())
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
                id={'text__area'}
                className={trigger ? 'input__item' : 'input__item__hidden'}
                onChange={(e) => setPurchase(e.target.value)}
            />

            <button
                className={trigger ? 'enter__button' : 'enter__button__hidden'}
                onClick={newPurchase}
            >
                зберегти
            </button>

            <button
                id={'closeButton'}
                className={trigger ? 'close__button' : 'close__button__hidden'}
                onClick={() => {
                    dispatch(purchaseActions.changeTrigger())
                    clear()
                }
                }
            >
                <IconContext.Provider value={{className: 'icon__close', size: 40}}>
                    <IoMdClose/>
                </IconContext.Provider>
            </button>


            <IconContext.Provider value={{className: 'icon__add', size: 60}}>

                <TfiMicrophone
                    onTouchStart={() => {
                        window.oncontextmenu = function (event) {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        }
                        // dispatch(purchaseActions.changeTrigger())
                        timeOut = setTimeout(() => {
                            speech(dispatch)
                        }, 500)
                    }}
                    onTouchEnd={() => {
                        clearTimeout(timeOut)
                        clear()
                    }}
                />

                <FcAddDatabase

                    className={'icon__add__plus'} onClick={() =>
                    dispatch(purchaseActions.changeTrigger())
                }/>

            </IconContext.Provider>
        </div>
    );
};

export {
    Footer
}