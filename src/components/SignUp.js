import { useFormik } from 'formik';
import validationSchema from './validations';

function SignUp() {
    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
        initialValues: {
          name: '',
          lastName: '',
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
        <div className='sign__up__form'>
            <div className='try__it__free'>
              <span><b>Try it free 7 days</b> then $20/mo. thereafter</span>
            </div>
            <div className='form__content'>
              <form onSubmit={handleSubmit}>
                <div className='input'>
                  <div className='input__content'>
                    <input name='name' value={values.name} placeholder="Name" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.name && touched.name && <div className="warning-img"></div>}
                  </div>
                  {errors.name && touched.name && <div className="error">{errors.name}</div>}
                </div>
                <div className='input'>
                  <div className='input__content'>
                    <input name='lastName' value={values.lastName} placeholder="Last Name" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.lastName && touched.lastName && <div className="warning-img"></div>}
                  </div>
                  {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
                </div>
                <div className='input'>
                  <div className='input__content'>
                    <input name='email' value={values.email} placeholder="Email Address" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.email && touched.email && <div className="warning-img"></div>}
                  </div>
                  {errors.email && touched.email && <div className="error">{errors.email}</div>}
                </div>
                <div className='input'>
                  <div className='input__content'>
                    <input type="password" name='password' value={values.password} placeholder="Password" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password && touched.password && <div className="warning-img"></div>}
                  </div>
                  {errors.password && touched.password && <div className="error">{errors.password}</div>}
                </div>
                <div className='input'>
                  <div className='input__content'>
                    <input type="password" name='passwordConfirm' value={values.passwordConfirm} placeholder="Confirm Password" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.passwordConfirm && touched.passwordConfirm && <div className="warning-img"></div>}
                  </div>
                  {errors.passwordConfirm && touched.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}
                </div>
                <div className='input'>
                  <button type="submit">Claim Your Free Trial</button>
                </div>
                <div className='text'>
                  <span>By clicking the button, you are agreeing to our <b>Terms and Services</b></span>
                </div>
                <code>{JSON.stringify(values)}</code>
              </form>
            </div>
        </div>
    )
}

export default SignUp;