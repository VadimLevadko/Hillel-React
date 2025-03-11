import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addProductCart, selectCart } from "@features/Cart/cart-slice.js";
import { selectAllProducts, getSingleProduct } from "@features/Products/products-slice.js"

import Loading from "@components/Loading"
import { Container, Card, CardMedia, Typography, Rating, Button, Box } from "@mui/material";
import { Link } from "react-router"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductItem from "./ProductItem.jsx";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SingleProduct.scss'

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BeenhereIcon from "@mui/icons-material/Beenhere";

export default function SingleProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [id]);

    const { loading, singleProduct: product, products } = useSelector(selectAllProducts);
    const cart = useSelector(selectCart)
    if(loading || !product) return <Loading />;

    const isProductDeclared = cart.usedId.includes(product.id);

    const handleClick = () => {
        if(!isProductDeclared) {
            dispatch(addProductCart(product))
        }
        navigate("/cart")
    }

    return (
        <>
            <Container maxWidth="md" sx={{ py: 5 }}>
                <Link to="/">
                    <Button variant="contained" color="warning" startIcon={<ArrowBackIosIcon />} sx={{ mb: 1 }}>Return back</Button>
                </Link>
                <Card sx={{ borderRadius: "16px", boxShadow: 6, bgcolor: "#2d2d2d", color: "white" }}>
                    <Box container sx={{ display: "flex" }}>
                        <Box sx={{ backgroundColor: "#FFF", display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "40%", width: "100%", p: 3 }}>
                            <CardMedia component="img" image={product.image} alt={product.title} sx={{ maxHeight: 400, objectFit: "contain" }} />
                        </Box>
                        <Box sx={{ p: 4, display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "60%", width: "100%" }}>
                            <Box>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>{product.title}</Typography>
                                <Typography variant="subtitle1" color="orange" sx={{ mb: 2 }}>{product.category.toUpperCase()}</Typography>
                                <Rating value={product.rating.rate} precision={0.1} readOnly sx={{ mb: 1 }} />
                                <Typography variant="body1" color="white" sx={{ mb: 3 }}>{product.description}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4" color="orange" fontWeight="bold">${product.price}</Typography>
                                <Button onClick={handleClick} variant="contained" color="warning" size="large" startIcon={isProductDeclared ? <BeenhereIcon /> : <ShoppingCartIcon />} sx={{ mt: 2, borderRadius: "25px", fontSize: "1.2rem" }}>{isProductDeclared ? "Already in Cart" : "Buy now"}</Button>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Container>
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-[40px] font-bold uppercase">See also</h2>
                <Swiper
                    className="swiper-container"
                    spaceBetween={0}
                    slidesPerView={3}
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {products.filter(el => el.category === product.category && el.id !== product.id).map(item => {
                        return (
                            <SwiperSlide>
                                <ProductItem content={item} key={item.id} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}