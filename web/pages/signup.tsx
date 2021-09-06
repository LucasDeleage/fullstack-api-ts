import { Layout } from '../components/layout'
import { AuthForm } from '../components/authForm'

const Signup = (): JSX.Element => {
  return (
    <Layout>
      <AuthForm title="Sign up to you new account" />
    </Layout>
  )
}

export default Signup
