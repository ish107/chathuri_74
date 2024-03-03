import {Link} from 'react-router-dom'

export const Navbar = ()=>{
    return <div className='flex-auto bg-slate-700 font-sans h-16 text-base'>
        <Link to="/" className='text-base'>Home</Link>
        <Link to="/createRecipe">Create Recipes</Link>
        <Link to="/Register">Login/SignUp</Link>
    </div>
}