---
sidebar_position: 2
---

# Botão Adicionar

Através do botão **Adicionar**, presente à direita do *dropdown*,  é possível inserir novos dados manualmente, tais como:
- Docentes
- Unidades Curriculares
- Turmas e Wishlists

O botão está presente no story book do PACO, pelo que para ser utilizado é necessário ser importado, através de:
```bash
import { Button } from '@paco_ua/pacoui';
```

Ao clicar no botão é executada a função **handleModal** que, mostra a modal com os *inputs* para os valores a inserir.
```bash
<Button primary onClick={props.handleModal}>
    Adicionar
</Button>
```