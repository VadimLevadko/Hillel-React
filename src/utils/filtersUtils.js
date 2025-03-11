import { useSelector } from "react-redux";
import { selectAllProducts } from "@features/Products/products-slice.js"

export let min = 0;
export let max = 0;

export const getAllCategories = () => {
    const items = useSelector(selectAllProducts);

    return items.products.reduce((acc, item) => {
        if(!acc.includes(item.category)) {
            acc.push(item.category);
        }
        return acc;
    }, ["all"])
}

export const getMinAndMaxPrice = () => {
    const items = useSelector(selectAllProducts);

    if(!items.products.length) return;

    const arrItems = items.products.reduce((acc, item) => {
        acc.push(Number(item.price));
        return acc;
    }, [])

    min = Math.min(...arrItems);
    max = Math.max(...arrItems)

    return {
        min,
        max
    }
}