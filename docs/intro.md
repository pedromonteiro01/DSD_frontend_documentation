---
sidebar_position: 1
---

# Visão Geral

![Homepage](./funcionalidades/homepage.png)

## Âmbito e Objetivo

O Sistema de Apoio à Distribuição do Serviço Docente é um projeto que tem como objetivo construir uma plataforma que facilite a realização de um processo complexo e demorado.

Esta plataforma vem para resolver problemas antigos, como complexidade e abstração da tarefa, facilitando este processo com ferramentas que o tornam mais prático e intuitivo para quem o executa.

## Instruções de configuração e instalação

Para correr este projeto localmente é necessário ter o Docker instalado.
Para mais informação, https://docs.docker.com/engine/install/ubuntu/

Linux
```bash
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

MacOS <br></br>
Visitar https://docs.docker.com/desktop/install/mac-install/ para mais detalhes.

Para correr o projeto, abrir um terminal e correr os comandos abaixo
```bash
cd DSD/project/backend/DsdApi/_DOCKER_CONFIGS/  # caminho para o docker-compose

docker-compose up
```

Devem ser adicionados os ficheiros com variáveis de ambiente seguintes. <br></br>
- No caso do frontend, adicionar .env em DSD/project/frontend/.env
```bash
PORT=8080
REACT_APP_API_URL="http://localhost:5000/v1"
REACT_APP_WSO2_CLIENT_ID="secrethere"
REACT_APP_WSO2_CLIENT_SECRET="secrethere"
REACT_APP_WSO2_REDIRECT_URI="http://localhost"
```

- Para o backend, adicionar .env em DSD/project/backend/DsdApi/.env
```bash
ASPNETCORE_ENVIRONMENT=Development
```

### Tecnologias
- Frontend
  - React 17.0.2:
  - TypeScript 4.7.4

- Backend
  - ASP.NET Core 6
  - SQL Server
  - Docker