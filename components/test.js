import { useContext } from 'react';

import { CgClose } from 'react-icons/cg';

import { menuContext } from './menu/menu_context';

const TestSample = () => {

    return (
        < >
            <div className="test">
                <HomeTest />

            </div>
        </ >
    )
}

export default TestSample


const HomeTest = () => {
    const { menuState, setMenuState } = useContext(menuContext);


    return (
        <div className="mega__menu">
            <div className='menu__close__div' onClick={() => setMenuState(!menuState)}>
                <CgClose size={30} className="menu__close" color="black" />
            </div>
            <ul class="menu_list">
                <li class="menu_list_item">
                    <a href="#" class="menu_list_link">Home</a>
                </li>
                <li class="menu_list_item">
                    <a href="#" class="menu_list_link">About</a>
                </li>
                <li class="menu_list_item">
                    <a href="#" class="menu_list_link">Help</a>
                </li>
                <li class="menu_list_item">
                    <a href="#" class="menu_list_link">Contact</a>
                </li>
            </ul>
            <div>
                <button class="menu_trigger btnOpenMenu">HAIRCUT</button>
                <button class="menu_trigger btnOpenMenu">NAIL</button>
                <button class="menu_trigger btnOpenMenu">EYELASHES</button>
                <button class="menu_trigger btnOpenMenu">FACIAL</button>
                <button class="menu_trigger btnOpenMenu">WEAVES</button>
            </div>
        </div >
    )
}