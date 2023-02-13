---
sidebar_position: 1
---

# Atribuir Docentes a Turmas

Esta funcionalidade permite responder á necessidade principal do processo deste sistema complexo.<br/>
Isto pode ser atingido ao clicar numa **célula** de uma **UC** que esteja vazia e inserir a **sigla** do **docente** pretendido. 
Ao inserir a sigla do docente uma caixa de **autocomplete** aperece contendo todas as siglas que possuem os caracteres inseridos pelo utilizador, de forma a facilitar a experiência do utilizador neste processo.

```bash
<Cell
  key={v.ucID + `${v.classeID}`}
  id={v.classeID}
  info={v}
  extClass={"cell sm " + v.component.toLowerCase()}
  inputClass={"input " + v.component.toLowerCase()}
  text={v.professorAcronym}
  hours={v.classHours}
  percentage={v.availabilityPercentage}
  onChildChange={handleChildChange}
></Cell>
```
A célula representante de uma turma está da seguinte maneira estruturada no código.
A maior parte dos campos são apenas informações acerca da turma (*hora da aula*, *percentagem de cada docente na aula*, ...), existindo também uma função associada que apenas envia para a *API* a turma e o respetivo docente introduzido pelo utilizador. 


O autocomplete é feito da seguinte maneira mostrada abaixo.
```bash
<Autocomplete 
  value={autoValue} 
  onAutoClick={onAutoClick}
/>
```
O **autoValue** representa os valores/siglas de docentes que o autocomplete mostrará ao utilizador. Estes valores são recolhidos conforme os caracteres inseridos pelo mesmo.<br/>
O **onAutoClick** representa uma função que muda o docente atribuído na célula caso o utilizador clique numa das siglas apresentadas no autocomplete.