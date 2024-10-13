using app.db from '../db/interactions';
using PURCHASE_ from '../db/interactions';


service catalog {

    entity user_information as projection on db.User_data;
    entity form_data as projection on db.form_data;
    entity Purchase_Orders as projection on db.Purchase_Orders;
    entity Purchase_innerjoin as projection on PURCHASE_;

    function Get_Data() returns String;
    function Get_predication() returns String;
    action Post_Data(DATA:String) ;

}