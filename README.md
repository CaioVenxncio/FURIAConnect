# FURIA Connect

![](assets/Furia_Esports_Logo.png)

## Descrição

FURIA Connect é um protótipo de aplicação web para conhecer e gerenciar informações de fãs da equipe FURIA. Através de um formulário, o fã se cadastra, seus dados são armazenados localmente (LocalStorage) e exibidos em uma página de perfil. O usuário pode editar suas informações e, ao finalizar, ser direcionado para uma loja oficial com produtos e cupons de desconto.

## Funcionalidades

- **Cadastro de Fã**: Formulário inicial para coletar nome, idade, localização, preferências de line e redes sociais.
- **Armazenamento Local**: Uso de LocalStorage para salvar dados do fã sem necessidade de backend.
- **Perfil do Fã**: Página para visualizar perfil e navegar para edição.
- **Edição de Perfil**: Formulário pré-preenchido para atualizar dados armazenados.
- **Loja FURIA**: Página com catálogo de produtos oficiais, cupons e links para redes sociais dos membros.

## Estrutura de Pastas

```
FURIA-Connect/
│
├── assets/               # Logos, imagens de produtos e jogadores
│   └── Furia_Esports_Logo.png
│
├── css/                  # Estilos
│   ├── style.css         # CSS principal para cadastro e edição
│   ├── profile.css       # CSS para perfil do fã
│   └── loja.css          # CSS para loja
│
├── js/                   # Scripts JavaScript
│   ├── cadastro.js       # Captura e salva dados do formulário inicial
│   ├── perfil.js         # Carrega perfil e gerencia edição
│   └── editar-perfil.js  # Lida com o form de edição de perfil
│
├── pages/                # Páginas internas
│   ├── perfil.html       # Exibição de perfil
│   ├── editar-perfil.html# Edição de perfil
│   └── loja.html         # Loja de produtos
│
└── index.html            # Formulário de cadastro inicial
```

## Tecnologias Utilizadas

- **HTML5**
- **CSS3** (Flexbox, responsividade)
- **JavaScript (ES6)**
- **LocalStorage API**

## Como Executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/FURIA-Connect.git
   ```

2. Abra a pasta do projeto:

   ```bash
   cd FURIA-Connect
   ```

3. Inicie um servidor local (opcional, mas recomendado) e abra `index.html` no navegador. Por exemplo, usando o VSCode Live Server ou Python:

   ```bash
   # Com Python 3
   python -m http.server 5500
   ```

4. Navegue até `http://localhost:5500` e comece a usar!

## Uso

1. Preencha o formulário inicial com suas informações de fã.
2. Clique em **Próximo** para visualizar seu perfil.
3. Em **Perfil**, use **Editar Inscrição** para atualizar seus dados.
4. Após finalizar, clique em **Finalizar Inscrição** para acessar a loja.
5. Navegue pela loja, adicione produtos ao carrinho e utilize o cupom exibido.

## Contribuição

Contribuições, issues e solicitações de pull são bem-vindas! Sinta-se livre para discutir as mudanças por meio de issues.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

