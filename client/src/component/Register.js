export default function Register() {
    return (
      <div className="Register">
  
        <h2>회원가입</h2>
        
        <div className="Login_user">
            <div>
                <input label="이메일" name="email" placeholder="이메일"/>
            </div>
            <div>
                <input label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
            </div>
            <button>로그인</button>
            <button>회원가입</button>
        </div>
        
      </div>
    );
  }