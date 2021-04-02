import React, {useState} from 'react';

import SignIn from '../components/Forms/SignIn';
import SignUp from '../components/Forms/SignUp';

const SignPage = () => {
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <section className='sign'>
      {
        showSignUp ? <SignUp setShowSignUp={setShowSignUp}/> : <SignIn setShowSignUp={setShowSignUp}/>
      }
    </section>
  )
}

export default SignPage
