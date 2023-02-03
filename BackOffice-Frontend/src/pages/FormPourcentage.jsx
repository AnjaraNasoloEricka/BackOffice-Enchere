import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { redirect, useLocation } from "react-router-dom";
import AlertSucess from "../components/AlertSuccess";
import BtnUpdateCategorie from "../components/BtnUpdateCategorie";
import InputForm from "../components/InputForm";
import InputNumberForm from "../components/InputNumberForm";

const FormPourcentage=()=>{
    const navigate=useNavigate();
    const [succes,setsuccess]=useState();
    const[pourcentage,setpourcentage]=useState(null);
    const pref=useRef(null);

    function update(){
        if(pref.current.value!=null){
            pourcentage.pourcentage=pref.current.value;
            updateData(pourcentage);
        }

    }

    function updateData(pourcentage){
        const url='https://webservice-backoffice-production.up.railway.app/pourcentage';
        fetch(url, {       
            method:'PUT',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
            body: JSON.stringify(pourcentage)
        }).then(()=>setsuccess(<AlertSucess message={"Pourcentage bien modifiée"}/>));
    }

    function initiateData(){
        const url='https://webservice-backoffice-production.up.railway.app/pourcentage';
        fetch(url, {       
            method:'GET',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then(response => response.json())
        .then(data => setpourcentage(data.data)).then(()=>pref.current.value=pourcentage.pourcentage);
    }

    function checkLocalStorage(){
        let local=localStorage.getItem('user');
        if(local==null){
            navigate("/login");
        }
        else{
            initiateData();
        }
      }

    useEffect(()=>{
        checkLocalStorage();
       
    },[pref.current,succes])

    return (
        <div class="col-12">
        <div className="card">
            <div className="card-header">
                <h5 class="text-primary">Modifier Pourcentage(/heure)</h5>
            </div>
            <div className="card-body">
                <hr></hr>
                <div className="table-responsive">
                <InputNumberForm nom={"Pourcentage(/heure)"} refer={pref}/>
                <BtnUpdateCategorie click={update}/>
                </div>
                {succes}
            </div>
        </div>
    
    </div>
    )


}

export default FormPourcentage;