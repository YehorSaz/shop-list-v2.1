import React from 'react';
import {useDispatch} from "react-redux";

import {IconContext} from "react-icons";
import {FcDeleteRow, FcEditImage} from "react-icons/fc";

import {purchaseActions} from "../../redux/slices";

const Purchase = ({purchases}) => {

    const dispatch = useDispatch();
    const {purchase, id} = purchases

    const editPurchase = (id) => {
        const textArea = document.getElementById('text__area');
        const purchaseForEdit = document.getElementById(id).innerHTML
        const purForEdit = purchaseForEdit.slice(2)
        dispatch(purchaseActions.setPurchaseForEdit(purForEdit))
        textArea.value = purForEdit
        dispatch(purchaseActions.deletePurchase(id))
    }


    return (

        <div className={'purchase'}>
            <span id={id} onClick={() => dispatch(purchaseActions.setDonePurchase(id))}>- {purchase}</span>
            <div className={'edit__icons'}>
                <IconContext.Provider value={{className: 'edit__icons__inner', size: 35}}>

                    <FcEditImage
                        onClick={() => {
                            dispatch(purchaseActions.changeTrigger())
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

export {Purchase}