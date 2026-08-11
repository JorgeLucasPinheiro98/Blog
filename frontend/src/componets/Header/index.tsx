import style from './style.module.css'

export function Headers() {
    return (
      <header className={style.header}>
        <nav aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#noticias">Notícias</a>
          <a href="#relevantes">Mais relevantes</a>
          <a href="#contatos">Contatos</a>
          <a href="#sobre">Sobre o Site</a>
        </nav>
      </header>
    );
  }