import bottom from "../../assets/img/img-register.pmg";
import "./styles.css";
import "./media.css";

function register () {
    return(
    <div>
    <img src={bottom} />
    <form>
        <h1>Cadastre-se</h1>
        <div className="input-class-grid">
          <div className="input-bx">
            <span>Nome</span>
            <input type="text" id="name" name="displayName" required/>
          </div>
          <div className="input-bx">
            <span>Sobrenome</span>
            <input type="text" id="surname" name="displaySurname" required/>
          </div>
        </div>
          <div className="input-bx">
            <span>Email address</span>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="input-bx">
          <span>Password</span>
          <input type="password" id="password" name="password" required/>
        </div>
        <button className="btn-register"><a>Cadastrar</a></button>
    </form>
    </div>
    )
}

export default register