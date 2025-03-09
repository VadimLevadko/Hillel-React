import { Container, Typography, Box } from "@mui/material";

import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: "#2d2d2d", color: "white", py: 4, mt: 5 }}>
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    ShopZone
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    <TelegramIcon fontSize="large" />
                    <LinkedInIcon fontSize="large" />
                    <InstagramIcon fontSize="large" />
                </Box>
            </Container>
        </Box>
    )
}