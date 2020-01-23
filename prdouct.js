'use strict';

const reuq_model = require('classes_model.js');

class Product extends reuq_model{
    constructor(){
        super()
        this.schema = {
            catogriey_id:{type:'string',required:true},
            price:{type:'number',required:true},
            weight:{type:'number'},
            quantity_in_stock:{type:'number',required:true}
        }

    }
}

module.exports = Product