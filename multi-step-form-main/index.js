let activeTag = 1;

const strawberryRed = 'hsl(354, 84%, 57%)';

const user = {
    name: '',
    email: '',
    phone: '',
    plan: 'Arcade',
    frequency: 'Monthly',
    addOns: [],
};

const options = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
    addOns: {
        online: {
            name: 'Online Service',
            price: 1,
        },
        larger: {
            name: 'Larger Storage',
            price: 2,
        },
        custom: {
            name: 'Custom Profile',
            price: 2,
        },
    },
};

// NAV
const navBtns = Array.from(document.getElementsByClassName('nav-btn'));
navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (user.name && user.email && user.phone && activeTag !== 5) {
            navBtns.forEach((x) => x.classList.remove('active'));
            btn.classList.add('active');
        }
    });
});

// TAG#1
const plans = document.getElementsByClassName('plan-option');
const plansElements = Array.from(plans);
plansElements.forEach((element) => {
    element.addEventListener('click', () => {
        plansElements.forEach((el) => el.classList.remove('selected'));
        element.classList.add('selected');
        user.plan = element.ariaLabel;
    });
});

//TAG#2
const frequency = document.getElementById('frequency-toggle');
const discounts = Array.from(document.getElementsByClassName('discount'));
const planPrice = Array.from(document.getElementsByClassName('price'));
const monthlySpan = document.getElementById('monthly');
monthlySpan.style.color = 'hsl(213, 96%, 18%)';
const yearlySpan = document.getElementById('yearly');
frequency.addEventListener('change', () => {
    if (frequency.checked === true) {
        user.frequency = 'Yearly';
        yearlySpan.style.color = 'hsl(213, 96%, 18%)';
        monthlySpan.style.color = '';
        discounts.forEach((el) => (el.style.display = 'block'));
        planPrice.forEach(
            (el, i) => (el.textContent = '$' + (9 + 3 * i) * 10 + '/yr')
        );
    } else {
        user.frequency = 'Monthly';
        yearlySpan.style.color = '';
        monthlySpan.style.color = 'hsl(213, 96%, 18%)';
        discounts.forEach((el) => (el.style.display = 'none'));
        planPrice.forEach(
            (el, i) => (el.textContent = '$' + (9 + 3 * i) + '/mo')
        );
    }
    const addOnsPrice = Array.from(
        document.getElementsByClassName('price-plus')
    );
    addOnsPrice.forEach(
        (el) =>
            (el.innerHTML =
                user.frequency === 'Monthly'
                    ? '+$' + el.ariaLabel + '/mo'
                    : '+$' + el.ariaLabel * 10 + '/yr')
    );
});

//TAG#3
const updateAddOns = (opt) => {
    if (opt.classList.contains('selected')) {
        opt.classList.remove('selected');
        opt.firstElementChild.classList.remove('selected');
        user.addOns = user.addOns.filter((x) => x != opt.ariaLabel);
    } else {
        opt.classList.add('selected');
        opt.firstElementChild.classList.add('selected');
        user.addOns.push(opt.ariaLabel);
    }
    user.addOns.sort().reverse();
};

//RESULT
const showResult = (actualTag) => {
    const resultList = document.getElementById('result');
    const firstLi = document.getElementById('first-li');
    const activePlan = document.getElementById('result-plan');
    activePlan.textContent = user.plan + ' (' + user.frequency + ')';
    const separator = document.getElementById('separator');
    const planPrice = document.getElementById('result-price');
    planPrice.innerHTML =
        user.frequency === 'Monthly'
            ? '$' + options[user.plan] + '/mo'
            : '$' + options[user.plan] * 10 + '/yr';
    resultList.innerHTML = '';
    resultList.appendChild(firstLi);
    resultList.appendChild(separator);
    user.addOns.forEach((opt) => {
        const addOnItem = document.createElement('li');
        addOnItem.className = 'result-addOn';
        const addOnItemText = document.createElement('span');
        addOnItemText.innerText = options.addOns[opt].name;
        const addOnItemPrice = document.createElement('span');
        addOnItemPrice.innerText =
            user.frequency === 'Monthly'
                ? '+$' + options.addOns[opt].price + '/mo'
                : '+$' + options.addOns[opt].price * 10 + '/yr';
        addOnItem.appendChild(addOnItemText);
        addOnItem.appendChild(addOnItemPrice);
        resultList.appendChild(addOnItem);
    });
    const totalPrice = document.getElementById('total-price');
    const price =
        options[user.plan] +
        user.addOns.reduce((x, y) => x + options.addOns[y].price, 0);
    totalPrice.innerHTML =
        user.frequency === 'Monthly'
            ? '+$' + price + '/mo'
            : '+$' + price * 10 + '/yr';

    console.log(actualTag);
    if (actualTag === undefined) {document.querySelector('div.tag-changer.outside > button.next').style.display = 'none';
    document.querySelector('div.tag-changer.outside > button.confirm-btn').style.display = 'initial';}
};

const nextTag = (actualTag) => {
    document.querySelector('div.tag-changer.outside > button.next').style.display = 'initial';
    document.querySelector('div.tag-changer.outside > button.confirm-btn').style.display = 'none';
    let validEmail = true;
    let validPhone = true;
    if (activeTag === 1) {
        const nameInput = document.getElementById('name');
        const errorName = document.getElementById('errorName');
        nameInput.addEventListener('focus', () => {
            nameInput.style = '';
            errorName.style.display = 'none';
        });
        if (!nameInput.value) {
            errorName.style.display = 'inline';
            nameInput.style = `border-color: ${strawberryRed}`;
        }

        const emailInput = document.getElementById('email');
        const errorEmail = document.getElementById('errorEmail');
        emailInput.addEventListener('focus', () => {
            emailInput.style = '';
            errorEmail.style.display = 'none';
        });
        validEmail = /\S+@\S+\.\S+/.test(emailInput.value);
        if (!emailInput.value) {
            errorEmail.style.display = 'inline';
            emailInput.style = `border-color: ${strawberryRed}`;
            errorEmail.innerText = 'This field is required';
        } else if (!validEmail) {
            errorEmail.style.display = 'inline';
            emailInput.style = `border-color: ${strawberryRed}`;
            errorEmail.innerText = 'Invalid email';
        }

        const phoneInput = document.getElementById('phone');
        const errorPhone = document.getElementById('errorPhone');
        phoneInput.addEventListener('focus', () => {
            phoneInput.style = '';
            errorPhone.style.display = 'none';
        });
        validPhone = /^[0-9]+$/.test(phoneInput.value);
        if (!phoneInput.value) {
            errorPhone.style.display = 'inline';
            phoneInput.style = `border-color: ${strawberryRed}`;
            errorPhone.innerText = 'This field is required';
        } else if (!validPhone) {
            errorPhone.style.display = 'inline';
            phoneInput.style = `border-color: ${strawberryRed}`;
            errorPhone.innerText = 'Invalid phone number';
        }
        user.name = document.getElementById('name').value;
        user.email = document.getElementById('email').value;
        user.phone = document.getElementById('phone').value;
    }

    if (activeTag === 3 || actualTag === 3) {
        showResult(actualTag);
    }

    if (
        user.name &&
        user.email &&
        user.phone &&
        activeTag !== 5 &&
        validEmail &&
        validPhone
    ) {
        document.getElementById(`tag${activeTag}`).style.display = 'none';
        activeTag = actualTag >= 0 ? actualTag : activeTag;
        activeTag++;
        document.getElementById(`tag${activeTag}`).style.display =
            'inline-block';
        navBtns.forEach((x) => x.classList.remove('active'));
        activeTag <= 4 && navBtns[activeTag - 1].classList.add('active');
        document.querySelector('div.tag-changer.outside > button.back').style.display = 'inline-block';
        if (activeTag === 1) {
            document.querySelector('div.tag-changer.outside > button.back').style.display = 'none';
        }
    }
};

const prevTag = () => {
    document.querySelector('div.tag-changer.outside > button.next').style.display = 'initial';
    document.querySelector('div.tag-changer.outside > button.confirm-btn').style.display = 'none';
    document.getElementById(`tag${activeTag}`).style.display = 'none';
    activeTag--;
    document.getElementById(`tag${activeTag}`).style.display = 'inline-block';
    navBtns.forEach((x) => x.classList.remove('active'));
    navBtns[activeTag - 1].classList.add('active');
    if (activeTag === 1) {
        document.querySelector('div.tag-changer.outside > button.back').style.display = 'none';
    }
};

const confirmSubscription = () => {
    document.querySelector('div.nav').classList.remove('enabled');
    document.querySelector('div.container').classList.add('completed');
    document.querySelector('div.tag-changer.outside').style.display = 'none';
    document.querySelector('body').style = 'height: 100vh';
    navBtns[3].classList.add('active');
    document.getElementById(`tag${activeTag}`).style.display = 'none';
    activeTag = 5;
    document.getElementById(`tag${activeTag}`).style.display = 'flex';
};