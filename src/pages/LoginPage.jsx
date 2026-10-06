import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  async function handleLogin() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    localStorage.setItem("token", data.token);

    navigate("/dashboard");
  }

  return (
    <>
      <h4>Login Page</h4>
    </>
  );
}

export default LoginPage;
