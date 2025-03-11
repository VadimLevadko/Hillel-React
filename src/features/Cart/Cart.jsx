import { useSelector } from "react-redux";
import { selectCart } from "./cart-slice.js"

import { Container, Typography, Button, Box } from "@mui/material";
import CartItem from "./CartItem.jsx"
import CartEmpty from "./CartEmpty.jsx";
import { Link } from "react-router";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Cart() {
    const cart = useSelector(selectCart);

    return (
        <Container maxWidth={false} sx={{ py: 4, bgcolor: "#F5F5F5" }}>
            <Box sx={{ maxWidth: 1400, mx: "auto", }}>
                <Link to="/">
                    <Button variant="contained" color="warning" startIcon={<ArrowBackIosIcon />} sx={{ mb: 1 }}>Return back</Button>
                </Link>
                <Typography variant="h4" gutterBottom sx={{ color: "#4E342E", fontWeight: "bold" }}>
                    Shopping Cart
                </Typography>
                {!cart.products.length ? (
                    <CartEmpty />
                ) : (
                    <div className="grid grid-cols-4 gap-y-4">
                        {cart.products.map((product) => (
                            <CartItem item={product} key={product.id} />
                        ))}
                    </div>
                )}
                {!!cart.products.length && (
                    <Box mt={4} textAlign="right">
                        <Typography variant="subtitle2" gutterBottom sx={{ color: "#4E342E", fontWeight: "bold" }}>
                            {cart.fullPrice.toFixed(2)}$
                        </Typography>
                        <Link to="/checkout">
                            <Button variant="contained" sx={{ bgcolor: "#FF7043", '&:hover': { bgcolor: "#E64A19" } }}>
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </Box>
                )}
            </Box>
        </Container>
    )
}