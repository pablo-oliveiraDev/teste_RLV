import { initContract } from '@ts-rest/core';
import UserContract from './User.contract';

const contract = initContract();
const apiContract =contract.router({users:UserContract});
export {apiContract,UserContract}