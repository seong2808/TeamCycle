
export default function Login() {
    return (
        <div className="wrap">
          <div className="form-wrap">
              <div className="button-wrap">
                  <div id="btn"></div>
                  <div className="btn-border">
                  <button type="button" className="togglebtn" onClick={
                    function(){
                      document.getElementById("login").style.left = "50px";
                      document.getElementById("register").style.left = "450px";
                      document.getElementById("btn").style.left = "0";
                    }
                  }>LOG IN</button>
                  <button type="button" className="togglebtn" onClick={
                    function(){
                      document.getElementById("login").style.left = "-400px";
                      document.getElementById("register").style.left = "50px";
                      document.getElementById("btn").style.left = "110px";
                    }
                  }>REGISTER</button>
                  </div>
                  
              </div>
              <form id="login" action="" className="input-group">
                  <input type="text" className="input-field" placeholder="User name or Email" required/>                  
                  <input type="password" className="input-field" placeholder="Enter Password" required/>                    
                  <input type="checkbox" className="checkbox"/><span id="checkboxspan">Remember Password</span>                    
                  <button className="submit">로그인</button>
              </form>
              <form id="register" action="" className="input-group">
                  <input type="text" className="input-field" placeholder="User name" required/>                    
                  <input type="email" className="input-field" placeholder="Your ID" required/>                  
                  <input type="password" className="input-field" placeholder="Enter Password" required />
                  <input type="password" className="input-field" placeholder="Enter Password Check" required />   
                  <input type="password" className="input-field" placeholder="Your E-mail" required />                  
                  <input type="checkbox" className="checkbox"/><span id="checkboxspan">Terms and conditions</span>
                  <button className="submit">회원가입</button>
              </form>
          </div>
        </div>        

    );

  }
