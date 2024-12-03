# Dúvidas - Dividas - News

### Projeto final da cadeira de Projeto de Sistema Web 24/2
**Grupo 5**

Este projeto consiste no desenvolvimento de uma aplicação composta por **7 micro serviços**, utilizando **Node.js** no backend com o framework **Express** e o banco de dados **MongoDB**.

---

## Micro Serviços

Cada micro serviço desempenha uma função específica dentro da arquitetura:
- **auth**: Serviço de autenticação relacionado ao usuário.
- **cart**: Serviço de gerenciamento do carrinho de compras.
- **catalog**: Serviço de catálogo de produtos.
- **gateway**: Serviço de API Gateway.
- **order**: Serviço de gerenciamento de pedidos.
- **rating**: Serviço de avaliação de produtos.

---

## Arquitetura

A arquitetura foi projetada para ser escalável e modular, utilizando Docker para o ambiente de desenvolvimento e Kubernetes para orquestração em produção.  
Diagrama da arquitetura:  
![Diagrama da arquitetura](https://i.ibb.co/XpvLGZK/diagram-drawio.png)

---

## Configuração e Setup

### Ambiente de Desenvolvimento
1. Certifique-se de que o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/) estão instalados.
2. Suba os serviços com o comando:
   ```bash
   docker-compose up -d
   ```  

### Ambiente de Produção
1. Certifique-se de que o [kubectl](https://kubernetes.io/docs/tasks/tools/) está configurado.
2. Aplique os arquivos de configuração do Kubernetes:
   ```bash
   kubectl apply -f kubernetes.yaml
   ```

---

## Documentação da API

A documentação das APIs está disponível localmente no seguinte endereço:  
[http://localhost:9007/api-docs](http://localhost:9007/api-docs)

---

### Sobre o Projeto

O projeto foi desenvolvido com o objetivo de explorar conceitos modernos de desenvolvimento web, incluindo:
- Arquitetura de micro serviços.
- Uso de Node.js e Express para criar serviços rápidos e leves.
- Persistência de dados utilizando MongoDB.

Este repositório representa o esforço colaborativo do **Grupo 5** e é o resultado da disciplina de **Projeto de Sistema para Web** ministrada em 2024/2 pelo professor **Carlos Fernando Paleo da Rocha**.  
