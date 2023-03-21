import { use } from "react"
interface IProps {
  url: string
}
export const Data: React.FC<IProps> = ({ url }) => {
  const data = use(fetch(url).then((res) => res.json()))

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
