import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBrand, getBrand } from "../../../Store/ActionCreators/BrandActionCreators"

import { DataGrid } from '@mui/x-data-grid';
export default function Brand() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'edit',
      headerName: 'Edit',
      sortable: false,
      width: 150,
      renderCell: ({ row }) => <Link to={`/admin/brand/update/${row.id}`} className='btn'><i className='fa fa-edit'></i></Link>
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
  let BrandStateData = useSelector((state) => state.BrandStateData)

   function deleteItem(id) {
    if (window.confirm("Are You Sure to Delete this Item :  ")) {
      dispatch(deleteBrand({ id: id }))
      getAPIData()
    }
  }
   function getAPIData() {
    dispatch(getBrand())
    if (BrandStateData.length) {
      setData(BrandStateData)
    }
  }
  useEffect(() => {
    getAPIData()
  }, [BrandStateData.length])
  return (
    <section id="company-services" className="padding-large">
      <div className='container-fluid my-2'>
        <div className="row">
          <div className="col-md-3"><Sidebar /></div>
          <div className="col-md-9">
            <h5 className='bg-primary p-2 text-center'>Brand <Link to="/admin/brand/create" className='btn btn-secondary'><i className='fa fa-plus text-light'></i></Link></h5>
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
// import { deleteBrand, getBrand } from '../../../Store/ActionCreators/BrandActionCreators'
// import { DataGrid } from '@mui/x-data-grid';


// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function Brand() {
//   let [data, setData] = useState([])

//   let dispatch = useDispatch()
//   let BrandStateData = useSelector((state) => state.BrandStateData)

//   async function deleteItem(id) {
//     if (window.confirm("Are you sure you want to delete this item")) {
//       dispatch(deleteBrand({ id: id }))
//       getAPIData()
//     }
//   }
//   async function getAPIData() {
//     dispatch(getBrand())
//     if (BrandStateData.length) {
//       setData(BrandStateData)
//     }
//   }
//   useEffect(() => {
//     getAPIData()
//   }, [BrandStateData.length])
//   return (
//     <section id="company-services" className="padding-large">
//       <div className="container-fluid my-2">
//         <div className="row">
//           <div className="col-md-3"><Sidebar /></div>
//           <div className="col-md-9">
//             <h5 className='bg-primary p-2 text-center'>Brand  <Link to="/admin/brand/create" className='btn btn-secondary'><i className='fa fa-plus text-light'></i></Link></h5>
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
//                       <td><Link className='btn btn-primary' to={`/admin/brand/update/${item.id}`}><i className='fa fa-edit'></i></Link></td>
//                       <td><button className='btn btn-danger' onClick={() => deleteItem(item.id)}><i className='fa fa-trash'></i></button></td>
//                     </tr>
//                   })
//                 }
//               </tbody>
//             </table>

//             <div style={{ height: 400, width: '100%' }}>
//               <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 initialState={{
//                   pagination: {
//                     paginationModel: { page: 0, pageSize: 5 },
//                   },
//                 }}
//                 pageSizeOptions={[5, 10]}
//                 checkboxSelection
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
