context  app.db {

    entity User_data {
        key ID   : UUID;
            NAME : String(25);
            Orders : Composition of many Purchase_Orders on   Orders.PURCHASEID = $self;
            
    }

    entity form_data {
        key ID       : String(20);
            FORM_NUM : String(50);
    }

    entity Purchase_Orders {
        key ID :UUID;
            PURCHASEID:Association to User_data;
            PRODUCT_NAME:String(50);
            PRODUCT_DESC:String(50);
            PRODUCT_SER:String(25);
            PURCHASE_DATE:String(20);
    }
    
}