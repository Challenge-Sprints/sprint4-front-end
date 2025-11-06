import { useState, useEffect } from 'react';
import loginImg from '../../images/login.avif'; 

interface Usuario {
  nome: string;
  email: string;
  logado: boolean;
}

export default function Login() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [nomeInput, setNomeInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  useEffect(() => {
    const dadosSalvos = sessionStorage.getItem('usuario');
    if (dadosSalvos) {
      const usuarioRecuperado: Usuario = JSON.parse(dadosSalvos);
      setUsuario(usuarioRecuperado);
    }
  }, []);

  const handleLogin = () => {
    const novoUsuario: Usuario = {
      nome: nomeInput,
      email: emailInput,
      logado: true,
    };

    sessionStorage.setItem('usuario', JSON.stringify(novoUsuario));
    setUsuario(novoUsuario);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('usuario');
    setUsuario(null);
  };

  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Imagem lateral */}
        <div className="hidden md:block">
          <img
            src={loginImg}
            alt="Login ilustrativo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Formulário */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">Acesso ao Portal</h1>
          <p className="text-blue-700 mb-6 text-center">
            Faça login para acessar funcionalidades como agendamento, histórico de consultas e notificações personalizadas.
          </p>

          {usuario ? (
            <div className="text-blue-700 text-center">
              <p className="text-xl">Bem-vindo, <span className="font-semibold">{usuario.nome}</span>!</p>
              <p className="mb-4">Email: {usuario.email}</p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Sair
              </button>
            </div>
          ) : (
            <form className="space-y-4 text-center">
              <input
                type="text"
                placeholder="Seu nome completo"
                value={nomeInput}
                onChange={(e) => setNomeInput(e.target.value)}
                className="border border-blue-300 px-4 py-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="border border-blue-300 px-4 py-2 rounded w-full"
              />
              <button
                type="button"
                onClick={handleLogin}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Entrar
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
