import { useState } from 'react'
import './MyForm.module.css'

const MyForm = ({ user }) => {
  // 062. gestão de dados
  // 065. Controlled inputs
  const [name, setName] = useState(user.name ? (user.name) : (''));
  const [email, setEmail] = useState(user.email ? (user.email) : (''));
  const [bio, setBio] = useState(user.bio ? (user.bio) : (''));
  const [teste, setTeste] = useState();

  const [role, setRole] = useState(user.role ? (user.role) : (''));

  const handleName = (event) => {
    setName(event.target.value);
  };
  console.log('name: ', name, 'email: ', email, 'bio: ', bio, 'role: ', role);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTeste(`Enviando Formulário, 
      name: ${name}, 
      mail: ${email}, 
      bio: ${bio},
      role: ${role}`)

    // 065. limpar formulários
    setName('');
    setEmail('');
    setBio('');
    setRole('');
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div>
          <h3>= 060. label com input =</h3>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name='name'
            placeholder='Digite o seu nome'
            onChange={handleName}
            value={name} />
        </div>

        <h3>= 061. label envolvendo input =</h3>
        <label>
          <span>E-mail</span>
          <input
            type='email'
            name='email'
            placeholder='Digite o seu e-mail'
            onChange={(event) => setEmail(event.target.value)}
            value={email} />
        </label>



        <h3>= 062. gestão de dados setState =</h3>
        <p>O Nome vai alterando: {name}</p>

        <h3>= 063. alteração de setState inline =</h3>
        <p>O Email vai alterando: {email}</p>

        <h3>= 064. envio dados do form event.preventDefault =</h3>
        <p> {teste}</p>

        <h3>= 065. Controled inputs passando dados para o form.input field's =</h3>

        <h3>= 065. limpar formulários =</h3>

        <h3>= 067. textArea =</h3>
        <label>
          <span>Bio:</span>
          <textarea name='bio' placeholder='comentários do utilizador' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>

        <h3>= 068. select no react type of input field =</h3>
        <label>
          <span></span>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">Utilizador</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>

          </select>
        </label>



        <input type="submit" value='Enviar' />
      </form>
    </div>
  )
}

export default MyForm
