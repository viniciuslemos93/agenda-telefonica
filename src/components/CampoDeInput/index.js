import './CampoDeInput.css'
function CampoDeInput({nome, id, valor, aoAlterado, tipo='text'}){
  return (
    <div className="lineInput">
        <label for={id}>{nome} </label>
        <input onChange={evento => aoAlterado(evento.target.value)} value={valor} type={tipo} id={id} />
    </div>
  )
}

export default CampoDeInput