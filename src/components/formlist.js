import { Link, useLocation } from "react-router-dom";

const BlogList = ({ blogs }) => {

    var indexid = 0;


    function del(id) {
        const ids = id;
        console.log(ids);
        const res = fetch('http://localhost:8000/formquestion/' + ids, {
            method: 'DELETE'
        });


    }
    return (
        <div className="blog-list">

            <div className="blog-preview" >


                <table className="table-formlist mt-5 mx-5" >
                    <thead><tr>
                        <th className="form-th">S/N</th>
                        <th className="form-th">Form Title</th>
                        <th className="form-th">Form Description</th>
                        <th className="form-th">Actions</th>
                    </tr>
                    </thead>
                    {blogs.map(formlist => {
                        indexid = indexid + 1
                        return <tbody key={formlist.id}><tr >
                            <td className="form-th"> {indexid}</td>
                            <td className="form-th">{formlist.title}</td>
                            <td className="form-th">{formlist.description}</td>
                            <td className="form-th"> 
                             <Link className='btn btn-success d-inline btn-sm' to={`/form-view/${formlist.id}`} >Display Form</Link> 
                             {/* <button className='btn btn-success d-inline btn-sm ' onClick={() => del(formlist.id)}> DELETE</button> */}
                             </td>
                        </tr>
                        </tbody>
                    })}
                </table>
            </div>



        </div>
    );
}

export default BlogList;