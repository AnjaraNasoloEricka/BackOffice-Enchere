import SoldeItem from "./SoldeItem";

const SoldeList=({allsolde})=>{

    const soldecount=(allsolde)=>{
        if(allsolde.length==0){
            return <h6>Aucun solde à confirmer</h6>
        }
    }
    return (
        <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12 col-12">
        {allsolde.map((item)=>{
            return(
                <div className="col-lg-12 col-md-12 col-xs-12 col-12">
                <div className="table-responsive">
                <SoldeItem solde={item}/>
                </div>
                </div>
            );
        })}
        {soldecount(allsolde)}

        </div></div>
    )

}

export default SoldeList;