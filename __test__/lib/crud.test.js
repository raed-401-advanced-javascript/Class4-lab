'use strict';

const requ_methods = require('../../categories');

const produ_method = require('../../prdouct');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new requ_methods();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        console.log(record);
        Object.keys(obj).forEach(key => {
          console.log(key);
          expect(record[0].key).toEqual(obj.key);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        console.log('raed', record[0].id);
        let output = categories.get(record[0].id);
        // console.log(output)
        Object.keys(obj).forEach(key => {
          console.log('hi', output[0], obj);
          expect(obj[key]).toEqual(output[0][key]);
        });
      });
  });
  it('test update ()', () => {
    let obj = { name: 'test' };
    return categories.create(obj)
      .then(data => {
        obj = { name: 'raed' };
        return categories.update(data[0].id, obj)
          .then(data => {
            let output = categories.get(data[0].id);
            Object.keys(obj).forEach(key => {
              expect(obj[key]).toEqual(output[0][key]);
            });
          });

      });
  });
  it('test delete ()', () => {
    let obj = { name: 'test' };
    return categories.create(obj)
      .then(db => {
        return categories.delete(db[0].id)
          .then(output => {
            let expexted = categories.get(db[0].id);
            console.log(expexted);
            expect(expexted).toEqual([]);
          });
      });
  });
});

//*********************"test for product"********************* */

describe('check if CRUD work on product',()=>{
  let products;
  beforeEach(()=>{
    products= new produ_method();
  });
  it('check POST()',()=>{
    let obj ={price:3,weight:5,quantity_in_stock:1};
    return products.create(obj)
      .then(output =>{
        Object.keys(obj).forEach(key =>{
          expect(obj[key]).toEqual(output[0][key]);
        });
      });
  });
  it('check if can GET()',()=>{
    let obj ={price:3,weight:5,quantity_in_stock:1};
    return products.create(obj)
      .then(output =>{
        let create_output = products.get(output[0].id);
        Object.keys(obj).forEach(key =>{
          expect(obj[key]).toEqual(create_output[0][key]);
        });
      }); 
  });
  it('check if can update()',()=>{
    let obj ={price:3,weight:5,quantity_in_stock:1};
    return products.create(obj)
      .then(output =>{
        obj.price = 9;
        return products.update(output[0].id,obj)
          .then(data =>{
            let output_update = products.get(data[0].id);
            Object.keys(obj).forEach(key =>{
              expect(obj[key]).toEqual(output_update[0][key]);
            });
          });

      });
  });
  it('check if can delete()',()=>{
    let obj ={price:3,weight:5,quantity_in_stock:1};
    return products.create(obj)
      .then(data =>{
        return products.delete(data[0].id)
          .then(output =>{
            let get_output = products.get(data[0].id);
            expect(get_output).toEqual([]);
          });
      });
  });
});
