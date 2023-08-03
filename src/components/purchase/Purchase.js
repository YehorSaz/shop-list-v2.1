import React from 'react';
import {useDispatch} from "react-redux";
import {purchaseActions} from "../../redux/slices";
import {IconContext} from "react-icons";
import {FcDeleteRow, FcEditImage} from "react-icons/fc";

const Purchase = ({purchases}) => {

    const dispatch = useDispatch();
    const {purchase, id} = purchases

    const editPurchase = (id) => {
        const textArea = document.getElementById('text__area');
        textArea.classList.remove('input__item__hidden');
        textArea.classList.add('input__item');
        const purchaseForEdit = document.getElementById(id).innerHTML
        const purForEdit = purchaseForEdit.slice(2)
        dispatch(purchaseActions.setPurchaseForEdit(purForEdit))
        textArea.value = purForEdit
        dispatch(purchaseActions.deletePurchase(id))
    }

    const showButtons = () => {
        const saveButton = document.querySelector('.enter__button__hidden')
        const closeButton = document.querySelector('.close__button__hidden');
        saveButton.classList.remove('enter__button__hidden')
        saveButton.classList.add('enter__button')
        closeButton.classList.remove('close__button__hidden')
        closeButton.classList.add('close__button')
    }


    return (

        <div className={'purchase'}>
            <span id={id} onClick={() => dispatch(purchaseActions.setDonePurchase(id))}>- {purchase}</span>
            <div className={'edit__icons'}>
                <IconContext.Provider value={{className: 'edit__icons__inner', size: 35}}>

                    <FcEditImage
                        onClick={() => {
                            showButtons()
                            editPurchase(id)
                        }
                        }
                    />

                    <FcDeleteRow
                        onClick={() => dispatch(purchaseActions.deletePurchase(id))}
                    />
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Purchase;