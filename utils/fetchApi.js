import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f84722c221msh5baf27ed726c7dfp140addjsnf4a3c15df110',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}