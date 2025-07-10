import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsloading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(name, email, password, passwordConfirm);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Name"
        placeholder="Seu nome"
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(event) => setPassword(event.target.value)}
      />

      <Input
        required
        legend="Confirmar s enha"
        type="password"
        placeholder="123456"
        onChange={(event) => setPasswordConfirm(event.target.value)}
      />

      <Button isLoading={isLoading} type="submit">
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear "
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
