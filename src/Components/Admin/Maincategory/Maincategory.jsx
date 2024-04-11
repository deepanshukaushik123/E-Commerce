import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { DataGrid } from '@mui/x-data-grid';

import { deleteMaincategory, getMaincategory } from "../../../Store/ActionCreators/MaincategoryActionCreators"
export default function Maincategory() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'edit',
      headerName: 'Edit',
      sortable: false,
      width: 150,
      renderCell: ({ row }) => <Link to={`/admin/maincategory/update/${row.id}`} className='btn'><i className='fa fa-edit'></i></Link>
    },
    {
      field: 'delete',
      headerName: 'Delete',
      sortable: false,
      width: 150,
      renderCell: ({ row }) => <button className='btn' onClick={() => deleteItem(row.id)}><i className='fa fa-trash'></i></button>
    },
  ]
  let [data, setData] = useState([])
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)

   function deleteItem(id) {
    if (window.confirm("Are You Sure to Delete this Item :  ")) {
      dispatch(deleteMaincategory({ id: id }))
      getAPIData()
    }
  }
   function getAPIData() {
    dispatch(getMaincategory())
    if (MaincategoryStateData.length) {
      setData(MaincategoryStateData)
    }
  }
  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length])
  return (
    <section id="company-services" className="padding-large">
      <div className='container-fluid my-2'>
        <div className="row">
          <div className="col-md-3"><Sidebar /></div>
          <div className="col-md-9">
            <h5 className='bg-primary p-2 text-center'>Maincategory <Link to="/admin/maincategory/create" className='btn btn-secondary'><i className='fa fa-plus text-light'></i></Link></h5>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





// import React, { useEffect, useState } from 'react'
// import Sidebar from '../Sidebar'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import {deleteMaincategory, getMaincategory} from '../../../Store/ActionCreators/MaincategoryActionCreators'

// export default function Maincategory() {
//   let [data, setData] = useState([])

//   let dispatch = useDispatch()
//   let MaincategoryStateData = useSelector((state)=>state.MaincategoryStateData)

//   async function deleteItem(id) {
//     if (window.confirm("Are you sure you want to delete this item")) {
//       // let response = await fetch("http://localhost:8000/maincategory/"+id, {
//       //   method: "delete",
//       //   headers: {
//       //     "content-type": "application/json"
//       //   }
//       // })
//       // response = await response.json()
//       dispatch(deleteMaincategory({id:id}))
//       getAPIData()
//     }
//   }
//   async function getAPIData() {
//     // let response = await fetch("http://localhost:8000/maincategory", {
//     //   method: "get",
//     //   headers: {
//     //     "content-type": "application/json"
//     //   }
//     // })
//     // response = await response.json()
//     dispatch(getMaincategory())
//     if (MaincategoryStateData.length) {
//       setData(MaincategoryStateData)
//     }
//   }
//   useEffect(() => {
//     getAPIData()
//   }, [MaincategoryStateData.length])
//   return (
//     <section id="company-services" className="padding-large">
//       <div className="container-fluid my-2">
//         <div className="row">
//           <div className="col-md-3"><Sidebar /></div>
//           <div className="col-md-9">
//             <h5 className='bg-primary p-2 text-center'>Maincategory  <Link to="/admin/maincategory/create" className='btn btn-secondary'><i className='fa fa-plus text-light'></i></Link></h5>
//             <table className='table table-bordered table-striped table-hover text-center'>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th></th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//                   data.map((item, index) => {
//                     return <tr key={index}>
//                       <td>{item.id}</td>
//                       <td>{item.name}</td>
//                       <td><Link className='btn btn-primary' to={`/admin/maincategory/update/${item.id}`}><i className='fa fa-edit'></i></Link></td>
//                       <td><button className='btn btn-danger' onClick={()=>deleteItem(item.id)}><i className='fa fa-trash'></i></button></td>
//                     </tr>
//                   })
//                 }
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
