
import './PagePne.css'
import PageTwo from './PageTwo'
function PagePne(props){

    function deletePageHandler(){
        props.onDeleteHandler(props.id)
    }

    function addHandler(){
        const obj = {
            name: 'Tashmat',
            age: 50,
            city: 'Naryn',
            id: Math.random()
        }
        props.onAddHandler(obj)
       
    }

    return (
        <div>
            
            <div className='wrap-Page-One'>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.city}</div>
            <div>
            <button onClick={deletePageHandler} >Delete</button>
            <button onClick={addHandler}>Add</button>
            </div>
            </div>
        </div>
    )
}
export default PagePne