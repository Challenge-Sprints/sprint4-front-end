export default function Consultas() {
  const consultas = [
    { id: 101, dataHora: '2025-05-25 10:00', medico: 'Dr. João', status: 'Confirmada' },
    { id: 102, dataHora: '2025-05-30 14:00', medico: 'Dra. Maria', status: 'Pendente' },
    { id: 103, dataHora: '2025-06-05 09:30', medico: 'Dr. Carlos', status: 'Cancelada' },
    { id: 104, dataHora: '2025-09-15 06:30', medico: 'Dra. Maria', status: 'Confirmada' },
    { id: 105, dataHora: '2025-10-10 11:00', medico: 'Dr. Ana', status: 'Confirmada' },
    { id: 106, dataHora: '2025-10-15 16:00', medico: 'Dr. Pedro', status: 'Pendente' },
    { id: 107, dataHora: '2025-11-01 08:30', medico: 'Dra. Luiza', status: 'Cancelada' },
  ];

const statusColor: { [key: string]: string } = {
  Confirmada: 'text-green-600 font-semibold',
  Pendente: 'text-yellow-600 font-semibold',
  Cancelada: 'text-red-600 font-semibold',
};


  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen p-6 text-blue-900">
      <section id="consultas" className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Histórico de Consultas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="py-3 px-4 border-b text-left">ID</th>
                <th className="py-3 px-4 border-b text-left">Data/Horário</th>
                <th className="py-3 px-4 border-b text-left">Médico</th>
                <th className="py-3 px-4 border-b text-left">Status</th>
                <th className="py-3 px-4 border-b text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {consultas.map((consulta) => (
                <tr key={consulta.id} className="hover:bg-blue-50 transition duration-200">
                  <td className="py-2 px-4 border-b">{consulta.id}</td>
                  <td className="py-2 px-4 border-b">{consulta.dataHora}</td>
                  <td className="py-2 px-4 border-b">{consulta.medico}</td>
                  <td className={`py-2 px-4 border-b ${statusColor[consulta.status]}`}>
                    {consulta.status}
                  </td>
                  <td className="py-2 px-4 border-b space-x-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                      Ver
                    </button>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
                      Remarcar
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
