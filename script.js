:root{



   
}


body {
   margin: 0px 0px 0px 0px;
   box-sizing: border-box;
   padding: 0%;

   background-color: rgb(20, 12, 0);
   
   
   margin: 100px 0px 0px 0px;

   background-color: rgb(14, 8, 0);
   margin: 100px 0px 0px 0px;

   /*corriger le margin top pour qu'il se cale automatiquement au centre de 'window' */

}



.ensemble {
   display: grid;
   grid-template-rows: 3fr 2fr 3fr;
}



.box {

   display: grid;
   grid-template-rows: 5fr 1fr;



   background-color: rgb(150, 134, 113);

   width: 80%;
   height: 100px;
   margin: auto;

   text-align: center;
   color: antiquewhite;

   border-radius: 20px;

}



.act1 {

   width: 80px;
   background-color: rgb(68, 68, 68);
   border-radius: 10px;

}

.act1:hover {

   width: 80px;
   background-color: rgb(26, 26, 26);
   border-radius: 10px;

}



.act2 {

   width: 80px;
   background-color: rgb(103, 62, 0);
   border-radius: 10px;

}

.act2:hover {

   width: 80px;
   background-color: rgb(41, 25, 0);
   border-radius: 10px;

}


.act3 {
   color: rgb(255, 255, 255);
   width: 80px;
   background-color: rgba(255, 153, 0, 0.694);
   border-radius: 10px;

}

.act3:hover {
   color: rgb(255, 255, 255);
   width: 80px;
   background-color: rgba(177, 77, 0, 0.905);
   border-radius: 10px;

}

.lesbtn {

   display: grid;

   grid-template-columns: 1fr 1fr 1fr;
   column-gap: 50px;

   width: 90%;



}



.time {

   font-size: xx-large;
   background-color: rgb(68, 68, 68);
   border-radius: 20px;
   height: 70%;
   box-shadow: 0px 5px 5px rgb(20, 12, 0);
}



.centre {


margin: auto;

}
