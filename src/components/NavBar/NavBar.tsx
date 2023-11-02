function NavBar() {

    return (
        <header className='container'>
            <h1 className='title'>Bons Fluídos</h1>
            <nav>
                <ul className='nav'>
                    <li className={`itemNav ${window.location.href.includes('user') ? "active" : ""}`}><a href="/user">Usuários</a></li>
                    <li className={`itemNav ${window.location.href.includes('professor') ? "active" : ""}`}><a href="/professor">Professores</a></li>
                    <li className={`itemNav ${window.location.href.includes('company') ? "active" : ""}`}><a href="/company">Empresas</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
