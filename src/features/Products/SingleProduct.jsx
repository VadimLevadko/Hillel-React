import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllProducts, getSingleProduct } from "@features/Products/products-slice.js"

import Loading from "@components/Loading"
import { Container, Card, CardMedia, Typography, Rating, Button, Box } from "@mui/material";
import { Link } from "react-router"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function SingleProduct() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, []);

    const { loading, error, singleProduct: product } = useSelector(selectAllProducts);

    if(loading || !product) return <Loading />;

    return (
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
                            <Button variant="contained" color="warning" size="large" startIcon={<ShoppingCartIcon />} sx={{ mt: 2, borderRadius: "25px", fontSize: "1.2rem" }}>Buy Now</Button>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Container>
    )
}