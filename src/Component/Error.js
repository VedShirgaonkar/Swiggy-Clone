import { useRouteError } from "react-router-dom";
const Error = () => {
  const errorRoute = new useRouteError();
  console.log(errorRoute);
  return (
    <div>
      <h1>Oops Something went wrong</h1>
      <h1>{errorRoute.status}:{errorRoute.statusText}</h1>

    </div>
  )
}

export default Error
