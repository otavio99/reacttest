import { Suspense, lazy } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthGuard from "./auth/AuthGuard"
import ProvideAuth from "./auth/ProvideAuth"

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Suspense fallback={<div></div>}>
            <AuthGuard>
              <Route exact path="/" component={Home}/>
            </AuthGuard>

            <Route exact path="/login" component={Login}/>
        </Suspense>
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
