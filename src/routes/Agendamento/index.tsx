import { useState, useEffect } from 'react';

export default function Agendamento() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [medico, setMedico] = useState('');
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  // ✅ Verifica login ao carregar a página
  useEffect(() => {
    const usuario = sessionStorage.getItem('usuario');
    if (usuario) {
      setUsuarioLogado(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!usuarioLogado) {
      alert('Você precisa estar logado para agendar uma consulta.');
      return;
    }

    console.log('Agendamento:', { nome, cpf, telefone, email, data, hora, medico });
    alert('Consulta agendada com sucesso!');
    setNome('');
    setCpf('');
    setTelefone('');
    setEmail('');
    setData('');
    setHora('');
    setMedico('');
  };

  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen px-6 py-12 text-blue-900">
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Agende sua Consulta</h2>
        {!usuarioLogado && (
          <p className="text-red-600 text-center mb-4 font-medium">
            ⚠️ Você precisa estar logado para agendar uma consulta.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-blue-800 mb-1">Nome completo:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="cpf" className="block text-sm font-medium text-blue-800 mb-1">CPF:</label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-blue-800 mb-1">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-1">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="data" className="block text-sm font-medium text-blue-800 mb-1">Data:</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="hora" className="block text-sm font-medium text-blue-800 mb-1">Horário:</label>
            <input
              type="time"
              id="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="medico" className="block text-sm font-medium text-blue-800 mb-1">Médico (especialidade):</label>
            <select
              id="medico"
              value={medico}
              onChange={(e) => setMedico(e.target.value)}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md text-blue-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            >
              <option value="">Selecione</option>
              <option value="Dr. João - Cardiologia">Dr. João - Cardiologia</option>
              <option value="Dra. Maria - Dermatologia">Dra. Maria - Dermatologia</option>
              <option value="Dr. Carlos - Ortopedia">Dr. Carlos - Ortopedia</option>
              <option value="Dr. Ana - Neurologia">Dr. Ana - Neurologia</option>
              <option value="Dr. Pedro - Endocrinologia">Dr. Pedro - Endocrinologia</option>
              <option value="Dra. Luiza - Ginecologia">Dra. Luiza - Ginecologia</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Agendar Consulta
          </button>
        </form>
      </section>
    </main>
  );
}
