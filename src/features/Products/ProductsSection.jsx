import { useSelector } from 'react-redux';
import { selectVisibleProducts } from "@features/Filter/filter-slice.jsx";

import ProductItem from './ProductItem.jsx'

export default function ProductsSection() {
    const products = useSelector(selectVisibleProducts);

    return (
        <section className="products-section">
            <div className="max-w-full py-[10px] px-[20px]">
                {!!products.length && (
                    <div className="grid grid-cols-5 gap-4">
                        {products.map((product) => {
                            return <ProductItem content={product} key={product.id} />
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}
