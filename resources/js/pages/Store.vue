<template>
    <div>
      
      <div class="card">
            {{ FormShow }}
            <hr>
            {{FormStore}}
            <hr>
           StoreData: {{StoreData}}

            <hr>
        <div class=" d-flex justify-content-between ">
           <h5 class="card-header">Bordered Table</h5>
            <div class=" p-4">
                <button type="button" class="btn rounded-pill btn-outline-info" v-if="!FormShow" @click="FormShow=true">ເພີ່ມຂໍ້ມູນ</button>
                <button type="button" class="btn rounded-pill btn-outline-success m-2" v-if="FormShow" @click="add_Store()">ບັນທືກ</button>
                <button type="button" class="btn rounded-pill btn-outline-danger" v-if="FormShow" @click="FormShow=false">ຍົກເລິກ</button>
            </div>
        </div>

 
  
  <div class="card-body">

        <div class="row" v-if="FormShow">
            <div class=" col-md-3">
                oooo
            </div>
            <div class=" col-md-9">
                <div class="mb-3">
                    <label  class="form-label">ຊື່ສີນຄ້າ</label>
                    <input type="text" class="form-control"  placeholder="ປ້ອນຊື້ສີນຄ້າ..." v-model="FormStore.name">
                </div>
                <div class="mb-3">
                    <label class="form-label">ຈຳນວນ</label>
                    <input type="number" class="form-control" placeholder="ປ້ອນຈຳນວນ..." v-model="FormStore.amount">
                </div>

                <div class="row">
                    <div class=" col-md-6">
                        <div class="mb-3">
                    <label  class="form-label">ລາຄາຊື່</label>
                    <input type="text" class="form-control" placeholder="ປ້ອນລາຄາຊື້..." v-model="FormStore.price_buy">
                </div>
                    </div>
                     <div class=" col-md-6">
                        <div class="mb-3">
                    <label class="form-label">ລາຄາຂາຍ</label>
                    <input type="text" class="form-control" placeholder="ປ້ອນລາຄາຂາຍ..." v-model="FormStore.price_sell">
                </div>
                     </div>
                </div>

            </div>
        </div>


    <div class="table-responsive text-nowrap" v-if="!FormShow">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>ຊື້ສີນຄ້າ</th>
            <th>ຮູບ</th>
            <th>ລາຄາຊື້</th>
            <th>ຈັດການ</th>
          </tr>
        </thead>
        <tbody>  

          <tr v-for="list in StoreData" :key="list.id">
            <td>{{list.id}}</td>
            <td>{{list.name}}</td>
            <td>
              {{list.iamge}}
            </td>
            <td>{{list.price_buy}}</td>
            <td>
              <div class="dropdown">
                <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="javascript:void(0);" @click="edit_store(list.id)"><i class="bx bx-edit-alt me-1"></i> ແກ້ໄຂ</a>
                  <a class="dropdown-item" href="javascript:void(0);" @click="Del_store(list.id)"><i class="bx bx-trash me-1"></i> ລົບ</a>
                </div>
              </div>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</div>

     </div>  
</template>

<script>
export default {
    name: 'Proect01Store',

    data() {
        return {
            IDupdate:'',
            FormShow: false,
            FormType: false,
            StoreData:[ { "id": 347, "name": "ເກິບ", "amount": 12, "price_buy": "10000", "price_sell": "50000" }, { "id": 59, "name": "ກະເປົາ", "amount": 50, "price_buy": "2000", "price_sell": "50000" }, { "id": 902, "name": "ກະະະ", "amount": 20, "price_buy": "2000", "price_sell": "3000" }],
            FormStore:{
                name:'',
                amount:'',
                price_buy:'',
                price_sell:'',
                iamge:'',
            }
        };
    },

    mounted() {
        
    },

    methods: { 
        add_Store(){
                //ກວດສອບເງືອນໄຂ
                if(this.FormType){

                    //ອັບເດດຂໍມູນ

                    this.StoreData.find((i)=>i.id==this.IDupdate).name = this.FormStore.name;
                     this.StoreData.find((i)=>i.id==this.IDupdate).amount = this.FormStore.amount;
                      this.StoreData.find((i)=>i.id==this.IDupdate).price_buy = this.FormStore.price_buy;
                       this.StoreData.find((i)=>i.id==this.IDupdate).price_sell = this.FormStore.price_sell;
                       // this.StoreData.find((i)=>i.id==this.IDupdate).name = this.FormStore.name;
                }else{

                     //ເພີມຂໍ້ມູນ
            this.StoreData.push({
                id: Math.floor(Math.random()*1000),
                name: this.FormStore.name,
                amount: this.FormStore.amount,
                price_buy: this.FormStore.price_buy,
                price_sell: this.FormStore.price_sell,
                iamge:'',
            });

                }

            //ເພີມຂໍ້ມູນ
           // this.StoreData.push({
             //   id: Math.floor(Math.random()*1000),
               // name: this.FormStore.name,
               // amount: this.FormStore.amount,
                //price_buy: this.FormStore.price_buy,
               // price_sell: this.FormStore.price_sell,
                //iamge:'',
           // });

            //ເຄຍຂໍມູນໃນຟອມ
                this.FormStore.name='';
                this.FormStore.amount='';
                this.FormStore.price_buy='';
                this.FormStore.price_sell='';

            //ປິດຟອມ ແລະ ສະແດງຕາຕາງ
              this.FormShow = false;

              //ກຳນົດເງືອນໄຂໃຫ້ທຳການເພີມຂໍມູນໃໝ່
            this.FormType=false;


        },

        edit_store(id){

            //ກຳນົດເງືອນໄຂໃຫ້ທຳການອັບເດດຂໍມູນ
            this.FormType=true;


            //console.log(id);
             this.IDupdate=id;
            //ຄົ້ນຫາຂໍ້ມູນ
            let item = this.StoreData.find((i)=>i.id==id);
           // console.log(item);

           //ນຳຂໍ້ມູນທີ່ຄົ້ນຫາ ມາໃສ່ມນຟອມ
                this.FormStore.name=item.name;
                this.FormStore.amount=item.amount;
                this.FormStore.price_buy=item.price_buy;
                this.FormStore.price_sell=item.price_sell;


                //ເປິດຟອມ ແລະ ສະແດງຕາຕາງ
              this.FormShow = true;
        },
        Del_store(id){
          let index = this.StoreData.map((i)=>i.id).indexOf(id);
          this.StoreData.splice(index,1);
          console.log(id);
        }

         
    },
};
</script>

<style lang="scss" scoped>

</style>