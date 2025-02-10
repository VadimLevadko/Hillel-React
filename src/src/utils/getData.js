const API_URL = 'https://jsonplaceholder.typicode.com/'

export default function getData({ path, setValue, setLoading }) {
    fetch(`${API_URL}/${path}`)
        .then(res => res.json())
        .then(data => setValue(data))
        .catch(err => console.log(`Oops! Something went wrong: ${err}`))
        .finally(() => {
            if(setLoading) setLoading(false);
        })
}