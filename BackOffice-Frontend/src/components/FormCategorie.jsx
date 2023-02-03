import {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import BtnInsertCategorie from "./BtnInsertCategorie";
import BtnUpdateCategorie from "./BtnUpdateCategorie";
import InputForm from "./InputForm";

const FormCategorie=()=>{
    const [categorie,setcategorie]=useState({});
    const type=useRef(null);
    const navigate=useNavigate();
    
    function insertData(categorie){
        const url='https://webservice-backoffice-production.up.railway.app/categorie';
        fetch(url, {       
            method:'POST',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
            body: JSON.stringify(categorie)
        }).then(()=>navigate("/"));
    }

    async function onload(cat){
        setcategorie(cat)
    }

    function insert(){
        if(type.current.value!=null){
            categorie.typeCategorie=type.current.value;
            insertData(categorie);
        }
    }

    return (
     <div class="row">
        <div class="col-12">
            <br/>
            <InputForm nom={"Type Categorie :"} refer={type}/>
            <BtnInsertCategorie click={insert}/>
        </div>
    
    </div>
    )
}

export default FormCategorie;