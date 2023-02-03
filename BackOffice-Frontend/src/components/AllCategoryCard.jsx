import BtnInsertCategorie from "./BtnInsertCategorie";
import CategoryList from "./CategoryList";
import FormCategorie from "./FormCategorie";


const AllCategoryCard=(categorie)=>{

    function insertClick(){

    }
    return (
    <section>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                       <h5 className="text-primary">Insertion catégorie</h5>
                    </div>
                    <div className="card-body">
                    <hr></hr>
                    <div className="table-responsive">
                        <FormCategorie/>
                    </div>
                    </div>

                </div>
             </div>
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="text-primary">Liste catégories</h5>
                    </div>
                    <div className="table-responsive">
                        <CategoryList allcategorie={categorie}/>
                    </div>
                </div>
             </div>

        </div>
    </section>
                
    );
}

export default AllCategoryCard;