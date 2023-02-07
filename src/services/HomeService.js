import axios from 'axios';

const getData=() => axios.get('https://songsbysaif-production.up.railway.app/songs');

export default getData;