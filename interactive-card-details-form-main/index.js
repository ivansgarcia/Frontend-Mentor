const setName = (name) => {
    document.getElementById('card1-name').innerText = name ? name : 'Jane Apleseed';
}

const setNumber = (number) => {
    const cardNumber = document.getElementById('card1-number');
    number = number.replace(/(.{4})/g,"$1 ");
    cardNumber.innerText = number ? number : '0000 0000 0000 0000';
}

const setMonth = (month) => {
    document.getElementById('card1-month').innerText = (month + '/');
}

const setYear = (year) => {
    document.getElementById('card1-year').innerText = year;
}

const setCvc = (cvc) => {
    document.getElementById('card-cvc').innerText = cvc;
}

const restoreStyle = (element) => {
    element.style = '';
    document.getElementById(`error-${element.id}`).style.display = 'none';
}

const confirmData = () => {
    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const cvcInput = document.getElementById('cvc');

    const inputs = [nameInput, numberInput, monthInput, yearInput, cvcInput];
    showErrors(inputs);

    var regExp = /[a-zA-Z]/g;
            
    const errorNumber = document.getElementById('error-number');
    if(regExp.test(numberInput.value)) {
        errorNumber.style.display = 'initial';
        errorNumber.innerText= 'Wrong format, numbers only';
        numberInput.style = 'border: 2px solid orange';
    }

    if (nameInput.value && numberInput.value && monthInput && yearInput.value && cvcInput.value) {
        document.getElementById('form').style.display = 'none';
        document.getElementById('complete').style.display = 'initial';
    }
}

const showErrors = (inputs) => { 
    inputs.forEach(input => {
        if (!input.value) {
            let errorTag = input.id === 'month' || input.id === 'year' ? 
                document.getElementById(`error-date`) 
                :
                document.getElementById(`error-${input.id}`);
            errorTag.style.display = 'block';
            input.style = 'border: 1px solid rgb(199, 1, 51)';
            errorTag.innerText = 'Can\'t be blank';
        }
    })
}