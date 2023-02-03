import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoriePComission() {
    const navigate=useNavigate();
    const [data, setData] = useState([]);

    function initiateData(){
        fetch('https://webservice-backoffice-production.up.railway.app/CategoriePC')
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.error(error));

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

    useEffect(() => {
        checkLocalStorage();

    }, []);


    return (
        <div>
        {
            data.map(item => (
                   <div className="card">
            <div className="card-header">
             <h5 className="text-primary">Categorie: {item.typecategorie}</h5>
            </div>
            <div className="card-body">
                <p>Pourcentage de commission : {item.pourcentage}</p>
           <p></p>
            </div>
        </div>
            )
            ) 
          
        }
        </div>
    )
}

export default CategoriePComission;
