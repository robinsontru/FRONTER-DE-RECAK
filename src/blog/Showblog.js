import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const URI = 'http://localhost:8000/blogs/'

const CompShowblog = () => {

  const [blogs, setBlog] = useState([])
  useEffect(() => {
    getBlog()
  }, [])
  //procedimiento para mostrar tablas blogs
  const getBlog = async () => {
    const res = await axios.get(URI)
    setBlog(res.data)
  }
  //proceso para eliminar un blog
  const deleteBlog = async (id) => {
    axios.delete(`${URI}${id}`)
    getBlog()
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className='btn btn-primary nt-2 nb-2' ><i class="fa-solid fa-plus"></i></Link>
          <table className="table" >
            <thead className="table-primary" >
              <tr>
                <th>title</th>
                <th>content</th>
                <th>actions</th>

              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td> {blog.title} </td>
                  <td> {blog.content} </td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className='<i class="fa-solid fa-file-pen"></i>'><i className="fas fa-edit"></i></Link>
                    <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  )

}
export default CompShowblog