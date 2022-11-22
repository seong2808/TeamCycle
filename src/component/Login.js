
export default function Login() {


    
    return (

        <div className="wrap">
          <div className="form-wrap">
              <div className="button-wrap">
                  <div id="btn"></div>
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
