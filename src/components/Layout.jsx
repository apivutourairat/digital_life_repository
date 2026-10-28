import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Frame from './Frame'
import SideNav from './SideNav'
import Footer from './Footer'

// Jump to a #section on navigation, otherwise start each page at the top.
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

// Chrome shared by every page: corner labels, side navigation and footer.
export default function Layout() {
  return (
    <>
      <ScrollToHash />
      <Frame />
      <SideNav />
      <Outlet />
      <Footer />
    </>
  )
}
