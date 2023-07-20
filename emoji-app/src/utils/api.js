import axios from 'axios';

const URL = "https://emojihub.yurace.pro/api/all";

export const fetchApiData = () => {
    axios.get(URL)
        .then((res) => {
            console.log("axios call:", res);
            const { data } = res;
            return data;
        }).catch((err) => {
            console.log(err);
        })
}