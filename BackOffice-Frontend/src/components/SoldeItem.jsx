import { useNavigate } from "react-router-dom";

const SoldeItem=({solde})=>{
    const navigate=useNavigate();
    function update(){
        const url='https://webservice-backoffice-production.up.railway.app/soldeUtilisateur/'+solde.id;
        fetch(url, {       
            method:'PUT',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'}
        }).then(()=>navigate("/solde"));
    }

    function annuler(){
        const url='https://webservice-backoffice-production.up.railway.app/soldeUtilisateur/'+solde.id;
        fetch(url, {       
            method:'DELETE',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'}
        }).then(()=>navigate("/solde"));
    }

    return (
            <div className="card card-apply-job">
                <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-1">
              <div className="d-flex flex-row">
                    <div className="user-info">
                        <p className="mb-0 text-dark">Nom et Prénom(s): <span className="badge rounded-pill badge-light-dark">{solde.nom} {solde.prenom}</span></p>
                        <small className="text-dark">Date : <span className="badge rounded-pill badge-light-dark">{solde.daterecharge}</span></small>
                        <p><small className="text-dark">Tel : <span className="badge rounded-pill badge-light-dark">{solde.tel}</span></small></p>

                    </div>
               </div>
        </div>
        <div className="apply-job-package bg-light rounded">
            <div>
                <h4 className="d-inline me-10 text-dark">Montant : </h4>
                <h4 className="d-inline me-10 text-dark">{solde.solde}</h4>
                <sup className="text-body text-primary"><small>Ar</small></sup>

             </div>
            
            
         </div>
         <div className="d-grid">
            <button type="button" onClick={update} className="btn btn-outline-success waves-effect waves-float waves-light">
            Confirmer
            </button>
         </div>
         <br></br>
         <div className="d-grid">
            <button type="button" onClick={annuler} className="btn btn-outline-danger waves-effect waves-float waves-light">
            Annuler
            </button>
         </div>

       </div>
        </div>
    )
}

export default SoldeItem;