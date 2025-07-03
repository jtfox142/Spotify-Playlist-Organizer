const Fallback = ({error}) => {
  return (
    <div>
      <h1>Error:</h1>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  )
}

export default Fallback
