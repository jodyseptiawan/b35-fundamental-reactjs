import {useState} from "react";

//Create Component PrivatePage
const PrivatePage = (props) => {
  const setIsLogin = props.setIsLogin

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => setIsLogin(false)}>Logout</button>
    </div>
  )
}

//Create Component GuestPage
function GuestPage(props) {
  const setIsLogin = props.setIsLogin

  // function Login() {
  //   setIsLogin(true)
  // }

  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={() => setIsLogin(true)}>Login</button>
      {/* <button onClick={Login}>Login</button> */}
    </div>
  )
}

function ConditionRenderin() {
  const [isLogin, setIsLogin] = useState(false);

  console.log(isLogin)

  return (
    <div>
      {isLogin === true ? 
        <PrivatePage setIsLogin={setIsLogin} /> : 
        <GuestPage setIsLogin={setIsLogin} />}
    </div>
  );

  // if(isLogin == true){
  //   return (
  //     <div>
  //       <PrivatePage /> 
  //     </div>
  //   );
  // }else{
  //   return (
  //     <div>
  //       <GuestPage /> 
  //     </div>
  //   );
  // }


}

export default ConditionRenderin;
