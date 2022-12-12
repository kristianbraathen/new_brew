import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    beerlist: [],
    malt:[],
    hops:[],
        selectedBeer:{
          name:'',
          image:'',
          ingredients:[
           { malt:[],
            hops:[]}
          ],
          method:[]
        },
        process:{
          idle: true,
          running: false,
          
        },
        text:"IDLE",
        buttonstate: true
        
 
      
    
    
    
  },
  getters: {
   
   
    
  },
 
  actions: {
    getlist({commit}){
      axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
      .then(response => {
        commit('getlist',response.data)
        console.log(response.data[1].ingredients.hops);
      })
    },
  
    getSelectedBeer({commit},beer){
      commit('getSelectedBeer',beer)
      console.log('action',beer)

    },
    getHops({commit},hops){
      commit('getHops',hops)
      console.log('hops',hops)
    },
    getMalt({commit},malt){
     commit('getMalt',malt)
    },
    changeState({commit}){
      commit('changeState')
    },
    changeText({commit}){
      commit('changeText')
    }, 
    enableBtn({commit}){
      commit('enableBtn')
    }
    
    
  

    
  },
  mutations: {
    getlist(state,beerlist){
       state.beerlist = beerlist;
    },
    getHops(state,hops){
      state.hops = hops;
     
      console.log(hops)
    },
    getMalt(state,malt){
      state.malt = malt;
    },

    changeState(state,buttonstate) {
       state.buttonstate = !state.buttonstate
        
          
  },
  getSelectedBeer(state,selectedBeer){
    state.selectedBeer= selectedBeer;
    console.log('mutation',selectedBeer)
  },
  changeText(state,text){
    state.text="DONE"
    
  },
  enableBtn(state,buttonstate){
    if(state.hops===state.selectedBeer.ingredients.hops[0]){
      
      state.buttonstate = false;
    }
    else{
      state.buttonstate= true;
    }
    console.log('btn',buttonstate)
  }
 
 


  },
  modules: {
  }
})
