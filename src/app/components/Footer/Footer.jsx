import { Container, Typography, Box, Link } from "@mui/material";

import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: "#2d2d2d", color: "white", py: 4 }}>
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    ShopZone
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    <Link href="https://t.me/VL7940" color="inherit" target="_blank">
                        <TelegramIcon fontSize="large" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/vadim-levadko-bb3a79345/" color="inherit" target="_blank">
                        <LinkedInIcon fontSize="large" />
                    </Link>
                    <Link href="https://www.instagram.com/_vl7940_/" color="inherit" target="_blank">
                        <InstagramIcon fontSize="large" />
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}