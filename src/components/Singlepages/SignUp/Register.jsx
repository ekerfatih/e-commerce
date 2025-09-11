import React, {useState} from "react";
import {
    TextField, Button, FormControl, InputLabel, OutlinedInput,
    InputAdornment, IconButton, MenuItem, Select, FormHelperText, CircularProgress, Alert
} from "@mui/material";
import {useForm, Controller} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useAxios from "../Helper/useAxios.jsx";
import axios from "axios";
import {useHistory, useLocation} from "react-router-dom";

const trPhone = /^(?:\+90|0)?(?:5\d{9}|[2-4]\d{9})$/;
const trIban = /^TR\d{24}$/;
const taxPattern = /^T\d{4}V\d{6}$/;

const schema = z.object({
    name: z.string().min(3, "Ad en az 3 karakter olmalıdır."),
    email: z.string().email("Geçerli bir e-posta giriniz."),
    password: z.string()
        .min(8, "Şifre en az 8 karakter olmalıdır.")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            "Şifre en az bir küçük harf, bir büyük harf, bir rakam ve bir özel karakter içermelidir."
        ),
    confirmPassword: z.string().min(8, "Şifre tekrarı en az 8 karakter olmalıdır."),
    role_id: z.string().min(1, "Rol seçiniz."),
    store_name: z.string().optional(),
    store_phone: z.string().optional(),
    tax_no: z.string().optional(),
    bank_account: z.string().optional()
}).refine((d) => d.password === d.confirmPassword, {
    path: ["confirmPassword"],
    message: "Şifreler eşleşmiyor"
}).superRefine((d, ctx) => {
    if (d.role_id === "2") {
        if (!d.store_name || d.store_name.length < 3) ctx.addIssue({
            path: ["store_name"],
            code: "custom",
            message: "Mağaza adı en az 3 karakter olmalıdır."
        });
        if (!d.store_phone || !trPhone.test(d.store_phone)) ctx.addIssue({
            path: ["store_phone"],
            code: "custom",
            message: "Geçerli bir Türkiye telefon numarası giriniz."
        });
        if (!d.tax_no || !taxPattern.test(d.tax_no)) ctx.addIssue({
            path: ["tax_no"],
            code: "custom",
            message: "Vergi No formatı 'TXXXXVXXXXXX' olmalıdır."
        });
        if (!d.bank_account || !trIban.test(d.bank_account)) ctx.addIssue({
            path: ["bank_account"],
            code: "custom",
            message: "Geçerli bir Türkiye IBAN giriniz."
        });
    }
});

export default function KayitFormu() {
    const history = useHistory();
    const location = useLocation();
    const from = location.state?.from || "/";

    const {control, handleSubmit, formState: {errors}, watch} = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role_id: "3",
            store_name: "",
            store_phone: "",
            tax_no: "",
            bank_account: ""
        }
    });

    const isStore = watch("role_id") === "2";
    const [showPassword, setShowPassword] = useState(false);
    const {data: roles = [], loading} = useAxios("/roles");
    const [submitting, setSubmitting] = useState(false);
    const [serverError, setServerError] = useState("");

    const onSubmit = async (v) => {
        setServerError("");
        setSubmitting(true);

        const payload = isStore
            ? {
                name: v.name,
                email: v.email,
                password: v.password,
                role_id: v.role_id,
                store: {
                    name: v.store_name,
                    phone: v.store_phone,
                    tax_no: v.tax_no,
                    bank_account: v.bank_account
                }
            }
            : {
                name: v.name,
                email: v.email,
                password: v.password,
                role_id: v.role_id
            };

        try {
            await axios.post("https://workintech-fe-ecommerce.onrender.com/signup", payload);
            history.push(from, {warn: "Hesabınızı aktifleştirmek için e-postadaki bağlantıya tıklamanız gerekmektedir!"});
        } catch (e) {
            setServerError(e?.response?.data?.message || "Kayıt başarısız oldu");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={"font-montserrat flex flex-col"}>
            <h3 className={"text-forty mx-auto font-bold"}>Kayıt Ol</h3>
            <div className="w-8/12 flex flex-col mx-auto items-center py-20">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4 w-full">

                    {serverError ? <Alert severity="error" sx={{width: "30ch"}}>{serverError}</Alert> : null}

                    <Controller name="name" control={control} render={({field}) => (
                        <TextField sx={{width: "30ch"}} label="Ad Soyad" variant="outlined" {...field}
                                   error={!!errors.name} helperText={errors.name?.message}/>
                    )}/>

                    <Controller name="email" control={control} render={({field}) => (
                        <TextField sx={{width: "30ch"}} label="E-posta" variant="outlined" {...field}
                                   error={!!errors.email} helperText={errors.email?.message}/>
                    )}/>

                    <Controller name="password" control={control} render={({field}) => (
                        <FormControl sx={{width: "30ch"}} variant="outlined" error={!!errors.password}>
                            <InputLabel htmlFor="pwd">Şifre</InputLabel>
                            <OutlinedInput
                                {...field}
                                id="pwd"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(s => !s)} edge="end">
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Şifre"
                            />
                            <FormHelperText>{errors.password?.message}</FormHelperText>
                        </FormControl>
                    )}/>

                    <Controller name="confirmPassword" control={control} render={({field}) => (
                        <TextField sx={{width: "30ch"}} label="Şifre Tekrar" type="password"
                                   variant="outlined" {...field}
                                   error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message}/>
                    )}/>

                    <Controller name="role_id" control={control} render={({field, fieldState}) => (
                        <FormControl sx={{width: "30ch"}} fullWidth error={!!fieldState.error}>
                            <InputLabel id="role-label">Rol</InputLabel>
                            <Select
                                labelId="role-label"
                                id="role"
                                label="Rol"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value)}
                                onBlur={field.onBlur}
                                inputRef={field.ref}
                                disabled={loading}
                            >
                                {roles.map((r) => (
                                    <MenuItem key={r.id} value={String(r.id)}>{r.name}</MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>{fieldState.error?.message}</FormHelperText>
                        </FormControl>
                    )}/>

                    {isStore && (
                        <>
                            <Controller name="store_name" control={control} render={({field}) => (
                                <TextField sx={{width: "30ch"}} label="Mağaza Adı" variant="outlined" {...field}
                                           error={!!errors.store_name} helperText={errors.store_name?.message}/>
                            )}/>
                            <Controller name="store_phone" control={control} render={({field}) => (
                                <TextField sx={{width: "30ch"}} label="Mağaza Telefonu" variant="outlined" {...field}
                                           error={!!errors.store_phone} helperText={errors.store_phone?.message}/>
                            )}/>
                            <Controller name="tax_no" control={control} render={({field}) => (
                                <TextField sx={{width: "30ch"}} label="Vergi No" variant="outlined" {...field}
                                           error={!!errors.tax_no} helperText={errors.tax_no?.message}/>
                            )}/>
                            <Controller name="bank_account" control={control} render={({field}) => (
                                <TextField sx={{width: "30ch"}} label="Mağaza IBAN" variant="outlined" {...field}
                                           error={!!errors.bank_account} helperText={errors.bank_account?.message}/>
                            )}/>
                        </>
                    )}

                    <Button type="submit" variant="contained" disabled={submitting} sx={{width: "30ch"}}>
                        {submitting ? <CircularProgress size={20}/> : "Kaydol"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
