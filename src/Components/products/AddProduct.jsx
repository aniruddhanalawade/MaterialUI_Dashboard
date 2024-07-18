import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MenuItem from '@mui/material/MenuItem';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { db } from "../../firebase-config";
import { useAppStore } from '../../appStore';


export default function AddProduct({ CloseEvent }) {
    const [Name, SetName] = useState("");
    const [Price, SetPrice] = useState(0);
    const [Category, SetCategory] = useState("");
    const setRows = useAppStore((state) => state.setRows);
    const empCollectionRef = collection(db,"Products");


    const handleNameChange = (event) => {
        SetName(event.target.value);
    }

    const handlePriceChange = (event) => {
        SetPrice(event.target.value);
    }

    const handleCategoryChange = (event) => {
        SetCategory(event.target.value);
    }


    const createUser = async () => {
        await addDoc (empCollectionRef, {
            Name: Name,
            Price: Number(Price),
            Category: Category,
            Date: String(new Date()),
        });
        getUsers();
        CloseEvent();
        Swal.fire("Submitted!","Your File Has Been Submitted.","success");
    };

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      };

    const currencies = [
        {
            value: 'Mobile',
            label: 'Mobile',
        },
        {
            value: 'Electronics',
            label: 'Electronics',
        },
        {
            value: 'Tv',
            label: 'Tv',
        },
        {
            value: 'Washing Machine',
            label: 'Washing Machine',
        },
    ];

    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant="h5" align="center">
                Add Product
            </Typography>
            <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={CloseEvent}
            >
                <CloseIcon />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%" }}
                        value={Name}
                        onChange={handleNameChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%" }}
                        value={Price}
                        onChange={handlePriceChange}
                        type="number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CurrencyRupeeIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-basic"
                        label="Category"
                        select
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%" }}
                        value={Category}
                        onChange={handleCategoryChange}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}


                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center">
                        <Button variant="contained" onClick={createUser}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ m: 4 }} />
        </>
    )
}
