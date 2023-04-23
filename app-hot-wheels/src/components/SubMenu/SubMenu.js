import React from 'react';
import './SubMenu.scss'
import { Link } from 'react-router-dom';

const SubMenu = () => {
    const [currCount, setCurrCount] = React.useState(0);


    return (


        <div className="sidebar">

            <Link className={currCount === 0 && 'active'} href="#listar" to="/ListarCarros">
                <span className={currCount === 0 && 'text-active'}><i class="fas fa-arrow-right"></i>Listar</span>
            </Link>
            <Link className={currCount === 1 && 'active'} href="#achar" to="/EncontrarCarros">
                <span className={currCount === 1 && 'text-active'}><i class="fas fa-arrow-right"></i> Achar</span>
            </Link>
            <Link className={currCount === 2 && 'active'} href="#cadastrar" to="/CadastrarCarros">
                <span className={currCount === 2 && 'text-active'}><i class="fas fa-arrow-right"></i> Cadastrar</span>
            </Link>
            <Link className={currCount === 3 && 'active'} href="#atualizar" to="/AtualizarCarros">
                <span className={currCount === 3 && 'text-active'}><i class="fas fa-arrow-right"></i>Atualizar</span>
            </Link>
            <Link className={currCount === 4 && 'active'} href="#deleter" to='/DeletarCarros'>
                <span className={currCount === 4 && 'text-active'}><i class="fas fa-arrow-right"></i>Deletar</span>
            </Link>
        </div>

    )
}


export default SubMenu