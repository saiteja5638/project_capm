using app.db from '../db/interactions';


service catalog {

    entity user_information as projection on db.User_data;
    entity form_data as projection on db.form_data;
    entity Purchase_Orders as projection on db.Purchase_Orders;

    function Get_predication() returns String;

}