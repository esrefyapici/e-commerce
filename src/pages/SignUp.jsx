import React from "react";
import { useFormik } from "formik";
import Header from "../components/Header";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Geçersiz e-posta").required("E-posta gerekli"),
    password: Yup.string().min(6, "En az 6 karakter").required("Şifre gerekli"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor")
      .required("Şifre tekrar gerekli"),
    age: Yup.number()
      .min(18, "18 yaşından büyük olmalısın")
      .required("Yaş gerekli"),
  });

  const onSubmit = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("Kayıt başarılı", userCredential.user);
      toast.success("welcome!!");
    } catch (error) {
      toast.error("Kayıt başarısız: " + error.message);
      console.error("Kayıt hatası", error.message);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
    },
    validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <div className="bg-slate-300 min-h-screen flex flex-col items-center justify-center">
      <Header />
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
          <div className="flex flex-col">
            <label>Register Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="type your password again"
              value={values.confirmPassword}
              onChange={handleChange}
              className="outline-0"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-600">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label>Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="type your age"
              value={values.age}
              onChange={handleChange}
              className="outline-0"
            />
            {errors.age && <p className="text-xs text-red-600">{errors.age}</p>}
          </div>
          <div className="flex flex-col gap-3">
            <button type="submit" className="bg-emerald-500 cursor-pointer">
              Sign Up
            </button>
            <button className="bg-emerald-500 cursor-pointer" onClick={() => navigate("/login")}>Log In</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
