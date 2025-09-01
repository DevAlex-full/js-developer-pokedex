# 📱 Pokédex

Uma aplicação web moderna e responsiva que permite explorar o mundo Pokémon através de uma interface intuitiva e visualmente atrativa, consumindo dados da PokéAPI oficial.

## 🎯 Visão Geral

A Pokédex é uma aplicação web que oferece uma experiência completa para visualizar informações detalhadas dos primeiros 151 Pokémon da primeira geração. Com design responsivo e interface moderna, permite aos usuários explorar características, estatísticas e habilidades de cada Pokémon de forma interativa.

## ✨ Funcionalidades

- **Listagem Responsiva**: Grid adaptativo que se ajusta automaticamente ao tamanho da tela
- **Carregamento Incremental**: Sistema de paginação com botão "Load More" para otimizar performance
- **Modal Detalhado**: Popup com informações completas ao clicar em qualquer Pokémon
- **Design por Tipo**: Cada Pokémon é colorido de acordo com seu tipo primário
- **Informações Completas**:
  - Número da Pokédex
  - Nome e imagem oficial
  - Tipos (com cores temáticas)
  - Estatísticas base (HP, Attack, Defense, Special Attack, Special Defense, Speed)
  - Dimensões físicas (altura e peso)
  - Lista de habilidades

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com Grid Layout, Flexbox e animações
- **JavaScript ES6+**: Programação orientada a objetos e manipulação do DOM
- **PokéAPI**: API REST para dados dos Pokémon
- **Normalize.CSS**: Reset de estilos para consistência entre navegadores
- **Google Fonts**: Tipografia Roboto para melhor legibilidade

## 🎨 Design e Experiência

### Sistema de Cores por Tipo
A aplicação utiliza uma paleta de cores específica para cada tipo Pokémon:
- 🟢 **Grass**: #77c850
- 🔥 **Fire**: #ee7f30  
- 💧 **Water**: #678fee
- ⚡ **Electric**: #f7cf2e
- 🧊 **Ice**: #98d5d7
- 🪨 **Rock**: #b8a137
- E mais 12 tipos adicionais com cores únicas

### Responsividade
- **Mobile**: 1 coluna
- **Tablet**: 2-3 colunas (380px+)
- **Desktop**: 4 colunas (992px+)

## 🔧 Estrutura do Projeto

```
pokedex/
├── index.html          # Página principal com estrutura HTML completa
├── README.md          # Documentação do projeto
└── assets/            # (opcional) Pasta para recursos adicionais
```

## 📋 Arquitetura

### Classes JavaScript

#### `Pokemon`
Classe modelo que representa um Pokémon com todas suas propriedades:
```javascript
class Pokemon {
    number;           // ID na Pokédex
    name;            // Nome do Pokémon
    type;            // Tipo primário
    types = [];      // Array com todos os tipos
    photo;           // URL da imagem
    height;          // Altura em decímetros
    weight;          // Peso em hectogramas
    stats = {};      // Objeto com todas as estatísticas
    abilities = [];  // Array com habilidades
}
```

#### `pokeApi`
Objeto responsável pela comunicação com a PokéAPI:
- `getPokemons(offset, limit)`: Busca lista paginada de Pokémon
- `getPokemonDetail(pokemon)`: Obtém detalhes completos de um Pokémon
- `convertPokeApiDetailToPokemon(pokeDetail)`: Converte resposta da API para classe Pokemon

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone [URL-DO-REPOSITORIO]
   cd pokedex
   ```

2. **Abra o arquivo**:
   - Simplesmente abra o arquivo `index.html` em qualquer navegador moderno
   - Ou utilize um servidor local como Live Server (VSCode) para desenvolvimento

3. **Acesse a aplicação**:
   - A aplicação carregará automaticamente os primeiros 10 Pokémon
   - Use o botão "Load More" para carregar mais Pokémon
   - Clique em qualquer card para ver detalhes completos

## 📱 Funcionalidades Detalhadas

### Listagem Principal
- Cards coloridos por tipo de Pokémon
- Informações essenciais: número, nome, tipos, estatísticas básicas
- Dimensões físicas e habilidades
- Efeito hover para melhor interatividade

### Modal de Detalhes
- Abertura suave com animações CSS
- Layout organizado em grid para estatísticas e informações
- Todas as 6 estatísticas base do Pokémon
- Lista completa de habilidades
- Fechamento por clique fora ou no botão X

### Sistema de Paginação
- Carregamento inicial de 10 Pokémon
- Botão "Load More" carrega mais 10 por vez
- Limitado aos primeiros 151 Pokémon (Geração I)
- Remoção automática do botão ao atingir o limite

## 🌐 API Integration

A aplicação consome a [PokéAPI](https://pokeapi.co/), uma API RESTful gratuita que fornece:
- Dados completos de todos os Pokémon
- Imagens oficiais de alta qualidade
- Estatísticas, tipos e habilidades
- Informações físicas (altura, peso)

## 🎯 Otimizações

- **Performance**: Carregamento sob demanda evita requisições desnecessárias
- **Responsividade**: Layout adaptativo para todos os dispositivos
- **UX**: Animações suaves e feedback visual imediato
- **Acessibilidade**: Estrutura semântica e contraste adequado

## 🔮 Possíveis Melhorias Futuras

- [ ] Sistema de busca por nome ou número
- [ ] Filtros por tipo de Pokémon
- [ ] Favoritos com localStorage
- [ ] Comparação entre Pokémon
- [ ] Informações de evolução
- [ ] Suporte para mais gerações
- [ ] Modo escuro/claro
- [ ] Animações mais elaboradas

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request
