import { UserSchema } from "../database/prismaClient";
import { initContract } from "@ts-rest/core";
import {z} from 'zod'


const contract = initContract();
const UserContract =contract.router({

})

export default UserContract;