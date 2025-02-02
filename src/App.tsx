import AppRouter from "./routes/Routes"
import { useEffect } from 'react';
import { getCsrfToken } from "./services/Axios";  

const App = () => {
  useEffect(() => {
    getCsrfToken();  
  }, []);


  return <AppRouter/>
}

export default App;
