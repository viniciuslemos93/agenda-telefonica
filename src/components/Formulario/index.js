import './Formulario.css'
import { useState } from 'react'
import CampoDeInput from "../CampoDeInput"
import { cpfMask } from '../../helpers/cpfMask'


function Formulario() {
  const [nome, setNome] = useState ('')
  const [email, setEmail] = useState ('')
  const [dtNasc, setDtNasc] = useState ('')
  const [cpf, setCpf] = useState ('')
  const [telefone, setTelefone] = useState ('')
  return (
    <div>
        <h1>Agenda Telefônica</h1>

        <CampoDeInput
          nome="Nome"
          id="nome"
          aoAlterado={valor => setNome(valor)}
          valor = {nome}
        />

        <CampoDeInput
          nome="E-mail"
          id="email"
          aoAlterado={valor => setEmail(valor)}
          valor = {email}
        />

        <CampoDeInput
          nome="Data de Nascimento"
          id="dtNasc"
          aoAlterado={valor => setDtNasc(valor)}
          valor = {dtNasc}
        />

        <CampoDeInput
          nome="CPF"
          id="cpf"
          aoAlterado={valor => setCpf(cpfMask(valor))}
          valor = {cpf}
        />

        <CampoDeInput
          nome="Telefone"
          id="telefone"
          aoAlterado={valor => setTelefone(valor)}
          valor = {telefone}
        />

    </div>
  )
}

export default Formulario