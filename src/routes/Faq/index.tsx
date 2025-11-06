import { useNavigate } from 'react-router-dom';

export default function Faq() {
  const navigate = useNavigate();

  const verPergunta = (id: number) => {
    navigate(`/faq/${id}`);
  };

  return (
    <main className="bg-linear-to-b from-blue-50 via-white to-blue-100 min-h-screen px-6 py-12 text-blue-900">
      <section id="faq" className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">FAQ - Perguntas Frequentes</h1>
        <h2 className="text-2xl font-semibold mb-6 text-blue-700 text-center">Dúvidas Comuns</h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <button
              key={index}
              onClick={() => verPergunta(index)}
              className="block w-full text-left bg-white border border-blue-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 hover:bg-blue-50"
            >
              <span className="text-blue-800 font-medium text-lg hover:text-blue-600 transition-colors duration-200">
                {item.pergunta}
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const faqItems = [
  {
    pergunta: "Como posso agendar uma consulta?",
    resposta:
      "Acesse a página de Agendamento, preencha o formulário com seus dados e escolha um horário disponível.",
  },
  {
    pergunta: "Posso cancelar ou remarcar uma consulta?",
    resposta:
      "Sim! Na página de Consultas, você pode visualizar suas consultas e optar por cancelar ou remarcar, conforme sua necessidade.",
  },
  {
    pergunta: "O sistema funciona em dispositivos móveis?",
    resposta:
      "Sim! Nossa plataforma é totalmente responsiva e pode ser utilizada em celulares, tablets e computadores.",
  },
  {
    pergunta: "O que acontece se eu perder minha consulta?",
    resposta:
      "Se você não puder comparecer à consulta, recomendamos que a cancele ou remarque com antecedência. Caso contrário, pode haver impacto na sua prioridade de agendamento futuro.",
  },
  {
    pergunta: "Como posso acessar meu histórico de consultas?",
    resposta:
      "Você pode visualizar todas as consultas passadas e futuras na página Minhas Consultas, onde também poderá cancelar ou remarcar caso necessário.",
  },
  {
    pergunta: "O que devo levar para minha consulta?",
    resposta:
      "Recomendamos que você leve um documento de identificação, exames anteriores relacionados ao atendimento e o cartão do convênio (se aplicável).",
  },
  {
    pergunta: "O hospital oferece atendimento para emergência?",
    resposta:
      "Nosso sistema de agendamento é voltado para consultas eletivas. Para atendimentos emergenciais, recomendamos que procure um pronto-socorro mais próximo.",
  },
  {
    pergunta: "Posso marcar consultas para outra pessoa?",
    resposta:
      "Sim, você pode marcar consultas para familiares ou pessoas próximas, desde que tenha os dados necessários, como nome, CPF e informações de contato.",
  },
  {
    pergunta: "O sistema envia lembretes sobre as consultas agendadas?",
    resposta:
      "Sim! Você receberá notificações automáticas antes da data da sua consulta para garantir que não se esqueça do compromisso.",
  },
];
