import { Suspense, useState } from "react"
import { Data } from "./Data"
import ErrorBoundry from "./ErrorBoundary"
const URLS = {
  USERS:
    "https://dummyjson.com/users?limit=3&select=id,firstName,lastName,gender,age",
  POSTS: "https://dummyjson.com/posts?limit=3&select=id,title,body",
  COMMENTS: "https://dummyjson.com/comments?limit=3",
}
function App() {
  const [url, setUrl] = useState(URLS.USERS)
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }
  return (
    <div className="App">
      <div className="radios">
        <label>
          <input
            type="radio"
            value={URLS.USERS}
            checked={url === URLS.USERS}
            onChange={handleUrlChange}
          />
          Users
        </label>
        <label>
          <input
            type="radio"
            value={URLS.POSTS}
            checked={url === URLS.POSTS}
            onChange={handleUrlChange}
          />
          Posts
        </label>
        <label>
          <input
            type="radio"
            value={URLS.COMMENTS}
            checked={url === URLS.COMMENTS}
            onChange={handleUrlChange}
          />
          Comments
        </label>
      </div>
      <ErrorBoundry fallback={<div>{"Error..."}</div>}>
        <Suspense fallback={<div>{"Loading..."}</div>}>
          <Data url={url} />
        </Suspense>
      </ErrorBoundry>
    </div>
  )
}

export default App
