import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="bg-light-theme-very-light-grayish-blue min-h-screen p-8 font-josefin text-dark-theme-very-dark-blue">
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link className="px-4 py-2 bg-light-theme-very-light-gray hover:bg-light-theme-light-grayish-blue rounded-[5px]" to="/"><span>Go home</span></Link>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
