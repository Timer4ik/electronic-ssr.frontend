import { FC } from "react"

type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

const Home: FC<Props> = ({
  children,
}) => {

  return (
    <div className="container">
      <div className="flex-center">
      </div>
    </div>
  )
}

export default Home