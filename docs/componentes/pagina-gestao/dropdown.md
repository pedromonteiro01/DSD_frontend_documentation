---
sidebar_position: 1
---

# Secções

Nesta página é possível ter uma visão geral dos dados presentes na plataforma, bem como adicionar novos dados, remover ou alterar os dados existentes.

![Management Page](./gestao.png)

É permitido selecionar qual a vista que é mostrada, sendo possível observar:
- Lista de Docentes
- Lista de Turmas
- Lista de Wishlists

Estas vistas podem ser selecionadas utilizando o componente referente à lista de opções, **dropdown**, que por *default*, apresenta a lista de professores/docentes. Ao clicar num elemento do **dropdown** é executada a função *selectChange()* que, através de redux, atualiza o id do item selecionado para que esse seja apresentado.

```js
const selectChange = (value: string) => {
    dispatch(homeActions.setGridView(value));
};

<Dropdown
    selectOptions={[
    { id: "professors", name: "Listar Professores" },
    { id: "classes", name: "Listar Turmas" },
    { id: "wishlists", name: "Listar Wishlist" },
    ]}
    onChange={selectChange}
/>
```