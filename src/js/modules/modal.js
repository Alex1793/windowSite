function modal (triggerModal, modalSelector, closeSelector) {
    const btnModal = document.querySelectorAll(triggerModal),
          modal = document.querySelector(modalSelector),
          btnClose = document.querySelector(closeSelector);

    btnModal.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            modal.style.display = 'block';
            document.documentElement.style.overflow = 'hidden';
        })
    })

    btnClose.addEventListener('click', (e) => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    })

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    })

    function showModalByTime (modal, time) {
        const timeModal = setTimeout(() => {
            document.querySelector(modal).style.display = 'block';
            document.documentElement.style.overflow = 'hidden';
        }, time);
    }

    showModalByTime('.popup', 60000);
}

export default modal;