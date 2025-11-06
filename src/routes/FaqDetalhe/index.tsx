import { useParams } from 'react-router-dom';

export default function FaqDetalhe() {
  const { id } = useParams();

  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Detalhes da Pergunta</h1>
      <p className="mt-4 text-xl">ID da pergunta: {id}</p>
    </main>
  );
}

