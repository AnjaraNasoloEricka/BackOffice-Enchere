import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SoldeList from "../components/SoldeList"
const ListSolde=()=>{
    const navigate=useNavigate();
    const [allsolde,setallsolde]=useState([]);

    function checkLocalStorage(){
        let local=localStorage.getItem('user');
        if(local==null){
            navigate("/login");
        }
        else{
            initiateData();
        }
    }

    function initiateData(){
        const url='https://webservice-backoffice-production.up.railway.app/soldeUtilisateur';
        fetch(url, {       
            method:'GET',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then(response => response.json())
        .then(data => setallsolde(data.data));
    }
    useEffect(()=>{
        checkLocalStorage();
    },[allsolde])

    return (
        <div className="card">
            <div className="card-header">
             <h5 className="text-primary">Solde à Confirmer</h5>
            </div>
            <div className="card-body">
                <hr></hr>
            <SoldeList allsolde={allsolde}/>
            </div>
        </div>
    )
}

export default ListSolde;