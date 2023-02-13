import {
  Link
} from "react-router-dom"
import homes from "../data/home.json"
const Home = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-zinc-700">
        <div>{homes.title}</div>
      </h1>
      <div className="bg-gray-100 p-5 mt-10 rounded-lg shadow">
        <p className="text-xl text-zinc-500">{homes.content}</p>
      </div>
      <div className="mt-10 gap-6 grid md:grid-cols-3">
        {homes.cards.map((home) => (
          <Link to={home.link}>
            <div
              className="bg-gray-100 inline-block p-10 relative shadow-sm rounded-xl"
              key={home.id}
            >
              <h2 className="absolute top-0 left-2 text-white bg-rose-500 px-3 rounded-full -mt-2">
                {home.title}
              </h2>
              <p className="text-xl font-medium">
                {home.desc}
                <span className="ml-5 bg-sky-500 px-4 py-2 text-center text-white rounded-full">
                  {home.count}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Home
