import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './themes.css'
import EditorPage from './pages/EditorPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (
    <>
    <ThemeProvider>
      <EditorPage />
    </ThemeProvider>
    </>
  )
}

export default App
