import React, {Component} from 'react';

import AllUsersComponents from "./components/AllUsersComponents/AllUsersComponents";
import AllCommentsComponents from "./components/AllComentsComponent/AllCommentsComponents";
import AllPosts from "./components/AllPostsComponent/AllPosts";
import AppPhotosComponent from "./components/AllPhotos/AppPhotosComponent";
import PostComponent from "./components/AllPostsComponent/PostComponent";


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