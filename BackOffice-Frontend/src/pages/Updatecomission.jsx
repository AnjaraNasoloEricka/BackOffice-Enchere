import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { redirect, useLocation } from "react-router-dom";
import AlertSucess from "../components/AlertSuccess";
import BtnUpdateCategorie from "../components/BtnUpdateCategorie";
import InputForm from "../components/InputForm";
import InputNumberForm from "../components/InputNumberForm";
import ListeDeroulante from "../components/ListeDeroulante";
const Updatecomission=()=>{
    const navigate=useNavigate();
    const [succes,setsuccess]=useState();
    const[duree,setduree]=useState(null);
    const idcategorie=useRef(null);
    const pourcentage=useRef(null);
    const categorie = useRef(null);  

    const idcategorieval = null;
    const pourcentageval = null;

    function updateData(){
        const url='https://webservice-backoffice-production.up.railway.app/Comission/'+ categorie.current.value;
        fetch(url, {       
            method:'PUT',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
            body: JSON.stringify({pourcentage:pourcentage.current.value})
        }).then(()=>setsuccess(<AlertSucess message={"Comission bien modifié"}/>));
    }

    function update(){

        if((categorie.current.value!=null)&&(pourcentage.current.value!=null)){
            updateData();
        }
    }

    function checkLocalStorage(){
        let local=localStorage.getItem('user');
        if(local==null){
            navigate("/login");
        }
    }

    useEffect(()=>{
        checkLocalStorage();
    },[])


    return (
        
        <div class="col-12">
            <div className="card">
                <div className="card-header">
                    <h5 class="text-primary">Modifier pourcentage comission</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <ListeDeroulante refer = {categorie} />
                    <InputNumberForm nom={"Pourcentage comission :"} refer={pourcentage}/>
                    <BtnUpdateCategorie click={update}/>
                    </div>
                    {succes}
                </div>
            </div>
        </div>
         
    )

}
export default Updatecomission