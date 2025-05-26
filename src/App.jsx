import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { VipProvider } from './components/VipContext'
import VipList from './components/VipList'
import VipDetail from './components/VipDetail'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'

function App() {

  return (
    <div className="flex justify-center items-center min-h-screen">
      <BrowserRouter>
        <VipProvider>
            <Routes>
              <Route path="/" element={<VipList />}>
                <Route path=":id" element={<VipDetail />} />
              </Route>
              <Route path="/new" element={<AddForm />} />
              <Route path='edit/:id' element={<EditForm />} />
            </Routes>
        </VipProvider>
      </BrowserRouter>
    </div>

  )
}

export default App