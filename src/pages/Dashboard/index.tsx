import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/23382026?s=460&u=59130c4ac2ef3f3902e3c4b75372a2a1acf6de57&v=4"
            alt="Lucas Siqueira"
          />
          <div>
            <strong>lucassiqz/fastfeet</strong>
            <p>Fastfeet is an app for a fictional shipping company.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/23382026?s=460&u=59130c4ac2ef3f3902e3c4b75372a2a1acf6de57&v=4"
            alt="Lucas Siqueira"
          />
          <div>
            <strong>lucassiqz/fastfeet</strong>
            <p>Fastfeet is an app for a fictional shipping company.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
