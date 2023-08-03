import React from 'react';
import {useDispatch} from "react-redux";

import {purchaseActions} from "../../redux/slices";

const Menu = ({active, setActive}) => {

    const dispatch = useDispatch();
    const setAttr = () => {
        const element = document.querySelector('.Menu__active')
        element.classList.remove('Menu__active');
        element.classList.add('Menu__hidden');
        setActive(!active)
    }

    const newShoplist = () => {
        localStorage.clear()
        dispatch(purchaseActions.deleteAllPurchases())
    }

    return (

        <div id={'menu__div'} className={active ? 'Menu__active' : 'Menu__hidden'}>
            <div className={'item'}
                 onClick={() => {
                     setAttr()
                     newShoplist()
                 }}>
                <h3>новий список</h3>
            </div>


            <div className={'close__button__menu'}
            onClick={setAttr}
            >
                <h2>закрити</h2>
            </div>
        </div>
    );
};

export {Menu}