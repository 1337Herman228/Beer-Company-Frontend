import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import React from "react";
import './RolesPage.css'
import Table from 'react-bootstrap/Table';
import { useHttp } from "../../hooks/http.hook";


const RolesPage = ()=>{

    const [res,setRes] = useState(null)

    const {requestJson , requestPromise} = useHttp()

    useEffect(()=>{

        async function fetchData(){
            const data = await requestJson('http://localhost:8080/admin/roles')
            setRes(data)
        }
        fetchData()

    },[])

    console.log(res)

    const onDeleteRole = async(roleID) => {
        const data = await requestJson(`http://localhost:8080/admin/del-role/${roleID}`,'POST')
        setRes(data)
    }

    return(
        <>
         {res == null ? <Spinner animation="border" /> :

         <Table className="roles-table" striped bordered hover>
         <thead>
           <tr>
             <th>id</th>
             <th>position</th>
             <th></th>
             <th></th>
           </tr>
         </thead>
         <tbody>
            {res.map((item)=>(
                <tr key={item.roleId}>
                    <td>{item.roleId}</td>
                    <td>{item.position}</td>
                    <td style={{width:50}}><button onClick={()=>onDeleteRole(item.roleId)}>Удалить</button></td>
                    <td style={{width:60}}><button>Редактировать</button></td>
                </tr>
            ))}
         </tbody>
       </Table>

       }
    </>
    )

}

export default RolesPage