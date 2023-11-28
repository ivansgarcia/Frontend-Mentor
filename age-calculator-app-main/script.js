let validData = true;

const onSubmit = () => {
    validData = true;
    const day = (document.getElementById('dayInput').value);
    const month = document.getElementById('monthInput').value;
    let year = document.getElementById('yearInput').value;
    
    const date = new Date(year, month, day);
    const currentDate = new Date();
    
    if (year < 100) {
        date.setFullYear('00' + year);
    }

    if (!day) {
        showError('day', 'required');
        validData = false;
    } else if (day <= 0 || day > 31) {
        showError('day', 'invalid');
    }

    if (!month) {
        showError('month', 'required');
    } else if (month <= 0 || month > 12) {
        showError('month', 'invalid');
    }

    if (!year) {
        showError('year', 'required');
    } else if (year > new Date().getFullYear()) {
        showError('year', 'invalid');
    }

    if (day > new Date(year, month, 0).getDate()) {
        showError('day', 'invalid');
    }
    
    if (validData) {
        restoreStyle('day');
        restoreStyle('month');
        restoreStyle('year');
        
        let passedYears = currentDate.getFullYear() - date.getFullYear();
        let passedMonths = currentDate.getMonth() - date.getMonth() + 1;
        let passedDays = currentDate.getDate() - date.getDate();

        if (passedDays < 0) {
            passedMonths--;
            passedDays = currentDate.getDate() + Math.abs(passedDays);
        }
    
        const resultYears = document.getElementById('years');
        const resultMonths = document.getElementById('months');
        const resultDays = document.getElementById('days');

        resultYears.innerHTML = 0;
        resultMonths.innerHTML = 0;
        resultDays.innerHTML = 0;

        resultYears.style = `min-width: ${passedYears.toString().length * 9}%`;
        resultMonths.style = `min-width: ${passedMonths.toString().length * 9}%`;
        resultDays.style = `min-width: ${passedDays.toString().length * 9}%`;

        const yearInterval = setInterval(() => increase(resultYears, passedYears, yearInterval), 5);
        const monthInterval = setInterval(() => increase(resultMonths, passedMonths, monthInterval), 50);
        const dayInterval = setInterval(() => increase(resultDays, passedDays, dayInterval), 50);

        const increase = (result, end,  interval) => {
            if (Number(result.innerHTML) === end) {
                clearInterval(interval)
            } else {
                result.innerHTML++;
            }
        }

        if (passedYears === 1 || passedYears === -1) {
            document.getElementById('tag-years').innerHTML = 'year';
        }
        if (passedMonths === 1 || passedMonths === -1) {
            document.getElementById('tag-months').innerHTML = 'month';
        }
        if (passedDays === 1 || passedDays === -1) {
            document.getElementById('tag-days').innerHTML = 'day';
        }
    }
}

const showError = (input, error) => {
    validData = false;
    const message = error === 'required' ? 'This field is required' : `Must be a valid ${input}`;
    document.getElementById(`${input}Error`).innerHTML = message;
    document.getElementById(`${input}Input`).style = 'border-color: hsl(0, 100%, 67%)';
    document.getElementById(`${input}Label`).style = 'color: hsl(0, 100%, 67%)';
}

const restoreStyle = (input) => {
    document.getElementById(`${input}Error`).innerHTML = '';
    document.getElementById(`${input}Input`).style = '';
    document.getElementById(`${input}Label`).style = '';
}
