using app.myTables from '../db/interactions';


service MyTABLES {

    entity user_information as projection on myTables.User_data;

    function Get_predication() returns String;

}