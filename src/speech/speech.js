import {v4 as uuidv4} from "uuid";

import {purchaseActions} from "../redux/slices";
const speech = (dispatch) => {

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
            const newPurchase = {
                id: uuidv4(),
                purchase: purchase.charAt(0).toUpperCase() + purchase.slice(1)
            }

            dispatch(purchaseActions.setPurchase(newPurchase))

        }
    }
    recognition.onspeechend = function () {
        recognition.stop();
    }

};


export {speech}