import { useNavigate } from "react-router";

import { Box, Typography, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function EmptyCartMessage() {
    const navigate = useNavigate()

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="50vh"
            textAlign="center"
        >
            <ShoppingCartOutlinedIcon sx={{ fontSize: 80, color: "gray" }} />
            <Typography variant="h5" color="textSecondary" mt={2}>
                Your cart is empty
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={1}>
                Add some products to your cart to proceed with the checkout.
            </Typography>
            <Button
                variant="contained"
                color="warning"
                sx={{ mt: 3 }}
                onClick={() => navigate("/")}
            >
                Go to Shop
            </Button>
        </Box>
    );
};