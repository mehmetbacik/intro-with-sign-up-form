import { useFormik } from 'formik';
import validationSchema from './validations';

function SignUp() {
    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
        initialValues: {
          name: 'Name',
          lastName: 'Last Name',
          email: 'Email Adress',
          password: 'Password',
          passwordConfirm: 'Password',
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema,
    });
    return (
        <div className='sign__up__form'>
            <div className='try__it__free'>
              <span><b>Try it free 7 days</b> then $20/mo. thereafter</span>
            </div>
            <div className='form__content'>
              <form onSubmit={handleSubmit}>
                <div>
                  <input name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.name && touched.name && <div className="error">{errors.name}</div>}
                </div>
                <div>
                  <input name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
                </div>
                <div>
                  <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.email && touched.email && <div className="error">{errors.email}</div>}
                </div>
                <div>
                  <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.password && touched.password && <div className="error">{errors.password}</div>}
                </div>
                <div>
                  <input type="password" name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.passwordConfirm && touched.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}
                </div>
                <div>
                  <button type="submit">Claim Your Free Trial</button>
                </div>
                <div>
                  <span>By clicking the button, you are agreeing to our <b>Terms and Services</b></span>
                </div>
                <code>{JSON.stringify(values)}</code>
              </form>
            </div>
        </div>
    )
}

export default SignUp;