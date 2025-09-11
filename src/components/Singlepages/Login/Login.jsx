import React, {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {TextField, Button, CircularProgress, Checkbox, FormControlLabel, Snackbar, Alert} from "@mui/material";
import {useDispatch} from "react-redux";
import {login} from "../../../store/actions/clientActions.js";
import {useHistory, useLocation} from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage.jsx";

// customer@commerce.com
// store@commerce.com
// admin@commerce.com

export default function LoginForm() {
    const dispatch = useDispatch();
    const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        defaultValues: {email: "", password: "", remember: false}
    });
    const history = useHistory();
    const location = useLocation();
    const from = location.state?.from || "/";
    const [toast, setToast] = useState({open: false, message: ""});
    const [_, setUserLS] = useLocalStorage("user", null);
    const onSubmit = async (data) => {
        const {success, payload, message} = await dispatch(login({
            email: data.email,
            password: data.password
        }, data.remember));
        if (success) {
            setUserLS(payload);
            history.push(from);
        } else setToast({open: true, message});
    };

    return (
        <div className="flex justify-center gap-5 my-20">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[300px]">
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "Email zorunlu",
                        pattern: {value: /^\S+@\S+\.\S+$/i, message: "Geçerli email girin"}
                    }}
                    render={({field}) => (
                        <TextField {...field} label="Email" variant="outlined" error={!!errors.email}
                                   helperText={errors.email?.message} fullWidth/>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{required: "Şifre zorunlu"}}
                    render={({field}) => (
                        <TextField {...field} label="Password" type="password" variant="outlined"
                                   error={!!errors.password} helperText={errors.password?.message} fullWidth/>
                    )}
                />
                <Controller
                    name="remember"
                    control={control}
                    render={({field}) => (
                        <FormControlLabel control={<Checkbox checked={!!field.value}
                                                             onChange={(e) => field.onChange(e.target.checked)}/>}
                                          label="Beni hatırla"/>
                    )}
                />
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                    {isSubmitting ? <CircularProgress size={20}/> : "Giriş Yap"}
                </Button>
            </form>

            <Snackbar
                open={toast.open}
                onClose={() => setToast(s => ({...s, open: false}))}
                autoHideDuration={4000}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert onClose={() => setToast(s => ({...s, open: false}))} severity="error" variant="filled">
                    {toast.message}
                </Alert>
            </Snackbar>
        </div>
    );
}
