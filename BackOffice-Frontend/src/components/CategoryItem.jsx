import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";


<span class="badge rounded-pill badge-light-warning me-1">Scheduled</span>
const CategoryItem=(props)=>{
    const categorie=props.props;
    const navigate=useNavigate();

    function supprimer(){
        const url='https://webservice-backoffice-production.up.railway.app/categorie/'+categorie.id;
        fetch(url, {       
            method:'DELETE',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then(()=>navigate("/"));
    }

    return (
        <tr>
            <td>{props.props.id}</td>
            <td>{props.props.typeCategorie}</td>
            <td><Link to="/modif" state={{categorie:categorie}} class="btn badge rounded-pill badge-light-warning me-1">Modifier</Link></td>
            <td><button onClick={supprimer} class="btn badge rounded-pill badge-light-danger me-1">Supprimer</button></td>
        </tr>
    )
}

export default CategoryItem;