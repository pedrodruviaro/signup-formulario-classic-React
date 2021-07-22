import React, { useState } from "react";
import Title from "./components/Title";
import Main from "./components/Main";
import FormSignup from "./components/FormSignup";
import LabelForm from "./components/LabelForm";
import InputForm from "./components/InputForm";
import Button from "./components/Button";
import FormHeader from "./components/FormHeader";
import SpanErro from "./components/SpanErro";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    senha: { valido: true, helperText: "" },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!erros.senha.valido) {
      return;
    }

    console.log({ email, senha });

    setSenha("");
    setEmail("");
  };

  const validaSenha = (event) => {
    if (event.target.value.length < 4 || event.target.value.length > 72) {
      setErros({
        senha: {
          valido: false,
          helperText: "A senha deve conter entre 4 e 72 dígitos!",
        },
      });
    } else {
      setErros({ senha: { valido: true, helperText: "" } });
    }

    console.log(erros.senha.valido);
  };

  return (
    <Main>
      <Title>Signup/Login</Title>
      <FormSignup onSubmit={handleSubmit}>
        <FormHeader>
          <Button application>Twitch</Button>
        </FormHeader>

        <LabelForm>
          {" "}
          Email
          <InputForm
            type="email"
            autoFocus
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </LabelForm>

        <LabelForm>
          {" "}
          Senha
          <InputForm
            type="password"
            required
            value={senha}
            error={!erros.senha.valido}
            onChange={(event) => setSenha(event.target.value)}
            onBlur={validaSenha}
          />
          {erros.senha.valido === false ? (
            <SpanErro>{erros.senha.helperText}</SpanErro>
          ) : null}
        </LabelForm>

        <Button type="submit">Enviar</Button>
      </FormSignup>
    </Main>
  );
}

export default App;
