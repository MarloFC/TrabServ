import styled from 'styled-components'
import foto from './foto.jpg'

const Title = styled.h1`
  color:#000f;

`
const Container = styled.div`
margin-top: 4rem;
img {
 width: 100%;
 height: 100%;
}
table{
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
        border: 1px solid black;
    }
    td{
        padding: 1rem 2rem;
        border: 0;
        border: 1px solid black;
    }
}
`;

export function App() {
  return (
    <div className="App">
      <Title>Trabalho de redes W react</Title>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Marca</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jogos</td>
              <td>R$25,00</td>
              <td>Ação</td>
              <td>Blizzard</td>
            </tr>
          </tbody>
        </table>  
      <img src = {foto} alt="foto"/>
      <h5>Tela para Exercício Prático de Configuração de Servidores: Marlon Freitas Campos</h5>
      </Container>
    </div>
  );
}





