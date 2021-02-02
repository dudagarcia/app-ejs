import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CardPerfil } from '..';


const MeuSetor = ({ perfis }) => {

  // State que guarda os usuários selecionados
  const [selectedItens, setSelectedItens] = useState(new Map());

  // Vai adicionando os usuários selecionados em um conjunto
  const selectItem = (perfil) => {
    const aux = selectedItens;
    aux.set(perfil.nome, perfil);
    setSelectedItens(aux);
    console.log(selectedItens);
  }

  // Remove um usuário do conjunto
  const removeItem = (perfil) => {
    const aux = selectedItens;
    aux.delete(perfil.nome);
    setSelectedItens(aux);
    console.log(selectedItens);
  }

  return (
      <ScrollView>
          {
            perfis.map((perfil)=>{
              return <CardPerfil key={perfil.id} perfil={perfil || {nome: 'teste'}} onSelect={selectItem} onRemove={removeItem}/>
            })
          }
      </ScrollView>
  );
}

export default MeuSetor;