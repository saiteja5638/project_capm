context  app.db {

    entity Location {
        ID      : UUID;
        name    : String;
        address : String;
    }

    entity Customer {
        ID    : UUID;
        name  : String;
        email : String;
    }

    entity User_data {
        key ID   : UUID;
            NAME : String(25);
          
            
    }

    entity form_data {
        key ID       : String(20);
            FORM_NUM : String(50);
    }

    entity Purchase_Orders {
        key ID :UUID;
            PRODUCT_NAME:String(50);
            PRODUCT_DESC:String(50);
            PRODUCT_SER:String(25);
            PURCHASE_DATE:String(20);
    }
    
}

@cds.persistence.exists
@cds.persistence.table

entity PURCHASE{
    key PurchaseOrderID : UUID;
        PRODUCT_NAME : String;
        PRODUCT_DESC:String;
        PRODUCT_SER:String;
        PURCHASE_DATE:String;
        UserName :String;
}

