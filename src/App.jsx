//import { useState } from 'react'
import './App.css'
import Cabecalho from './Cabecalho'
import Section from './Section'

export default function App() {

  return (
    <>
      <Cabecalho/>

      <Section tipo="Sobre" titulo="Sobre mim" subtitulo="Analista de Sistemas I, na Atos e recém formado em Sistemas de Informação." />

      <Section tipo="Filmes" titulo="Filmes Favoritos" subtitulo="Aqui vão alguns filmes que gostei" />

      <Section tipo="Contato" titulo="Contatos"/>

    </>
  )
}


