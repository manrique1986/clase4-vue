Vue.component("mi-tabla", {
    props: {
        titulos: {
            type: Array,
            required: true
        },

        registros: {
            type: Array,
            required: true
        },
    },
    template: `
     <div>

               
     <h1 class="text-center">Cerveza artesanal</h1>
          <table class=" table table-success">
            <thead class= "thead-light">
               <tr>

                  <th v-for= "(item, i) in titulos" :key="i"> {{ item }}    </th>
                  
               </tr>
            </thead>
            <tbody>
            <tr v-for="(registro, i) in registros" :key="i">
                <th>{{ i + 1 }}</th>
                <th v-for="(row, r) in registro" :key="r">{{row}}</th>
            </tr>
        </tbody>
          </table>

     </div>
     
     `

});


var app = new Vue({
    el: "#app",
    data: {

        tabla1: {
            titulos: ["ID", "Nombre", "Sabor", "Precio"],

            registros: [
                ["Honey", "Dulce", "$ 350"],
                ["Blonde", "Amarga", "$ 400"],
                ["Ipa", "Amarga", "$ 400"],
                ["Scottish", "Dulce", "$ 350"],
            ],


           
        },

        tabla2: {
            titulos: ["ID", "Nombre", "Sabor", "Precio"],

            registros: [
                ["Imperial", "Amarga", "$ 350"],
                ["Stout", "Amarga", "$ 400"],
                ["Porter", "Amarga", "$ 400"],
                ["Scotch ale", "Amarga", "$ 500"],
            ],

            class: " table table-danger bg-danger font-italic", 
           
        },

        tabla3: {
            titulos: ["ID", "Nombre", "Profesion", "Edad"],

            registros: [
                ["Leandro", "Abogado", " 55"],
                ["Ariel", "Medico", "40"],
                ["Santiago", "Futbolista", "20"],
                ["Ezequiel", "Secretario", "36"],
            ],

            class: "table table-primary bg-warning font-weight-light",

           
        },

        
        
    },

    

    template: `
    <div>
        <mi-tabla :titulos="tabla1.titulos" :registros="tabla1.registros" ></mi-tabla>
        <br>
        <mi-tabla :titulos="tabla2.titulos" :registros="tabla2.registros"  :class="tabla2.class"></mi-tabla>
        <br>
        <mi-tabla :titulos="tabla3.titulos" :registros="tabla3.registros" :class="tabla3.class" ></mi-tabla>
       
    </div>
`
});