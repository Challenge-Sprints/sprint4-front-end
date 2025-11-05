import duduImg from '../../images/dudu.jpg';
import joseImg from '../../images/jose.jpeg';
import gabrielImg from '../../images/gabriel1.jpeg';

export default function QuemSomos() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-blue-100 text-blue-900 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Quem Somos</h1>

      <section id="QuemSomos" className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Nosso Time</h2>
        <p className="mb-10 text-lg text-blue-700">
          Somos um grupo dedicado ao desenvolvimento de soluções tecnológicas para a saúde digital, comprometidos com inovação e acessibilidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gabriel */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img src={gabrielImg} alt="Foto de Gabriel" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-bold text-blue-800">Gabriel Henrique Souza Gonçalves</h3>
            <p className="text-sm mb-4 text-blue-600">RM: 563732 | Turma: 1TDSPI</p>
            <div className="flex gap-4">
              <a href="https://github.com/gabrielhensg" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">GitHub</a>
              <a href="https://linkedin.com/in/gabriel" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">LinkedIn</a>
            </div>
          </div>

          {/* José */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img src={joseImg} alt="Foto de José" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-bold text-blue-800">José Ricardo Pereira Iannuzzi</h3>
            <p className="text-sm mb-4 text-blue-600">RM: 564112 | Turma: 1TDSPI</p>
            <div className="flex gap-4">
              <a href="https://github.com/jr-iannuzzi" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">GitHub</a>
              <a href="https://linkedin.com/in/jose" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">LinkedIn</a>
            </div>
          </div>

          {/* Eduardo */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img src={duduImg} alt="Foto de Eduardo" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-bold text-blue-800">Eduardo Augusto de Oliveira Souza</h3>
            <p className="text-sm mb-4 text-blue-600">RM: 565269 | Turma: 1TDSPI</p>
            <div className="flex gap-4">
              <a href="https://github.com/Edu-Ardo18" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">GitHub</a>
              <a href="https://www.linkedin.com/in/eduardo-augusto-548436357/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
