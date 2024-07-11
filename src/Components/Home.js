import React from "react";
import {GithubOutlined,LoadingOutlined} from "@ant-design/icons"
import { Image } from "antd";


const Home = ()=>{
    return (
        <div>
            <h1>Home page</h1>
            <div >
            <Image
    width={700}
    src="https://picsum.photos/300/200"
  />
            </div>
            <LoadingOutlined />
        </div>
    );
}


export default Home; 