import { getServerSession } from "next-auth"

const page = () => {
getServerSession({credentials})
  return (
    <div>page</div>
  )
}

export default page