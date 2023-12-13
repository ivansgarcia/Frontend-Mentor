let rating;

const setRating = (element) => {
    rating = element.innerText;
    const otherElements = document.getElementsByClassName('btn-number');
    Array.from(otherElements).forEach(x => x.classList.remove('selected'));
    element.classList.add('selected');
}

const submitRating = () => {
    if (rating) {
        const containers = Array.from(document.getElementsByClassName('container'));
        containers[0].classList.remove('container-flex');
        containers[0].classList.add('hidden');
        containers[1].classList.remove('hidden');
        containers[1].classList.add('container-flex');

        document.getElementById('result').innerText = `You selected ${rating} out of 5`;
        console.log(containers);
        // document.getElementsByClassName('container')[1].style.display = 'block';
    }
}