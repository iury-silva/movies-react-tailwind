import { createBrowserRouter } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import About from "./pages/About"
import App from "./App"
import MoviePage from "./pages/MoviePage"
import Search from "./pages/Search"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "movie/:id",
        element: <MoviePage />
      },
      {
        path: "search/",
        element: <Search />
      },
    ]
  },
])

export default router