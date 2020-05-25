import axios from 'axios';

const APIKey =
  '8fNLXMHuEHuFdFGO3uqWeBVykskyI2eXeuj_mp4DAYXIMy1ViCxSJXs9gDiRoPFxdw0c0eT88NczXioJdgIEuWDh-qGWUySz-rrIBH5dzftEjNLi1P1AdBFd1bXKXnYx';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${APIKey}`,
  },
});
