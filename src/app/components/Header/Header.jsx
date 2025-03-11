import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "@features/Cart/cart-slice.js";
import { toggleVisibility } from "@features/Filter/filter-slice.jsx";

import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import Badge, { badgeClasses } from '@mui/material/Badge';
import { Link } from "react-router";
import { styled } from "@mui/joy";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function Header() {
    const dispatch = useDispatch();
    const products = useSelector(selectCart)

    const handleToggleMenu = () => {
        return dispatch(toggleVisibility())
    }

    return (
        <AppBar position="sticky" sx={{ bgcolor: "#2d2d2d", boxShadow: 6, zIndex: 1, }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton onClick={handleToggleMenu} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: "orange" }}>
                            ShopZone
                        </Typography>
                    </Link>
                </Box>
                <Link to="/cart">
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                        <CartBadge badgeContent={products.usedId.length} color="warning" overlap="circular" />
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    )
}