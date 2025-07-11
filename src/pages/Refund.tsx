import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import fileSvg from "../assets/file.svg";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

import { Input } from "../components/Input";
import { InputSelect } from "../components/InputSelect";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

export function Refund() {
  const [name, setName] = useState("Teste");
  const [amount, setAmount] = useState("34");
  const [category, setCategory] = useState("Alimentação");
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState<File | null>(null);

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (params.id) {
      return navigate(-1);
    }

    console.log(name, amount, category, filename);
    navigate("/confirm", { state: { fromSubmit: true } });
  }

  return (
    <form
      onSubmit={onSubmit}
      action=""
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]"
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        value={name}
        onChange={(event) => setName(event.target.value)}
        disabled={!!params.id}
      />

      <div className="flex gap-4">
        <InputSelect
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={!!params.id}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </InputSelect>

        <Input
          type="number"
          required
          legend="Valor"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          disabled={!!params.id}
        />
      </div>

      {params.id ? (
        <a
          href="https://www.rocketseat.com.br/"
          target="_blank"
          className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
        >
          <img src={fileSvg} alt="Icone de arquivo" />
          Abrir comprovante
        </a>
      ) : (
        <Upload
          legend="Comprovante"
          filename={filename && filename.name}
          onChange={(event) =>
            event.target.files && setFilename(event.target.files[0])
          }
          disabled={!!params.id}
        />
      )}

      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  );
}
