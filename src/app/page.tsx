import Link from "next/link"
import Navigation from "./components/Navigation/page"
import Main from "./components/Main/page"

export default function Home() {
  return (
  <>
    <aside className="">
      <Navigation/>
    </aside>
    <main>
      <Main/>
    </main>
  </>
  )
}
