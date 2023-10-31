import clearInput from "./clearInput";

function modal (triggerModal, modalSelector, closeSelector, closeClickOverlay = true) {
    const btnModal = document.querySelectorAll(triggerModal),
          modal = document.querySelector(modalSelector),
          btnClose = document.querySelector(closeSelector);

    clearInput('#width');
    clearInput('#height');

    function closeModal () {
        modal.style.display = 'none';
        document.documentElement.style.overflow = '';
    }

    btnModal.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            
            document.querySelectorAll('[data-modal]').forEach(item => {
                item.style.display = 'none';
            })

            modal.style.display = 'block';
            document.documentElement.style.overflow = 'hidden';
        })
    })

    btnClose.addEventListener('click', () => {
        closeModal();
    })

    modal.addEventListener('click', (e) => {
        if(e.target === modal && closeClickOverlay) {
            closeModal();
        }
    })

    function showModalByTime (modal, time) {
        const timeModal = setTimeout(() => {
            document.querySelector(modal).style.display = 'block';
            document.documentElement.style.overflow = 'hidden';
        }, time);
    }

    // showModalByTime('.popup', 60000);
}

export default modal;
