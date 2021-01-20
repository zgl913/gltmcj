import axios from 'axios'
export const getdata = (name,age) => {return axios.post('/GetDealerData',{name:name, age:age,}).then(res=>JSON.parse(res.data))}