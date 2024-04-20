import {apiConfig} from './apiConfig'
import {SERVER_URL }from './apiUrl'


export const registerApi=async(reqBody)=>{
   return await apiConfig("POST",`${SERVER_URL}/register`,reqBody)


}
export const displayUsersApi=async()=>{
   return await apiConfig("GET",`${SERVER_URL}/details`)
}