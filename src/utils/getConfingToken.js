const getConfingToken = () => {
  return {
    headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  }
}

export default getConfingToken