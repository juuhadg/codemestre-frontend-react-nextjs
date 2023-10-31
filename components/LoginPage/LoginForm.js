
export default function LoginForm() {
    return (
        <>
        
  <div id="form-ui">
    <form action="" method="post" id="form">
      <div id="form-body">
        <div id="welcome-lines">
          <div id="welcome-line-1">Login</div>
          <div id="welcome-line-2">Bem-Vindo de Volta</div>
        </div>
        <div id="input-area">
          <div class="form-inp">
            <input placeholder="E-mail" type="text"/>
          </div>
          <div class="form-inp">
            <input placeholder="Senha" type="password"/>
          </div>
        </div>
        <div id="submit-button-cvr">
          <button id="submit-button" type="submit">Login</button>
        </div>
        <div id="forgot-pass">
          <a href="#">Esqueceu sua senha?</a>
        </div>

        
        
      </div>
    </form>

        


    </div>
  
        </>
    )
}