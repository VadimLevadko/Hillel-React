import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addProductCart, selectCart } from "@features/Cart/cart-slice.js"

import { Card, CardContent, CardMedia, Typography, CardActions, Button, Rating, Box, IconButton } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BeenhereIcon from '@mui/icons-material/Beenhere';

export default function ProductItem({ content }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id, title, description, price, rating, image } = content || {};
    const cart = useSelector(selectCart)
    const isProductDeclared = cart.usedId.includes(id);

    const handleClick = () => {
        return navigate(`/product-details/${id}`, { replace: true });
    }
    const handleNavigateToCart = (event) => {
        event.stopPropagation();
        navigate("/cart");
    }
    const handleAddToCart = (event) => {
        event.stopPropagation();

        return dispatch(addProductCart(content));
    }

    return (
        <Card onClick={handleClick} sx={{
            maxWidth: 360,
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "#FAF3E0",
            boxShadow: 6,
            cursor: "pointer",
            transition: "0.3s",
            '&:hover': { boxShadow: 12, transform: "scale(1.02)" }
        }}>
            <CardMedia
                component="img"
                className={"h-[240px]"}
                image={image}
                alt={title}
                sx={{ objectFit: "contain", bgcolor: "white", p: 2 }}
            />
            <CardContent>
                <Typography className={"line-clamp-[2]"} variant="h6" sx={{ fontWeight: "bold", color: "#8D5524", lineHeight: "1.4", minHeight: "56px" }}>
                    {title}
                </Typography>
                <Typography className={"line-clamp-[2]"} variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                    {description}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#D95D39" }}>
                        ${price}
                    </Typography>
                    <Rating value={rating.rate} precision={0.1} readOnly />
                </Box>
                <Typography variant="caption" color="text.secondary">
                    ({rating.count} reviews)
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between", pr: 2, pb: 2, pl: 2, }}>
                <IconButton sx={{ color: "#D95D39" }}>
                    <FavoriteBorderIcon />
                </IconButton>
                <Button
                    onClick={isProductDeclared ? handleNavigateToCart : handleAddToCart}
                    sx={{
                        bgcolor: "#D95D39",
                        color: "white",
                        '&:hover': { bgcolor: "#B84327" }
                    }}
                    variant="contained"
                    startIcon={isProductDeclared ? <BeenhereIcon /> : <ShoppingCartIcon /> }
                >
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    )
}