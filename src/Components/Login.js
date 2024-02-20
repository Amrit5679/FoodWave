import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup"; //For validation
import { useNavigate } from "react-router-dom";//To navigate to other router
import useLocalStorage from "../Hooks/useLocalStorage";

const schema= Yup.object().shape({
    email:Yup.string()
        .required("Email is a required feild")
        .email("Invalid Email format"),
    password: Yup.string().
         required("Password is a required feild")
         .min(8,"Password must be atleast 8 characters")
});

const Login = () => {
    const navigate= useNavigate();
    const [getLocalStorage,setLocalStorage]=useLocalStorage("user");
    useEffect(()=>{
        if(getLocalStorage?.token?.length===100){
            navigate(-1);
        }
    },[])
    
    function handleNavigate(values) {
        let index=values?.email.indexOf('@');
        let name=values?.email.slice(0,index);
        // alert(values.email);
        
        const genRandomStringNthChar = () => {
            return [...Array(100)]
              .map(() => Math.random().toString(36)[2])
              .join("");
        };
        setLocalStorage({
            ...getLocalStorage,
            "userName": name,
            "token":genRandomStringNthChar()
        })
        navigate(-1);
    }
    if (getLocalStorage?.token?.length === 100) return null;
    return(
        <>
            <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
                handleNavigate(values);
            }} 
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <div className="login-container">
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <span>Login</span>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter your email"
                            id="email"
                        />
                        <p className="error">
                            {errors.email && touched.email && errors.email}
                        </p>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Enter your password"
                        />
                        <p className="error">
                            {errors.password && touched.password && errors.password}
                        </p>
                        {/* disable={isSubmitting-- disable button while submitting */}
                        <button type="submit" disabled={isSubmitting}>Login</button>
                        </form>
                    </div>
                </div>
            )}
            </Formik>
        </>
    );
};

export default Login;

// validate={values => {
//     const errors = {};
//     if (!values.email) {
//     errors.email = 'Required';
//     } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ) {
//     errors.email = 'Invalid email address';
//     }
//     return errors;
// }}