import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectCurrentCategory, setFilter, setPrice, clearFilter } from "@features/Filter/filter-slice.jsx";
import { getAllCategories, getMinAndMaxPrice } from "@utils/filtersUtils.js"

import { Box, Typography, List, ListItem, Radio, RadioGroup , TextField, Button } from "@mui/material"

import CategoryIcon from "@mui/icons-material/Category";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function Filter() {
    const dispatch = useDispatch();

    const [currentPrice, setCurrentPrice] = useState({
        min: 0,
        max: 0
    })

    const allCategories = getAllCategories();
    const currentCategory = useSelector(selectCurrentCategory)
    const { min, max } = getMinAndMaxPrice();

    useEffect(() => {
        setCurrentPrice({
            min: !isFinite(min) ? 0 : min,
            max: !isFinite(max) ? 0 : max,
        })

        dispatch(setPrice({
            min: !isFinite(min) ? 0 : min,
            max: !isFinite(max) ? 0 : max,
        }))
    }, [min, max])

    const handleSetFilter = (event) => {
        dispatch(setFilter(event.target.value));
    }

    const handleClear = () => {
        setCurrentPrice({
            min: min,
            max: max,
        })

        dispatch(clearFilter());
    }

    const handleApplyPriceFilter = () => {
        const prices = document.querySelectorAll("[data-min-price] input, [data-max-price] input")

        dispatch(setPrice({
            min: Number(prices[0].value),
            max: Number(prices[1].value),
        }))
    }

    return (
        <aside className="max-w-[240px] w-full h-[100vh] bg-[#2d2d2d] shadow">
            <Box sx={{ color: "white", p: 3 }}>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Filters</Typography>
                <Box sx={{ mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ display: "flex", alignItems: "center" }}>
                        <CategoryIcon sx={{ mr: 1, color: "orange" }} /> Categories
                    </Typography>
                    <List>
                        <RadioGroup>
                            {!!allCategories.length && allCategories.map((category, i) => {
                                return (
                                    <ListItem onChange={handleSetFilter} sx={{ p: 0, textTransform: "capitalize", fontSize: 14 }} key={i}>
                                        <Radio checked={currentCategory === category} value={category}
                                               sx={{
                                                   color: "orange",
                                                   '&.Mui-checked': {
                                                        color: "green",
                                                   },
                                               }} />
                                        {category}
                                    </ListItem>
                                )
                            })}
                        </RadioGroup>
                    </List>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ display: "flex" }}>
                        <AttachMoneyIcon sx={{ mr: 1, color: "orange" }} /> Price range
                    </Typography>
                    <Box sx={{ mb: 1, }}>
                        <TextField
                            data-min-price
                            onChange={(event) => setCurrentPrice({...currentPrice, min: Number(event.target.value)})}
                            type="text"
                            variant="outlined"
                            size="small"
                            value={currentPrice.min}
                            sx={{ bgcolor: "white", borderRadius: 1, mb: 1 }} />
                        <TextField
                            data-max-price
                            onChange={(event) => setCurrentPrice({...currentPrice, max: Number(event.target.value)})}
                            type="text"
                            variant="outlined"
                            size="small"
                            value={currentPrice.max}
                            sx={{ bgcolor: "white", borderRadius: 1 }} />
                    </Box>
                    <Button onClick={handleApplyPriceFilter} variant="contained" color="warning" sx={{ width: "100%", mb: 3, }}>Apply</Button>
                    <hr/>
                    <Button onClick={handleClear} variant="contained" color="secondary" sx={{ width: "100%", display: "flex", alignItems: "center", gap: 1, mt: 3, }}>
                        <RestartAltIcon /> Clear filter
                    </Button>
                </Box>
            </Box>
        </aside>
    );
}