import React from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { CardPerfil } from '..';


const TodosOsMembros = ({ perfis}) => {
  // State que guarda os usuários selecionados
  const [selectedItens, setSelectedItens] = useState(new Map());

  // Vai adicionando os usuários selecionados em um conjunto
  const selectItem = (perfil) => {
    const aux = selectedItens;
    aux.set(perfil.nome, perfil);
    setSelectedItens(aux);
  }

  // Remove um usuário do conjunto
  const removeItem = (perfil) => {
    const aux = selectedItens;
    aux.delete(perfil.nome);
    setSelectedItens(aux);
  }

  return (
      <ScrollView>
          {
            perfis?.map((perfil)=>{
              return <CardPerfil key={perfil.id} perfil={perfil} onSelect={selectItem} onRemove={removeItem}/>
            })
          }
      </ScrollView>
  );
}

export default TodosOsMembros;