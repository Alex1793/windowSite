'use strict';

import './slider';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    modal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modal('.phone_link', '.popup', '.popup .popup_close')
});