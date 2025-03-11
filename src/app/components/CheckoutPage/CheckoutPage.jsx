import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@features/Cart/cart-slice.js"
import { selectCart } from "@features/Cart/cart-slice.js";
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Typography, Card, CardContent, Box, CardMedia } from "@mui/material";
import { Link } from "react-router";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    const initialValues = {
        name: "",
        surname: "",
        phone: "+380",
        email: "",
        address: "",
        delivery: "standard",
        payment: "card",
    }

    const [isSubmit, setIsSubmit] = useState(false)

    const [formData, setFormData] = useState({
        ...initialValues,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData(initialValues);
        setIsSubmit(true)
        dispatch(clearCart())
    }

    return (
        <div className="max-w-[1400px] mx-auto py-[1.5rem]">
            <Stack sx={{ width: '100%', mb: 2, }} spacing={2} hidden={!isSubmit}>
                <Alert
                    iconMapping={{
                        success: <CheckCircleOutlineIcon fontSize="inherit" />,
                    }}
                >
                    The order has been successfully placed! Expect the parcel at the point of delivery in the coming days
                </Alert>
            </Stack>
            <Link to="/cart">
                <Button variant="contained" color="warning" startIcon={<ArrowBackIosIcon />} sx={{ mb: 1 }}>Return back</Button>
            </Link>
            <div className="grid grid-cols-2">
                <div className="p-6 max-w-2xl bg-white shadow-md rounded-lg">
                    <Typography fontWeight="bold" variant="h5" className="text-center mb-4 text-orange-600">
                        Checkout
                    </Typography>
                    <form data-checkout-form="" onSubmit={handleSubmit}>
                        <Card className="mb-4">
                            <CardContent>
                                <Typography variant="h6" className="mb-2">
                                    <PersonIcon className="mr-2"/> Personal Info
                                </Typography>
                                <Box sx={{display: "flex", gap: 2}}>
                                    <TextField label="First name" name="name" margin="normal" sx={{flex: 1}} value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value})} required/>
                                    <TextField label="Last name" name="surname" margin="normal" sx={{flex: 1}} required value={formData.surname} onChange={(event) => setFormData({...formData, surname: event.target.value})} />
                                </Box>
                                <TextField type="tel" label="Phone number" name="phone" fullWidth margin="normal" required value={formData.phone} onChange={(event) => setFormData({...formData, phone: event.target.value})} />
                                <TextField type="email" label="Email" name="email" fullWidth margin="normal" required value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value})} />
                            </CardContent>
                        </Card>
                        <Card className="mb-4">
                            <CardContent>
                                <Typography variant="h6" className="mb-2">
                                    <LocalShippingIcon className="mr-2"/> Delivery address
                                </Typography>
                                <TextField label="Address" name="address" fullWidth margin="normal" required value={formData.address} onChange={(event) => setFormData({...formData, address: event.target.value})} />
                                <RadioGroup name="delivery" value={formData.delivery} onChange={(event) => setFormData({...formData, delivery: event.target.value})} >
                                    <FormControlLabel value="standard" control={<Radio/>} label="Standart delivery"/>
                                    <FormControlLabel value="express" control={<Radio/>} label="Express delivery"/>
                                </RadioGroup>
                            </CardContent>
                        </Card>
                        <Card className="mb-4">
                            <CardContent>
                                <Typography variant="h6" className="mb-2">
                                    <PaymentIcon className="mr-2"/> Payment method
                                </Typography>
                                <RadioGroup name="payment" value={formData.payment} onChange={(event) => setFormData({...formData, payment: event.target.value})}>
                                    <FormControlLabel value="card" control={<Radio/>} label="Bank card"/>
                                    <FormControlLabel value="cash" control={<Radio/>} label="Cash on receipt"/>
                                    <FormControlLabel value="paypal" control={<Radio/>} label="PayPal"/>
                                </RadioGroup>
                            </CardContent>
                        </Card>
                        <Button disabled={Object.values(formData).includes("")} type="submit" variant="contained" fullWidth color="warning">
                            Confirm the order
                        </Button>
                    </form>
                </div>
                <Card sx={{
                    maxWidth: 480,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    px: 1,
                    py: 2,
                    maxHeight: "fit-content"
                }}>
                    {cart.products.map((el) => {
                        const {image, title, count, price} = el || {};

                        return (
                            <Box sx={{display: "flex",}}>
                                <CardMedia
                                    component="img"
                                    image={image}
                                    alt={title}
                                    sx={{height: 100, objectFit: "contain", bgcolor: "white", maxWidth: 100}}
                                />
                                <CardContent
                                    sx={{display: "flex", gap: 2, maxWidth: "100%", width: "100%", justifyContent: "space-between"}}>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{color: "#8D5524", lineHeight: "1.4", mb: 1}}>
                                            {title}
                                        </Typography>
                                        <Typography variant="subtitle2" sx={{color: "#8D5524", lineHeight: "1.4"}}>
                                            count: {count}
                                        </Typography>
                                    </Box>
                                    <Typography variant="h6" fontWeight="bold"
                                                sx={{color: "#8D5524", lineHeight: "1.4"}}>
                                        {price * count}$
                                    </Typography>
                                </CardContent>
                            </Box>
                        )
                    })}
                    <hr color="warning"/>
                    <Box sx={{display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between"}}>
                        <Typography variant="subtitle2" sx={{color: "#8D5524", lineHeight: "1.4"}}>
                            {cart.products.reduce((acc, item) => {
                                acc += item.count
                                return acc
                            }, 0)} products for the amount of
                        </Typography>
                        <Typography color="warning" fontWeight="bold" variant="h6" sx={{lineHeight: "1.4"}}>
                            {cart.fullPrice.toFixed(2)}$
                        </Typography>
                    </Box>
                </Card>
            </div>
        </div>
    );
}
