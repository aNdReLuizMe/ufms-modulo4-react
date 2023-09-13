import React from 'react'
import InputText from './InputText'
import Select from './Select'

const Formulario = () => {
   return (
      <form action="../cadastro/page.tsx" method="post">
         <div className='w-auto mx-auto rounded-lg shadow-lg py-10 px-6'>
            <fieldset className=''>
               <label htmlFor="nomeCompleto">Nome Completo:</label>
               <input
                  type="text"
                  id="nomeCompleto"
                  name="nomeCompleto"
                  aria-label="Preencha nome completo. Campo obrigatório."
                  required
               />
               <label htmlFor="cpf">CPF:</label>
               <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  aria-label="Preencha CPF. Campo obrigatório."
                  required
               />
               <label htmlFor="dataNascimento">Data Nascimento:</label>
               <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  aria-label="Preencha data de nascimento. Campo obrigatório."
                  required
               />
               <label htmlFor="estadoCivil">Estado Civil:</label>
               <select
                  id="uf"
                  name="uf"
                  aria-label="Escolha seu estado civil. Campo não obrigatório."
               >
                  <option value="Solteiro">Solteiro</option>
                  <option value="Casado">Casado</option>
                  <option value="Viúvo">Viúvo</option>
                  <option value="Divorciado">Divorciado</option>
               </select>
               <br />
               <label htmlFor="sexo">Sexo</label>
               <input
                  type="radio"
                  id="sexo"
                  name="sexo"
                  defaultValue="M"
                  aria-label="Escolha se seu sexo é Masculino. Campo não obrigatório."
                  required
               />
               M
               <input
                  type="radio"
                  id="sexo"
                  name="sexo"
                  defaultValue="F"
                  aria-label="Escolha se seu sexo é Feminino. Campo não obrigatório."
                  required
               />
               F<br />
            </fieldset>
            <fieldset>
               <label htmlFor="email">E-mail:</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Preencha seu e-mail. Campo obrigatório."
                  required
               />
               <br />
               <label htmlFor="website">Website:</label>
               <input
                  type="url"
                  id="website"
                  name="website"
                  aria-label="Preencha seu website. Campo não obrigatório."
               />
               <br />
               <label htmlFor="telefone">Telefone:</label>
               <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(11)3522-1780"
                  aria-label="Preencha seu telefone fixo. Campo não obrigatório."
               />
               <br />
               <label htmlFor="celular">Celular:</label>
               <input
                  type="tel"
                  id="celular"
                  name="celular"
                  placeholder="(99)99999-9999"
                  aria-label="Preencha seu telefone celular. Campo obrigatório."
                  required
               />
               <br />
               <label htmlFor="endereco">Endereço:</label>
               <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  aria-label="Preencha seu endereço. Campo obrigatório."
                  required
               />
               <br />
               <label htmlFor="bairro">Bairro:</label>
               <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  aria-label="Preencha seu bairro. Campo obrigatório."
                  required
               />
               <br />
               <label htmlFor="cidade">Cidade:</label>
               <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  aria-label="Preencha sua cidade. Campo obrigatório."
                  required
               />
               <br />
               <label htmlFor="cep">CEP:</label>
               <input
                  type="text"
                  id="cep"
                  name="cep"
                  placeholder="99.999-999"
                  aria-label="Preencha seu CEP. Campo obrigatório."
                  required
               />
               <br />
               <label htmlFor="uf">UF:</label>
               <select
                  id="uf"
                  name="uf"
                  aria-label="Selecione seu Estado. Campo obrigatório."
                  required
               >
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
               </select>
            </fieldset>
            <fieldset>
               <p>Deseja receber informações sobre os seguintes assuntos abaixo:</p>
               <div className="containerAssuntos">
                  <div className="assuntos">
                     <label htmlFor="tecnologiaCheckbox">
                        <input
                           type="checkbox"
                           id="tecnologiaCheckbox"
                           name="tecnologiaCheckbox"
                        />
                        Tecnologia
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="esporteCheckbox">
                        <input type="checkbox" id="esporteCheckbox" name="esporteCheckbox" />
                        Esportes
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="automoveisCheckbox">
                        <input
                           type="checkbox"
                           id="automoveisCheckbox"
                           name="automoveisCheckbox"
                        />
                        Automóveis
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="culinariaCheckbox">
                        <input
                           type="checkbox"
                           id="culinariaCheckbox"
                           name="culinariaCheckbox"
                        />
                        Culinária
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="politicaCheckbox">
                        <input
                           type="checkbox"
                           id="politicaCheckbox"
                           name="politicaCheckbox"
                        />
                        Política
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="policialCheckbox">
                        <input
                           type="checkbox"
                           id="policialCheckbox"
                           name="policialCheckbox"
                        />
                        Policial
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="tempoCheckbox">
                        <input type="checkbox" id="tempoCheckbox" name="tempoCheckbox" />
                        Tempo
                     </label>
                     <br />
                  </div>
                  <div className="assuntos">
                     <label htmlFor="culturaCheckbox">
                        <input type="checkbox" id="culturaCheckbox" name="culturaCheckbox" />
                        Cultura
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="economiaCheckbox">
                        <input
                           type="checkbox"
                           id="economiaCheckbox"
                           name="economiaCheckbox"
                        />
                        Economia
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="jogosCheckbox">
                        <input type="checkbox" id="jogosCheckbox" name="jogosCheckbox" />
                        Jogos
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="educacaoCheckbox">
                        <input
                           type="checkbox"
                           id="educacaoCheckbox"
                           name="educacaoCheckbox"
                        />
                        Educação
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="viagemCheckbox">
                        <input type="checkbox" id="viagemCheckbox" name="viagemCheckbox" />
                        Viagem
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="empregoCheckbox">
                        <input type="checkbox" id="empregoCheckbox" name="empregoCheckbox" />
                        Empregos
                     </label>
                  </div>
                  <div className="assuntos">
                     <label htmlFor="modaEstiloCheckbox">
                        <input
                           type="checkbox"
                           id="modaEstiloCheckbox"
                           name="modaEstiloCheckbox"
                        />
                        Moda e Estilo
                     </label>
                     <br />
                     <br />
                  </div>
               </div>
               <div className="termoConsentimento">
                  <label htmlFor="termoCheckbox">
                     <input
                        type="checkbox"
                        id="termoCheckbox"
                        name="termoCheckbox"
                        required
                     />
                     Li as regras de cadastro e autorizo a criação do usuário
                  </label>
                  <br />
                  <br />
               </div>
               <div className="loginSenha">
                  <label htmlFor="login">Login:</label>
                  <input type="text" id="login" name="login" required />
                  <br />
                  <label htmlFor="senha">Senha:</label>
                  <input type="password" id="senha" name="senha" required />
               </div>
            </fieldset>
            <br />
            <div>
               <input type="submit" id="botao" defaultValue="Confirmar" />
               <input type="reset" id="botao" defaultValue="Retornar" />
               <InputText/>
               <Select />
            </div>
         </div>
      </form>
   )
}

export default Formulario