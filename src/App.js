import React, {Component} from 'react';
import UserComponent from "./components/user/UserComponent";
import AllUsersComponents from "./components/AllUsersComponents/AllUsersComponents";
import AllCommentsComponents from "./components/AllComentsComponent/AllCommentsComponents";
import AllPosts from "./components/AllPostsComponent/AllPosts";
import AppPhotosComponent from "./components/AllPhotos/AppPhotosComponent";


class App extends Component {

    render() {
        return (
            <div>
                {
                    <AppPhotosComponent/>
                }
            </div>
        )
    }
}

export default App;