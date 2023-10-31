function clearInput (inputSelector) {

    const input = document.querySelectorAll(inputSelector);

    input.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g,"");
        })
    });
}

export default clearInput;