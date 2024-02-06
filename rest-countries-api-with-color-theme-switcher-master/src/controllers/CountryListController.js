import axios from "axios";

export const getCountryList = async () => {
    try {
        return await axios.get('https://restcountries.com/v3.1/all');
    } catch (error) {
        console.log(error);
    }
}

export const findByCode = async (codes) => {
    try {
        return await axios.get('https://restcountries.com/v3.1/alpha?codes=' + codes.join(','))
    }
    catch (error) {
        console.log(error);
    }
}