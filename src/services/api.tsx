export const API_BASE = "https://challengesprint4-java-rnx9.onrender.com/api";

export const getUsuarios = async () => {
  const res = await fetch(`${API_BASE}/usuarios`);
  if (!res.ok) throw new Error("Erro ao buscar usuários");
  return res.json();
};
