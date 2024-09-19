import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/useAuth";
import { useNavigate } from "react-router";
import { sleep } from "../Helper";

type Props = {};

type LoginFormsInputs = {
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = async (form: LoginFormsInputs) => {
    await loginUser(form.userName, form.password);
    navigate("/checklists");
  };
  return (
    <section>
      <div>
        <div>
          <div>
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div>
                <label htmlFor="email">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  {...register("userName")}
                />
                {errors.userName ? <p>{errors.userName.message}</p> : ""}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  {...register("password")}
                />
                {errors.password ? <p>{errors.password.message}</p> : ""}
              </div>
              <button type="submit">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
