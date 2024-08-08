import React, { useEffect, useState } from 'react'
import { Button, FormControl, IconButton, TextField } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { FormProvider as Form, useForm } from "react-hook-form"; // Import FormProvider and useForm
import './SearchUser.scss';

const FormProvider = ({ children, onSubmit, methods , ...rest }) => (
    <Form {...methods}>
         <form data-testid="form" onSubmit={onSubmit} {...rest}>{children}</form>
    </Form>
);


export default function SearchUser() {
    const methods = useForm(); 

    const {
        register,
        handleSubmit,
        formState: { errors },setError
        } = methods;

    const onSubmit = handleSubmit(async(data) =>{
        console.log(data)
    })

    return (
        <div className='searchpage'>
            <FormProvider methods={methods} onSubmit={(onSubmit)} style={{ display: 'flex', width: '300px',height: "40px", alignItems: "center" }}>
                <TextField
                    fullWidth
                    id="standard-bare"
                    variant="outlined"
                    type="text"
                    placeholder='Search'
                    {...register("text")}
                    InputProps={{endAdornment: <SearchOutlined />}}
                />
            </FormProvider>
        </div>
    );
}
