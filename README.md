# Desafio Técnico - Desenvolvedor Frontend | Motora.AI

Este repositório contém a solução para o desafio técnico proposto pela [Motora.AI](https://motora.ai/), referente ao processo seletivo para a vaga de Desenvolvedor Frontend.

## Descrição do Desafio

A proposta consistia em criar uma aplicação React para cadastro e monitoramento de veículos em rota, com as seguintes funcionalidades:

- **Cadastro de veículos**: Formulário para adicionar novos veículos ao sistema.
- **Edição de veículos**: Capacidade de modificar as informações dos veículos já cadastrados.
- **Exclusão de veículos**: Remover veículos do sistema.
- **Monitoramento em tempo real**: Visualização da posição dos veículos se movendo em tempo real em um mapa interativo.

## Tecnologias Utilizadas

- **React (NextJs)**: Biblioteca principal para a construção da interface da aplicação.
- **Socket.IO**: Utilizado para consumir o websocket que disponibiliza as atualizações de posição dos veículos.
- **Leaflet.js**: Biblioteca para a construção do mapa interativo, onde é possível visualizar a movimentação dos veículos em tempo real.

## Funcionalidades

1. **Cadastro de Novos Veículos**  
   Através de um formulário simples, o usuário pode cadastrar novos veículos no sistema, fornecendo dados como placa e tipo do veículo.

2. **Edição e Exclusão de Veículos**  
   O usuário pode modificar os dados dos veículos já cadastrados ou removê-los completamente do sistema.

3. **Monitoramento em Tempo Real**  
   Um mapa interativo exibe a movimentação dos veículos cadastrados em tempo real, consumindo dados de um websocket.

## Dependências

As principais dependências do projeto são:

- **React**: `^18.x.x`
- **Socket.IO**: `^4.x.x`
- **Leaflet.js**: `^1.x.x`

## Como Executar

1. Clone o repositório:
   ```bash
   git clone git@github.com:Gabriel-Araujo11/motora.ai-vehicle-registration.git

2. Instale as dependencias :
   ```bash
   npm install

3. Execute o projeto:
   ```bash
   npm run dev

*"One man's 'magic' is another man's engineering."*
– _Robert Heinlein_

   Obrigado!
   Att,
   [Gabriel Araujo](https://www.linkedin.com/in/gabriel-araujo11/)
