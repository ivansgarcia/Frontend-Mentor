let subscribed = false;
            const onSuccess = () => {
                document.getElementById('main').style.display = 'none';
                document.getElementById('success-main').style.display = 'flex';
                const subEmail = document.getElementById('email').value;
                document.getElementById('span-email').innerText = subEmail;
            };

            const onSubmit = () => {
                if (subscribed) {
                    window.location = './index.html';
                } else {
                    const inputEmail = document.getElementById('email');
                    if (!inputEmail.value.includes('@') || !inputEmail.value) {
                        console.log('error');
                        document.getElementById('error').innerHTML =
                            'Valid email required';
                        inputEmail.classList.add('badMail');
                    } else {
                        console.log('ok');
                        onSuccess();
                        subscribed = true;
                    }
                }
            };

            const restoreStyle = () => {
                const inputEmail = document.getElementById('email');
                inputEmail.classList.remove('badMail');
                document.getElementById('error').innerHTML = '';
            };