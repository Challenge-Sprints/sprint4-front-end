import duduImg from '../../images/dudu.jpg';
import joseImg from '../../images/jose.jpeg';
import gabrielImg from '../../images/gabriel1.jpeg';


type StatusIntegrante = 'ativo' | 'inativo';
interface Integrante {
  nome: string;
  rm: number;
  turma: string;
  github: string;
  linkedin: string;
  foto: string;
}

type IntegranteDetalhado = Integrante & {
  status: StatusIntegrante;
  idade?: number; // opcional
};

const integrantes: IntegranteDetalhado[] = [
  {
    nome: 'Gabriel Henrique Souza Gonçalves',
    rm: 563732,
    turma: '1TDSPI',
    github: 'https://github.com/gabrielhensg',
    linkedin: 'https://linkedin.com/in/gabriel',
    foto: gabrielImg,
    status: 'ativo',
  },
  {
    nome: 'José Ricardo Pereira Iannuzzi',
    rm: 564112,
    turma: '1TDSPI',
    github: 'https://github.com/jr-iannuzzi',
    linkedin: 'https://linkedin.com/in/jose',
    foto: joseImg,
    status: 'ativo',
  },
  {
    nome: 'Eduardo Augusto de Oliveira Souza',
    rm: 565269,
    turma: '1TDSPI',
    github: 'https://github.com/Edu-Ardo18',
    linkedin: 'https://www.linkedin.com/in/eduardo-augusto-548436357/',
    foto: duduImg,
    status: 'ativo',
  },
];

export default function QuemSomos() {
  return (
    <main className="bg-linear-to-b from-blue-50 via-white to-blue-100 text-blue-900 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Quem Somos</h1>

      <section id="QuemSomos" className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Nosso Time</h2>
        <p className="mb-10 text-lg text-blue-700">
          Somos um grupo dedicado ao desenvolvimento de soluções tecnológicas para a saúde digital, comprometidos com inovação e acessibilidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrantes.map((item) => (
            <div
              key={item.rm}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.foto}
                alt={`Foto de ${item.nome}`}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-blue-800">{item.nome}</h3>
              <p className="text-sm mb-2 text-blue-600">RM: {item.rm} | Turma: {item.turma}</p>
              <p className="text-sm mb-4 text-blue-500">Status: {item.status}</p>
              <div className="flex gap-4">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
