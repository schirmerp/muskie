import { defineStore } from 'pinia';

export const usePlayerStore = defineStore({
  id: 'player',
  state: () => ({
    players: [
      {
        id: 1,
        name: 'Colby Jones',
        img: 'https://on3static.com/cdn-cgi/image/height=200,width=200,quality=90,fit=cover/uploads/assets/967/57/57967.jpg',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4433378/colby-jones',
        likes: 0,
      },
      {
        id: 2,
        name: 'Souley Boum',
        img: 'https://sportshub.cbsistatic.com/i/r/2023/02/01/38f3f5ee-90d8-4d2a-a991-36111ee54b93/thumbnail/1200x675/7a5441bc915b145f336020eed2c30169/xavier.jpg',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4280244/souley-boum',
        likes: 0,
      },
      {
        id: 3,
        name: 'Jack Nunge',
        img: 'https://www.gannett-cdn.com/presto/2021/11/19/PCIN/9f84670d-acca-4a9a-a7f7-43bec0042226-111821XavierOhioState_33.jpg',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4277948/jack-nunge',
        likes: 0,
      },
      {
        id: 4,
        name: 'Zach Fremantle',
        img: 'https://www.gannett-cdn.com/presto/2019/12/07/PCIN/384b1f45-2a8a-4182-9dd4-c183677483d1-120719UCvsXavier08.JPG',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4432869/zach-freemantle',
        likes: 0,
      },
      {
        id: 5,
        name: 'Jerome Hunter',
        img: 'https://www.nbadraft.net/wp-content/uploads/2016/08/Jerome-Hunter-1.jpg',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4397011/jerome-hunter',
        likes: 0,
      },
      {
        id: 6,
        name: 'Desmondn Claude',
        img: 'https://pbs.twimg.com/profile_images/1574388513360867328/PrFtiYIR_400x400.jpg',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/5105606/desmond-claude',
        likes: 0,
      },
      {
        id: 7,
        name: 'Adam Kunkel',
        img: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4398300.png',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4398300/adam-kunkel',
        likes: 0,
      },
      {
        id: 8,
        name: 'Kam Craft',
        img: 'https://s3media.247sports.com/Uploads/Assets/556/455/10455556.jpeg',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/5105607/kam-craft',
        likes: 0,
      },
      {
        id: 9,
        name: 'Kyky Tandy',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsbn9csxz1DzqWHUR6MKlDjyL_Va4LKgCRA&usqp=CAU',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4592606/kyky-tandy',
        likes: 0,
      },
      {
        id: 10,
        name: 'Cesaer Edwards',
        img: 'https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/4708074.png',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4708074/cesare-edwards',

        likes: 0,
      },
      {
        id: 11,
        name: 'Dieonte Miles',
        img: 'https://pbs.twimg.com/media/FfMtjDVUcAIYpFp?format=jpg&name=4096x4096',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4431781/dieonte-miles',

        likes: 0,
      },
      {
        id: 12,
        name: 'Michael Wolf',
        img: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105608.png&w=350&h=254',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/5105608/michael-wolf',

        likes: 0,
      },
      {
        id: 13,
        name: 'Ian Sabourin',
        img: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105609.png&w=350&h=254',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/5105609/ian-sabourin',

        likes: 0,
      },
      {
        id: 14,
        name: 'Elijah Tucker',
        img: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4684309.png&w=350&h=254',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/4684309/elijah-tucker',

        likes: 0,
      },
      {
        id: 15,
        name: 'Bob Nunge',
        img: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105610.png&w=350&h=254',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/5105610/bob-nunge',

        likes: 0,
      },
      {
        id: 16,
        name: 'Bradley Colbert',
        img: 'https://media.opendorse.com/385557/20221020234148_d21d806e-db2d-4447-9990-524f878a8470.jpg',
        page: 'https://www.espn.com/mens-college-basketball/player/_/id/5105611/bradley-colbert',

        likes: 0,
      }
    ],
  }),
  getters: {
    getPlayerById: (state) => (id) => {
      return state.players.find((player) => player.id === id);
    },
  },
  actions: {
    incrementPlayerLikes(state, player) {
      player.likes++;
    },
  },
  persist: { storage: window.localStorage },
});