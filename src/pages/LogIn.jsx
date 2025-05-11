import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function LogIn() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Geçersiz e-posta").required("E-posta gerekli"),
    password: Yup.string().min(6, "En az 6 karakter").required("Şifre gerekli"),
  });

  const onSubmit = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("Giriş başarılı", userCredential.user);
      toast.success("Giriş başarılı");
      navigate("/");
    } catch (error) {
      toast.error("Giriş başarısız: " + error.message);
      console.error("Giriş hatası", error.message);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => onSubmit(values),
  });
  return (
    <div className="bg-slate-300 min-h-screen flex flex-col items-center justify-center">
        <Header/>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 w-100 p-10 border rounded-2xl mt-20">
          <div className="flex flex-col">
            <label>E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="type your e-mail"
              value={values.email}
              onChange={handleChange}
              className="outline-0"
            />
            {errors.email && (
              <p className="text-xs text-red-600">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="type your password"
              value={values.password}
              onChange={handleChange}
              className="outline-0"
            />
            {errors.password && (
              <p className="text-xs text-red-600">{errors.password}</p>
            )}
          </div>
          <div>
            <button
            type="submit"
              className="bg-emerald-500 cursor-pointer"
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
