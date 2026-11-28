import './VerifyPage.css'

type VerifyMode = 'register' | 'reset'

export type VerifyLocationState = {
  email: string
  resendSeconds: number
  mode: VerifyMode
}


export const VerifyPage = () => {
  // const location = useLocation()

  // const state = (location.state as VerifyLocationState) || {}
  // const { email, mode, resendSeconds } = state

  return (
    <div className="verify-page">

    </div>
  )
}
