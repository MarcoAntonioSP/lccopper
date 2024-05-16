"use client"


import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./login.module.css";

export default function Loginpage() {
  const [email, setEmail] = useState(""); // No type annotation needed here
  const [password, setPassword] = useState(""); // No type annotation needed here

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);
      return;
    }

    router.replace("/admin");
  }

  return (
    <div className={styles.containerlogin}>
      <h1>Login</h1>

      <form className={styles.containerbuttons} onSubmit={handleSubmit}>
        <input
          className={styles.buttonslogin}
          onClick={() =>sigin}
          type="text"
          name="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.buttonslogin}
          type="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.buttonslogin} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
