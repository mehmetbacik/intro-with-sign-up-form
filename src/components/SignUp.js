import { useFormik } from 'formik';
import validationSchema from './validations';

function SignUp()  {
    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
        initialValues: {
          email: '',
          password: '',
          passwordConfirm: '',
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema,
    });
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
    
              <label>Email</label>
              <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>

              {errors.email && touched.email && <div className="error">{errors.email}</div>}

              <label>Password</label>
              <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>

              {errors.password && touched.password && <div className="error">{errors.password}</div>}

              <label>Password Confirm</label>
              <input type="password" name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur}/>

              {errors.passwordConfirm && touched.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}
    
              <button type="submit">Submit</button>

              <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default SignUp;