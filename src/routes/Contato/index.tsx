export default function Contato() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen px-6 py-12 text-blue-900">
      <section id="contato" className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Agendamento de Consultas</h1>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fale Conosco</h2>
        <p className="text-blue-700 mb-8">
          Preencha o formulário abaixo para entrar em contato com nossa equipe:
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-blue-800 mb-1">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-blue-800 mb-1">
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
