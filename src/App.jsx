import './App.css'
import Paragraph from './components/paragraph/paragraph.jsx'

function App() {

  const showChanges = (textColor, textTransform) => {
    console.log('Text color:', textColor);
    console.log('Text transform:', textTransform);
  }


  return (
    <>

      <Paragraph showChanges={showChanges}></Paragraph>

    </>
  )
}

export default App
