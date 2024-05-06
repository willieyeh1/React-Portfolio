// Imports the outlet hook
import { Outlet } from 'react-router-dom';

// Import the header, footer, and each of the main bodys
import Footer from './Components/footer'
import Header from './Components/header'

// Main app function
function App() {
  // HTML
  return (
    <>
      {/* Loads the Header react page */}
      <Header />
      {/* Loads the body page associated with the current route */}
      <main>
        <Outlet />
      </main>
      {/* Loads the Footer react page */}
      <Footer />
    </>
  )
}

// Exports the App page
export default App
