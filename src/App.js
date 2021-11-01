import { Suspense, lazy } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthGuard from "./auth/AuthGuard"
import ProvideAuth from "./auth/ProvideAuth"

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Suspense fallback={<div></div>}>
            <AuthGuard>
              <Route exact path="/" component={Home}/>
            </AuthGuard>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/registrar" component={Register}/>
            <Route exact path="/recuperar" component={ResetPassword}/>
        </Suspense>
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
