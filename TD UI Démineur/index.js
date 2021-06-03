// On require la classe Demineur
import Demineur, {Mine, Num} from './Demineur.js';

const demineur = new Demineur();
const app = new Vue({
  el: '#demineur',
  data: {
    demineur: demineur,
    grille : demineur.grid
   
  },


  methods: {

    clique : function(x, y){
      
      demineur.click(x, y)
      
    },

    flaguer : function(x,y) {
      demineur.flag(x,y)
    },

    isOver : function(){
      var list = document.getElementsByClassName("button");
      for(var i = 0; i < list.length; i++){
      
        if(demineur.isGameOver){
          list[i].disabled=true;
          
        } else {
          list[i].disabled=false;        
        }
      }
    }
  }
});


