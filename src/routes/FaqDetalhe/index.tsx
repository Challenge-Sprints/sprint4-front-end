import { useParams, useNavigate } from 'react-router-dom';

const faqItems = [
  {
    pergunta: "Como posso agendar uma consulta?",
    resposta:
      "Acesse a página de Agendamento, preencha o formulário com seus dados e escolha um horário disponível. Você receberá uma confirmação por e-mail.",
  },
  {
    pergunta: "Posso cancelar ou remarcar uma consulta?",
    resposta:
      "Sim! Na página de Consultas, você pode visualizar suas consultas e optar por cancelar ou remarcar. O sistema permite alterações até 24h antes do horário agendado.",
  },
  {
    pergunta: "O sistema funciona em dispositivos móveis?",
    resposta:
      "Sim! Nossa plataforma é responsiva e funciona perfeitamente em celulares, tablets e computadores, garantindo uma ótima experiência em qualquer tela.",
  },
  {
    pergunta: "O que acontece se eu perder minha consulta?",
    resposta:
      "Se você não puder comparecer, recomendamos cancelar ou remarcar com antecedência. A ausência sem aviso pode impactar sua prioridade em futuros agendamentos.",
  },
  {
    pergunta: "Como posso acessar meu histórico de consultas?",
    resposta:
      "Na página Minhas Consultas, você encontra todas as consultas passadas e futuras, com opções para visualizar detalhes, cancelar ou remarcar.",
  },
  {
    pergunta: "O que devo levar para minha consulta?",
    resposta:
      "Leve um documento de identificação, exames anteriores relacionados ao atendimento e o cartão do convênio (se aplicável).",
  },
  {
    pergunta: "O hospital oferece atendimento para emergência?",
    resposta:
      "Nosso sistema é voltado para consultas eletivas. Para emergências, procure o pronto-socorro mais próximo ou ligue para os serviços de emergência locais.",
  },
  {
    pergunta: "Posso marcar consultas para outra pessoa?",
    resposta:
      "Sim, você pode agendar para familiares ou pessoas próximas, desde que tenha os dados necessários como nome, CPF e contato.",
  },
  {
    pergunta: "O sistema envia lembretes sobre as consultas agendadas?",
    resposta:
      "Sim! Você receberá notificações automáticas por e-mail e SMS antes da data da consulta para garantir que não se esqueça.",
  },
];

export default function FaqDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = Number(id);
  const item = faqItems[index];

  if (!item) {
    return (
      <main className="p-10 text-center text-red-600">
        <h1 className="text-3xl font-bold">Pergunta não encontrada</h1>
        <button
          onClick={() => navigate('/faq')}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Voltar ao FAQ
        </button>
      </main>
    );
  }

  return (
    <main className="bg-linear-to-b from-white via-blue-50 to-blue-100 min-h-screen px-6 py-12 text-blue-900">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Pergunta Selecionada</h1>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">{item.pergunta}</h2>
        <p className="text-lg text-blue-700 mb-8">{item.resposta}</p>
        <button
          onClick={() => navigate('/faq')}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Voltar ao FAQ
        </button>
      </section>
    </main>
  );
}
