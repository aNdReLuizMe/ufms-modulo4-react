import React from 'react'

const Formulario = () => {
  return (
    <>
        <form action="/" method="post">

<fieldset>
  <label for="nomeCompleto">Nome Completo:</label>
  <input type="text" id="nomeCompleto" name="nomeCompleto" aria-label="Preencha nome completo. Campo obrigatório."
    required /><br />

  <label for="cpf">CPF:</label>
  <input type="text" id="cpf" name="cpf" aria-label="Preencha CPF. Campo obrigatório." required /><br />

  <label for="dataNascimento">Data Nascimento:</label>
  <input type="date" id="dataNascimento" name="dataNascimento"
    aria-label="Preencha data de nascimento. Campo obrigatório." required /><br />


  <label for="estadoCivil">Estado Civil:</label>
  <select id="uf" name="uf" aria-label="Escolha seu estado civil. Campo não obrigatório."><br />
    <option value="Solteiro">Solteiro</option>
    <option value="Casado">Casado</option>
    <option value="Viúvo">Viúvo</option>
    <option value="Divorciado">Divorciado</option>
  </select><br />

  <label for="sexo">Sexo</label>
  <input type="radio" id="sexo" name="sexo" value="M"
    aria-label="Escolha se seu sexo é Masculino. Campo não obrigatório." required />M
  <input type="radio" id="sexo" name="sexo" value="F"
    aria-label="Escolha se seu sexo é Feminino. Campo não obrigatório." required />F<br />

</fieldset>

<fieldset>

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" aria-label="Preencha seu e-mail. Campo obrigatório."
    required /><br />

  <label for="website">Website:</label>
  <input type="url" id="website" name="website" aria-label="Preencha seu website. Campo não obrigatório." /><br />

  <label for="telefone">Telefone:</label>
  <input type="tel" id="telefone" name="telefone" placeholder="(11)3522-1780"
    aria-label="Preencha seu telefone fixo. Campo não obrigatório." /><br />

  <label for="celular">Celular:</label>
  <input type="tel" id="celular" name="celular" placeholder="(99)99999-9999"
    aria-label="Preencha seu telefone celular. Campo obrigatório." required /><br />

  <label for="endereco">Endereço:</label>
  <input type="text" id="endereco" name="endereco" aria-label="Preencha seu endereço. Campo obrigatório."
    required /><br />

  <label for="bairro">Bairro:</label>
  <input type="text" id="bairro" name="bairro" aria-label="Preencha seu bairro. Campo obrigatório."
    required /><br />

  <label for="cidade">Cidade:</label>
  <input type="text" id="cidade" name="cidade" aria-label="Preencha sua cidade. Campo obrigatório."
    required /><br />

  <label for="cep">CEP:</label>
  <input type="text" id="cep" name="cep" placeholder="99.999-999"
    aria-label="Preencha seu CEP. Campo obrigatório." required /><br />

  <label for="uf">UF:</label>
  <select id="uf" name="uf" aria-label="Selecione seu Estado. Campo obrigatório." required>
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
  <div class="containerAssuntos">
    <div class="assuntos">
      <label for="tecnologiaCheckbox"><input type="checkbox" id="tecnologiaCheckbox"
          name="tecnologiaCheckbox" />Tecnologia</label>
    </div>

    <div class="assuntos">
      <label for="esporteCheckbox"><input type="checkbox" id="esporteCheckbox"
          name="esporteCheckbox" />Esportes</label>
    </div>

    <div class="assuntos">
      <label for="automoveisCheckbox"><input type="checkbox" id="automoveisCheckbox"
          name="automoveisCheckbox" />Automóveis</label>
    </div>

    <div class="assuntos">
      <label for="culinariaCheckbox"><input type="checkbox" id="culinariaCheckbox"
          name="culinariaCheckbox" />Culinária</label>
    </div>

    <div class="assuntos">
      <label for="politicaCheckbox"><input type="checkbox" id="politicaCheckbox"
          name="politicaCheckbox" />Política</label>
    </div>

    <div class="assuntos">
      <label for="policialCheckbox"><input type="checkbox" id="policialCheckbox"
          name="policialCheckbox" />Policial</label>
    </div>

    <div class="assuntos">
      <label for="tempoCheckbox"><input type="checkbox" id="tempoCheckbox"
          name="tempoCheckbox" />Tempo</label><br />
    </div>

    <div class="assuntos">
      <label for="culturaCheckbox"><input type="checkbox" id="culturaCheckbox"
          name="culturaCheckbox" />Cultura</label>
    </div>

    <div class="assuntos">
      <label for="economiaCheckbox"><input type="checkbox" id="economiaCheckbox"
          name="economiaCheckbox" />Economia</label>
    </div>

    <div class="assuntos">
      <label for="jogosCheckbox"><input type="checkbox" id="jogosCheckbox" name="jogosCheckbox" />Jogos</label>
    </div>

    <div class="assuntos">
      <label for="educacaoCheckbox"><input type="checkbox" id="educacaoCheckbox"
          name="educacaoCheckbox" />Educação</label>
    </div>

    <div class="assuntos">
      <label for="viagemCheckbox"><input type="checkbox" id="viagemCheckbox"
          name="viagemCheckbox" />Viagem</label>
    </div>

    <div class="assuntos">
      <label for="empregoCheckbox"><input type="checkbox" id="empregoCheckbox"
          name="empregoCheckbox" />Empregos</label>
    </div>

    <div class="assuntos">
      <label for="modaEstiloCheckbox"><input type="checkbox" id="modaEstiloCheckbox"
          name="modaEstiloCheckbox" />Moda
        e Estilo</label><br /><br />
    </div>
  </div>

  <div class="termoConsentimento">
    <label for="termoCheckbox"><input type="checkbox" id="termoCheckbox" name="termoCheckbox" required />Li as
      regras de cadastro e autorizo a criação do usuário</label><br /><br />
  </div>

  <div class="loginSenha">
    <label for="login">Login:</label>
    <input type="text" id="login" name="login" required /><br />

    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha" required />
  </div>
</fieldset><br />

<div>
  <input type="submit" id="botao" value="Confirmar" />
  <input type="reset" id="botao" value="Retornar" />
</div>

</form>
    </>
  )
}

export default Formulario;