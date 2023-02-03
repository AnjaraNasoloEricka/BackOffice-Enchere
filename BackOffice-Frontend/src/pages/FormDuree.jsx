import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { redirect, useLocation } from "react-router-dom";
import AlertSucess from "../components/AlertSuccess";
import BtnUpdateCategorie from "../components/BtnUpdateCategorie";
import InputForm from "../components/InputForm";
import InputNumberForm from "../components/InputNumberForm";

const FormDuree=()=>{
    const navigate=useNavigate();
    const [succes,setsuccess]=useState();
    const[duree,setduree]=useState(null);
    const dureemin=useRef(null);
    const dureemax=useRef(null);

    

    async function getDuree(){
        const url='https://webservice-backoffice-production.up.railway.app/duree';
        fetch(url, {       
            method:'GET',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then(response => response.json())
        .then(data => setduree(data))
    }

    function updateData(duree){
        const url='https://webservice-backoffice-production.up.railway.app/duree';
        fetch(url, {       
            method:'PUT',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
            body: JSON.stringify(duree)
        }).then(()=>setsuccess(<AlertSucess message={"Durée bien modifiée"}/>));
    }

    function update(){
        if((dureemin.current.value!=null)&&(dureemax.current.value!=null)){
            duree.dureemin=dureemin.current.value;
            duree.dureemax=dureemax.current.value;
            updateData(duree);
        }
    }

    
    function checkLocalStorage(){
        let local=localStorage.getItem('user');
        if(local==null){
            navigate("/login");
        }
        else{
            getDuree().then(()=>
            dureemin.current.value=duree.dureemin        
            ).then(()=> dureemax.current.value=duree.dureemax);
        }
      }

    useEffect(()=>{
        checkLocalStorage();
       
    },[dureemin.current,dureemax.current,succes])

    return (
        <div class="col-12">
        <div className="card">
            <div className="card-header">
                <h5 class="text-primary">Modifier Duree(en heure)</h5>
            </div>
            <div className="card-body">
                <hr></hr>
                <div className="table-responsive">
                <InputNumberForm nom={"Duree min :"} refer={dureemin}/>
                <InputNumberForm nom={"Duree max :"} refer={dureemax}/>
                <BtnUpdateCategorie click={update}/>
                </div>
                {succes}
            </div>
        </div>
    
    </div>
    )


}

export default FormDuree;