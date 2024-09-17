



import { Formik } from 'formik';
import './App.css'
const Registration2 = () => (
  <div>
    
    <Formik
      initialValues={{ email: '', password: '' ,confirmPassword:'' ,number:'' , date:''}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(values.password) 
        ) {
          errors.password = 'Please enter a valid password';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
          } else if (
            values.password !== values.confirmPassword 
          ) {
            errors.password = 'Passwords do not match';
          }

          if (!values.number) {
            errors.number= 'Required';
          } else if (
            !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(values.number)
          ) {
            errors.number= 'Please enter a valid phone number';
          }
          if (!values.date) {
            errors.date= 'Required';
          } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
       
      }) => (
       <div className="input"><form onSubmit={handleSubmit}>
         <p>Registration Form</p>
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}

          <input
            type="tel"
            name="number"
            placeholder='Enter your phone number'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.number}
          />
          {errors.number && touched.number && errors.number}

          <input
            type="date"
            name="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.date}
          />
          {errors.date && touched.date && errors.date}





          <input
            type="password"
            name="password"
            placeholder='Enter your password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}

          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirm your password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}

          





          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
         
        </form>
        </div> 
      )}
    </Formik>
  </div>
);



export default Registration2;
