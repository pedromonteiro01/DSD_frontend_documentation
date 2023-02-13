---
sidebar_position: 4
---

# Barra de Pesquisa

A barra de pesquisa é semelhante às abordadas anteriormente, retirada do PACO, e que executa a função **onFilterTextBoxChanged()**.

```js
<SearchBox
    borderColor=""
    defaultValue=""
    iconColor=""
    placeholder="Procurar"
    onSearch={onFilterTextBoxChanged}
/>
```

A função **onFilterTextBoxChanged()** assenta numa callback que permite filtrar as células da tabela de acordo com o que é escrito na barra de pesquisa, sendo possível filtrar por qualquer elemento da tabela. Esta função utiliza um método, **setQuickFilter()**, proveniente da API da [ag-grid](https://www.ag-grid.com/react-data-grid/filter-quick/).

```js
const onFilterTextBoxChanged = useCallback((str: string) => {
    setInput(str);
    gridRef.current!.api.setQuickFilter(str);
}, []);
```