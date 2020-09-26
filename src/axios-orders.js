import axios from 'axios';

const instance =axios.create({
    baseURL: 'https://react-myburger-9d898.firebaseio.com/'
});

export default instance;