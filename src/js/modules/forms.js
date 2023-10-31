import clearInput from "./clearInput";

function forms () {
    const forms = document.querySelectorAll('form');
        
    clearInput('[name="user_phone"]');

    const messages = {
        success: 'отправлено',
        failed: 'ошибка',
        loading: 'идет отправка...'
    }

    forms.forEach(item => {
        binedForms(item)
    });


    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await res.text();
    }

    function binedForms (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = messages.loading;
            form.append(statusMessage)
            
            const formData = new FormData(form);
            postData('assets/server.php', formData)
                .then(data => {
                    console.log(data)
                    statusMessage.textContent = messages.success;
                })
                .catch(() => {
                    statusMessage.textContent = messages.failed;
                })
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove();
                        // closeModal();
                    }, 3000)
                    form.reset();
                })
        })
    }
}

export default forms;