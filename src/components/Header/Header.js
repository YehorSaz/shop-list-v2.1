import React, {useState} from 'react';

import {IconContext} from "react-icons";
import {AiOutlineMenuFold} from "react-icons/ai";
import {Menu} from "../Menu/Menu";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    return (

        <div className={'header'}>
            <h2>Name of list</h2>
            <IconContext.Provider value={{className: 'icon__menu', size: 50}}>

                <AiOutlineMenuFold onClick={() => setMenuActive(!menuActive)}/>

            </IconContext.Provider>

            <Menu active={menuActive} setActive={setMenuActive}/>
        </div>
    );
};

export {Header}