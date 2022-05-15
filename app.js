Vue.component("mi-tabla", {
    props: {
        titulos: {
            type: Array,
            required: true
        },


        products: {
            type: Array,
        },

        index: {
            type: Number
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
            <tr  v-for="(product, i) in products" :key="product.id">
              <td>{{ product.id}}</td>
              <td>{{ product.nombre }}</td>
              <td>{{ product.sabor }}</td>
              <td> $ {{ product.precio }}</td>
            <tr/>
          </tbody>
          </table>

     </div>
     
     `

});


var app = new Vue({
    el: "#app",
    data: {

        titulos: ["ID", "Nombre", "Sabor", "Precio"],

        tables: [

            {
                
                products: [

                    

                    {
                        id: 1,
                        nombre: "Honey",
                        sabor: "Dulce",
                        precio: 350,

                    },

                    {
                        id: 2,
                        nombre: "Blonde",
                        sabor: "Amarga",
                        precio: 400
                    },

                    {
                        id: 3,
                        nombre: "Ipa",
                        sabor: "Amarga",
                        precio: 400,

                    },

                    {
                        id: 4,
                        nombre: "Scottish",
                        sabor: "Dulce",
                        precio: 350
                    },
                ],

                class: "table table-primary bg-warning font-weight-light",


            },


            {
                products: [

                    {


                        id: 5,
                        nombre: "Imperial",
                        sabor: "Amarga",
                        precio: 350,

                    },

                    {
                        id: 6,
                        nombre: "Stout",
                        sabor: "Amarga",
                        precio: 450
                    },

                    {
                        id: 7,
                        nombre: "Porter",
                        sabor: "Amarga",
                        precio: 300,

                    },

                    {
                        id: 8,
                        nombre: "Scotch ale",
                        sabor: "Dulce",
                        precio: 500
                    },

                ]

            },


            {
                products: [



                    {
                        id: 9,
                        nombre: "Bock",
                        sabor: "Amarga",
                        precio: 350,

                    },

                    {
                        id: 10,
                        nombre: "Rauchbier",
                        sabor: "Amarga",
                        precio: 450
                    },

                    {
                        id: 11,
                        nombre: "Wesissbier",
                        sabor: "Amarga",
                        precio: 450,

                    },

                    {
                        id: 12,
                        nombre: "Honeybeer",
                        sabor: "Dulce",
                        precio: 500
                    }
                ]
            }
        ]
    },

});