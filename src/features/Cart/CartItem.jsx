import { useDispatch } from "react-redux";
import { removeProductCart, increaseCount, decreaseCount } from "./cart-slice.js"

import { Box, Card, CardContent, CardMedia, IconButton, Typography, Button } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    const { title, description, image, id, price, count } = item || {};

    const handleDelete = () => {
        return dispatch(removeProductCart({id, price, count}))
    }
    const handleIncreaseCount = () => {
        return dispatch(increaseCount({id}))
    }
    const handleDecreaseCount = () => {
        return dispatch(decreaseCount({id}))
    }

    return (
        <Card sx={{ width: 300, boxShadow: 6, borderRadius: 3, bgcolor: "#FFF3E0" }}>
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ height: 200, objectFit: "contain", bgcolor: "white" }}
            />
            <CardContent>
                <Typography className={"line-clamp-[2]"} variant="h6" sx={{ fontWeight: "bold", color: "#8D5524", lineHeight: "1.4", minHeight: "56px" }}>
                    {title}
                </Typography>
                <Typography className={"line-clamp-[3]"} variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                    {description}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography fontWeight="bold" variant="h6" sx={{ color: "#D84315" }}>${price.toFixed(2)}</Typography>
                    <Box display="flex" alignItems="center">
                        <Button onClick={handleDecreaseCount} color="warning" size="small" sx={{ fontSize: 20 }}>-</Button>
                        <Typography>{count}</Typography>
                        <Button onClick={handleIncreaseCount} color="warning" size="small" sx={{ fontSize: 20 }}>+</Button>
                    </Box>
                    <IconButton onClick={handleDelete} color="error">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    )
}