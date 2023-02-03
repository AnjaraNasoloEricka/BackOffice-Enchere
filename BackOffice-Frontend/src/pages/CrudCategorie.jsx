import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllCategoryCard from "../components/AllCategoryCard";
import Header from "../components/Header";

  
function CrudCategorie() {

    const navigate=useNavigate();
    const [allcategorie,setallcategorie]=useState([]);

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
        const url='https://webservice-backoffice-production.up.railway.app/categorie';
        fetch(url, {       
            method:'GET',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then(response => response.json())
        .then(data => setallcategorie(data.data));
    
    }
    
    useEffect(()=>{
        checkLocalStorage();
    },[allcategorie])
    return (
        <div>
        <AllCategoryCard categorie={allcategorie} />
        </div>
      
    );
}
  
export default CrudCategorie;