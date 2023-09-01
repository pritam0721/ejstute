

exports.getDate = () => {
let today = new Date();
let currentday = today.getDay();
options = { weekday: 'long',  month: 'long', day: 'numeric' };

return ""+ today.toLocaleDateString("en-US",options) ;
};

exports.getDay = () =>{
    let today = new Date();
   let currentday = today.getDay();
  options = { weekday: 'long' };

   return ""+ today.toLocaleDateString("en-US",options) ;
}