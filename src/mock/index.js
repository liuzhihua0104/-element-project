import Mock from "mockjs"
import loginData from "./loginData"

// mock登陆
Mock.mock("http://localhost:8080/api/user/login","post",loginData.login)


export default Mock