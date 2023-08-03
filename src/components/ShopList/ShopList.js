import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {purchaseActions} from "../../redux/slices";
import {FcDeleteRow, FcEditImage} from "react-icons/fc";
import {IconContext} from "react-icons";
import {Purchase} from "../purchase/Purchase";

const ShopList = () => {

    const dispatch = useDispatch();

    const {purchases, donePurchases} = useSelector(state => state.purchases)


    return (

        <div className={'ShopList'}>


            <div className="active__list">
                {
                    purchases.map(purchase => <Purchase key={purchase.id} purchases={purchase}/>)
                }

            </div>

            <div className="done__list">
                {
                    donePurchases.map(donePurchase =>
                        <div
                            className={'done__list__inner'}
                            key={donePurchase.id}
                        >
                            <span
                                onClick={() => dispatch(purchaseActions.backFromDonePurchase(donePurchase.id))
                            }>
                                {donePurchase.purchase}
                            </span>

                            <div className={'edit__done__icons'}>

                                <IconContext.Provider
                                    value={{className: 'edit__icons__inner', size: 35}}>


                                    <FcDeleteRow
                                        onClick={() => dispatch(purchaseActions.deleteDonePurchase(donePurchase.id))}
                                    />
                                </IconContext.Provider>

                            </div>
                        </div>)
                }

            </div>

        </div>
    );
};

export {ShopList}