
export default function Login() {

  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");

  function login_fn(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
  }
  function register_fn(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  }
    
    return (


    

        <div className="wrap">
          <div className="form-wrap">
              <div className="button-wrap">
                  <div id="btn"></div>
                  <button type="button" className="togglebtn" onClick={login_fn}>LOG IN</button>
                  <button type="button" className="togglebtn" onClick={register_fn}>REGISTER</button>
                  
              </div>
              <form id="login" action="" className="input-group">
                  <input type="text" className="input-field" placeholder="User name or Email" required/>                  
                  <input type="password" className="input-field" placeholder="Enter Password" required/>                    
                  <input type="checkbox" className="checkbox"/><span>Remember Password</span>                    
                  <button className="submit">Login</button>
              </form>
              <form id="register" action="" className="input-group">
                  <input type="text" className="input-field" placeholder="User name" required/>                    
                  <input type="email" className="input-field" placeholder="Your ID" required/>                  
                  <input type="password" className="input-field" placeholder="Enter Password" required />
                  <input type="password" className="input-field" placeholder="Enter Password Check" required />   
                  <input type="password" className="input-field" placeholder="Your E-mail" required />                  
                  <input type="checkbox" className="checkbox"/><span>Terms and conditions</span>
                  <button className="submit">REGISTER</button>
              </form>
          </div>
        </div>        

    );

  }
