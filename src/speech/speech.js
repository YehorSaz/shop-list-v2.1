import {v4 as uuidv4} from "uuid";

import {purchaseActions} from "../redux/slices";

const speech = (dispatch, multiInput) => {

    let SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition,
        recognition;

    recognition = new SpeechRecognition();
    recognition.lang = 'uk-UA';
    recognition.interimResults = true;


    recognition.start();

    recognition.onresult = (event) => {

        const purchase = event.results[0][0].transcript;

        if (event.results[0].isFinal) {
            if (!multiInput) {
                const purchaseArr = purchase.split(' ')
                for (const item of purchaseArr) {
                    const newPurchase = {
                        id: uuidv4(),
                        purchase: item
                    }
                    dispatch(purchaseActions.setPurchase(newPurchase))
                }
            }
            else {
                const newPurchase = {
                    id: uuidv4(),
                    purchase: purchase
                }
                dispatch(purchaseActions.setPurchase(newPurchase))
            }

        }
    }
    recognition.onspeechend = function () {
        recognition.stop();
    }

};


export {speech}