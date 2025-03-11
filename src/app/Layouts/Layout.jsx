import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "@features/Products/products-slice.js";

import Header from "@components/Header"
import ProductsSection from "@features/Products";
import Filter from "@features/Filter"
import SingleProduct from "@features/Products/SingleProduct.jsx";
import Cart from "@features/Cart"
import CheckoutPage from "@components/CheckoutPage/index.js";
import Footer from "@components/Footer"

export default function Layout() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ProductsSection />} />
                <Route path="product-details/:id" element={<SingleProduct />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Routes>
            <Filter />
            <Footer />
        </BrowserRouter>
    )
}