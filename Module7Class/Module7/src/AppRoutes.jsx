import {Routes, Route} from 'react-router-dom'
import { Contact } from './Contact';
import { About } from './About';
import { Home } from './Home';
import { UserInfo } from './UserInfo';
import { NewUser } from './NewUser';
import { NavigationLayout } from './NavigationLayout';
import NavBar from './NavBar';
import {PostList} from './PostsPage';
import { Post } from './Post';
import PostsPage from './PostsPage';
import { User } from './User';
import { ProtectedRoute } from './ProtectedRoute';

export function AppRoutes(props)
{
    return(
        <Routes>

            <Route path='/Contact' element={<Contact></Contact>}>
            </Route>
            <Route path='/About' element={<About></About>}>
            </Route>
            <Route path='/Users' element={<ProtectedRoute><NavigationLayout></NavigationLayout></ProtectedRoute>}>
                <Route path='UserInfo' element={<UserInfo></UserInfo>}></Route>
                <Route path='NewUser' element={<NewUser></NewUser>}></Route>
                <Route path=':id' element={<User></User>}></Route>
            </Route>
            <Route path='/posts' element={<PostsPage {...props} />} >
                
            <Route index element={<PostList />} />
            {/* dynamic param taken from route, stored in variable called id */}
            <Route path=":id" element={<Post />} />
            </Route>
            {/*<Route path='/' element={<Home></Home>}>
            </Route>*/}
            <Route path='*' element={<Home></Home>}>

            </Route>
        </Routes>
    );
}