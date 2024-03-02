import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister>  = (props: IPropsRegister): JSX.Element => {
    const {setEmail, setPassword, setRepeatPassword, setFirstName, setUsername, navigate} = props
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Реєстрація
            </Typography>
            <Typography variant="body1" marginBottom={5} fontFamily='Poppins' textAlign='center'>
                Введіть дані для реєстрації
            </Typography>
            <TextField fullWidth={true} margin='normal' label="Імя" variant="outlined" placeholder='Введіть ваше Імя' onChange={(e) => setFirstName(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label="username" variant="outlined" placeholder='Введіть ваш username' onChange={(e) => setUsername(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введіть ваш email' onChange={(e) => setEmail(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введіть ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Повторість ваш пароль' onChange={(e) => setRepeatPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%', }} variant="contained">Реєстрація</Button>
            <Typography variant="body1"  sx={{fontFamily:'Poppins', }}>
                У вас є аккаунт?<span className='incitingText' onClick={() => navigate('/login')}>Авторизація</span>
            </Typography>

        </>
    );
};

export default RegisterPage;