import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:orderId" element={<Success />} />
      </Route>
    </Routes>
  )
}
