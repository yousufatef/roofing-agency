import PageHeader from "../components/PageHeader"
import ServiceRequest from "../components/ServiceRequest"

const Home = () => {
  return (
    <div>
      <PageHeader pageName={"Home"}/>
      <ServiceRequest/>
      <h5>Home</h5>
    </div>
  )
}

export default Home