import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { redirect, useLocation } from "react-router-dom";
import BtnUpdateCategorie from "../components/BtnUpdateCategorie";
import InputForm from "../components/InputForm";

const FormUpdateCategorie=()=>{
    const[categorie,setcategorie]=useState(null);
    const location=useLocation();
    const navigate = useNavigate();
    const type=useRef(null);

    function updateData(categorie){
        const url='https://webservice-backoffice-production.up.railway.app/categorie/'+categorie.id;
        fetch(url, {       
            method:'PUT',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
            body: JSON.stringify(categorie)
        }).then(()=>navigate("/"));
    }

    async function onload(cat){
        setcategorie(cat)
    }

    useEffect(()=>{
        onload(location.state.categorie).then(()=>type.current.value=categorie.typeCategorie)
    })

    function update(){
        if(type.current.value!=null){
            categorie.typeCategorie=type.current.value;
            updateData(categorie);
        }
    }
    
    return (
        <div class="col-12">
        <div className="card">
            <div className="card-header">
                <h5 class="text-primary">Modifier Categorie</h5>
            </div>
            <div className="card-body">
                <hr></hr>
                <div className="table-responsive">
                <InputForm nom={"Type Categorie :"} refer={type}/>
                <BtnUpdateCategorie click={update}/>
                </div>
            </div>
        </div>
    
    </div>
    )


}

export default FormUpdateCategorie;