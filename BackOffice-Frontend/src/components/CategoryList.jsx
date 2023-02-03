import CategoryItem from "./CategoryItem"

const CategoryList=(allcategorie)=>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Categorie</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>

            </thead>
            <tbody>
            {allcategorie.allcategorie.categorie.map((item) => {
                return (
                    <CategoryItem props={item}/>
                )
            })}
            </tbody>
        </table>
    )
}

export default CategoryList;