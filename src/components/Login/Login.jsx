import {Form, Field} from 'react-final-form'
import { loginApi } from '../../api/api';
import { setUserProfile } from '../../redux/profile-reducer';





const Login = (props) => {
  
  const onSubmit = (values) => {
    loginApi.login(values).then(response => {
      if (response.data.resultCode === 0) {
        setUserProfile(response.data.data.userId);
      }
    });
  }

  const required = v => (v ? undefined : "required")
  
  return(
  <Form
    onSubmit ={onSubmit}
    render={({handleSubmit, invalid})=> (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <Field name={"email"} component={"input"} validate={required}/>
            </div>
            <div>
              <Field name={"password"} component={"input"} validate={required} />
            </div>
            <div>
              <Field name={"rememberMe"} component={"input"} type={"checkbox"} />
              <span>remember me</span>
            </div>
            <div>
              <button type="submit" disabled={invalid}>Login</button>
            </div>
          </form>

        </div>
      )

    }
  />)
}

export default Login;