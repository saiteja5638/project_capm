context app.myTables {

    entity User_data {
        key ID   : UUID;
            NAME : String(25)
    }

    entity form_data {
        key ID       : String(20);
            FORM_NUM : String(50);
    }
    
}