const getinfo = {
bname: "lithium",
week: "W3D5",
topic: "today topic was to create module " };
  
function getbatchinfo()
{
    console.log( "Batch name:", getinfo.bname);
    console.log("Curent day:", getinfo.week);
    console.log("So",getinfo.topic);

    const today = new Date();
    const day = today.getDate();
    const month =today.getMonth();
    const year = today.getFullYear();

 console.log(day);
 console.log(month);
 console.log(year);
}
module.exports.getbatchinfo = getbatchinfo;

