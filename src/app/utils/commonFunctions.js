import { DATA_API } from "../../config.js";

export const getData = async () => {
    return fetch(DATA_API)
        .then(res => res.json())
        .then(data => data);
}