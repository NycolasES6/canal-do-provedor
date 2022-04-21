import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './components/Header'
import GlobalStyles from './STyles/GlobalStyles'

import {createServer} from 'miragejs'
createServer({
  routes(){
    this.namespace = 'api'

    this.get('/cursos', () =>{
      return[
        {
          title:"Fundamentos de redes de computadores",
          description:"Aprenda os fundamentos de tudo que você precisa saber sobre o assunto de redes para começar na área, desde protocolo http até configuração de redes, da teoria a prática.",
          link:"/cursos/rede-de-computadores",
          imgSrc:"./assets/cover-curso.png",
          
        },
        {
          title:"Fundamentos de redes de computadores",
          description:"Aprenda os fundamentos de tudo que você precisa saber sobre o assunto de redes para começar na área, desde protocolo http até configuração de redes, da teoria a prática.",
          link:"/cursos/rede-de-computadores",
          imgSrc:"./assets/cover-curso.png"
        },
        {
          title:"Fundamentos de redes de computadores",
          description:"Aprenda os fundamentos de tudo que você precisa saber sobre o assunto de redes para começar na área, desde protocolo http até configuração de redes, da teoria a prática.",
          link:"/cursos/rede-de-computadores",
          imgSrc:"./assets/cover-curso.png"
        },
        {
          title:"Fundamentos de redes de computadores",
          description:"Aprenda os fundamentos de tudo que você precisa saber sobre o assunto de redes para começar na área, desde protocolo http até configuração de redes, da teoria a prática.",
          link:"/cursos/rede-de-computadores",
          imgSrc:"./assets/cover-curso.png"
        },
        {
          title:"Fundamentos de redes de computadores",
          description:"Aprenda os fundamentos de tudo que você precisa saber sobre o assunto de redes para começar na área, desde protocolo http até configuração de redes, da teoria a prática.",
          link:"/cursos/rede-de-computadores",
          imgSrc:"./assets/cover-curso.png"
        },
        {
          title:"Fundamentos de redes de computadores",
          description:"Aprenda os fundamentos de tudo que você precisa saber sobre o assunto de redes para começar na área, desde protocolo http até configuração de redes, da teoria a prática.",
          link:"/cursos/rede-de-computadores",
          imgSrc:"./assets/cover-curso.png"
        },
        {
          title:"Fundamentos de redes de computadores",
          description:"Aprenda os fundamentos de tudo que você precisa saber sobre o assunto de redes para começar na área, desde protocolo http até configuração de redes, da teoria a prática.",
          link:"/cursos/rede-de-computadores",
          imgSrc:"./assets/cover-curso.png"
        },
        {
          title:"Fundamentos de redes de computadores",
          description:"Aprenda os fundamentos de tudo que você precisa saber sobre o assunto de redes para começar na área, desde protocolo http até configuração de redes, da teoria a prática.",
          link:"/cursos/rede-de-computadores",
          imgSrc:"./assets/cover-curso.png"
        },
      ]
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Header/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
