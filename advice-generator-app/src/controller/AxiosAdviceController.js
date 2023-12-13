import axios from "axios";

export const getAdvice = async () => {
    let result = {};
    await axios.get('https://api.adviceslip.com/advice')
        .then(r => result = r.data.slip)
        .catch(e => console.log(e))
    return result;
}