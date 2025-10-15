function Home() {
  // Estilo do container principal da página
  const pageStyle = {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', // azul → violeta
    height: '100vh', // ocupa toda a altura da viewport
    width: '100vw', // ocupa toda a largura da viewport
    margin: 0, // remove margem
    padding: 0, // remove espaçamento interno
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden', // garante que nada ultrapasse a tela
  };

  // Estilo do título principal
  const headerStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    background: 'rgba(255, 255, 255, 0.1)', // leve transparência
    backdropFilter: 'blur(8px)', // cria um efeito de vidro
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '3rem', // tamanho grande
    fontWeight: 'bold',
    marginBottom: '10px',
    letterSpacing: '1px',
  };

  // Estilo do subtítulo
  const subTextStyle = {
    fontSize: '1rem',
    fontWeight: 'normal',
    marginTop: '5px',
    opacity: 0.9,
  };

  // JSX (estrutura visual)
return(
  <div style={pageStyle}>
    
    <header style={headerStyle}>
    João Vítor Farioli
    <div style={subTextStyle}>Desenvolvedor Full-Stack & Criado de soluções</div>
    </header>

    <main>
      <h2>Bem-vindo ao meu portifolio</h2>
    </main>
  </div>
);
}

// Exporta o componente para o Next.js renderizar
export default Home;
