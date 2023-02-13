---
sidebar_position: 1
---

# Barra de Pesquisa

Este objeto é um componente retirado do *PACO* que apenas se trata de uma barra de pesquisa, onde os nomes e siglas dos docentes podem ser introduzidos de forma a obter os docentes pretendidos.

![SearchBar](./barra.png)

```bash
<SearchBox
    borderColor=""
    defaultValue=""
    iconColor=""
    placeholder="Procurar"
    onSearch={searchBarOnChange}
/>
```

Ao ser alterado o texto na barra de pesquisa, uma função é executada de forma a instantaneamente obter os docentes cujos nomes/siglas estejam de encontro com os caracteres introduzidos.