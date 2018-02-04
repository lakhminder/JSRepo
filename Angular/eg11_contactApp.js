var app = angular.module("contactApp", []);

app.controller("ContactCtlr", ContactCtlr);
app.controller("HeaderCtlr", HeaderCtlr);
app.controller("FooterCtlr", FooterCtlr);

app.value("AppNameSvc","Contacts APP");//angular value service
// app.constant("ConstantSvc",{  // angular constant service, don't know the difference b/w value and constant
//     "name" : "appName",
//     version : 1
// }); 

app.value("LoggingSvc", function(){
    console.log("Hello");
})

app.factory("AppFactorySvc", configureApp);// it will call configureApp() with DI
app.service("AppServiceSvc", PrepareApp);//it will call new PrepareApp() with DI i.e in constructor mode

//app.value("ValueSvc", configureApp()); // this will only work if configureApp does not depend on any other service

function configureApp(AppNameSvc){//angular injects dependency service, can only be used with factory service
    var value = {};
    value.name = AppNameSvc;
    value.varsion = 1;
    value.builtDate = new Date().toDateString();

    return value;// returns the formed object
}

function PrepareApp(AppNameSvc){// to be called in constructor mode
    //var this = {}; // added by JS runtime
    this.name = AppNameSvc;
    this.varsion = 1;
    this.builtDate = new Date().toDateString();
    //return this; //added by JS runtime
}

//Controllers
function HeaderCtlr(AppNameSvc, LoggingSvc){//value service injected
    this.appTitle = AppNameSvc;
    LoggingSvc();
}

function FooterCtlr(AppFactorySvc, AppServiceSvc){
    //this.appTitle = AppFactorySvc.name;
    this.appTitle = AppServiceSvc.name;
}

function ContactCtlr(){
    this.contacts = [
        {
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "emmi",
                "last": "koski"
            },
            "location": {
                "street": "3530 verkatehtaankatu",
                "city": "oulunsalo",
                "state": "finland proper",
                "postcode": 11781
            },
            "email": "emmi.koski@example.com",
            "login": {
                "username": "orangegorilla624",
                "password": "yankee",
                "salt": "dz7wlTTQ",
                "md5": "cd9d2d5cdff8393495684aa292ee8c34",
                "sha1": "cf5c09374e37dfeb7e137367f6444f7b28d8661a",
                "sha256": "f200bd65875910534180d8778243d37e317c5d8c02777e03d110fad31fbbdee9"
            },
            "dob": "1988-03-23 15:06:13",
            "registered": "2011-05-10 19:39:36",
            "phone": "09-251-673",
            "cell": "049-995-10-37",
            "id": {
                "name": "HETU",
                "value": "588-964U"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/74.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/74.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/74.jpg"
            },
            "nat": "FI"
        },
        {
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "adèle",
                "last": "fontai"
            },
            "location": {
                "street": "2681 rue bossuet",
                "city": "colombes",
                "state": "indre-et-loire",
                "postcode": 38946
            },
            "email": "adèle.fontai@example.com",
            "login": {
                "username": "goldenlion922",
                "password": "gilles",
                "salt": "CWHjSNt7",
                "md5": "4c4048b18fedccd6cca39de899ddd07b",
                "sha1": "94880d131d6466bdf9721249d4bba05ce664384e",
                "sha256": "39418a5ed7f4f52724fe0ac5731bea10e4276f7846674f8c819b7fc3feb04f05"
            },
            "dob": "1959-02-20 20:57:44",
            "registered": "2009-10-30 11:07:00",
            "phone": "05-88-62-62-09",
            "cell": "06-58-94-91-84",
            "id": {
                "name": "INSEE",
                "value": "259122367909 80"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/1.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "jason",
                "last": "hamilton"
            },
            "location": {
                "street": "4832 lakeshore rd",
                "city": "allen",
                "state": "kansas",
                "postcode": 95707
            },
            "email": "jason.hamilton@example.com",
            "login": {
                "username": "crazylion232",
                "password": "roberta",
                "salt": "6sACH5iS",
                "md5": "b6232fb5a8ce32637ad68fc39d589360",
                "sha1": "33916a68747604048f350fcc0aa7f38a22970ffd",
                "sha256": "d69bf344166ff8d80b7b6118d41f38fc91ce0be808e0944b5f29c2b3bfa0f674"
            },
            "dob": "1991-06-11 03:35:13",
            "registered": "2002-06-28 11:15:44",
            "phone": "(560)-681-1054",
            "cell": "(243)-310-9975",
            "id": {
                "name": "SSN",
                "value": "984-95-7296"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/40.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
            },
            "nat": "US"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "naël",
                "last": "lemoine"
            },
            "location": {
                "street": "1966 rue dumenge",
                "city": "tourcoing",
                "state": "mayotte",
                "postcode": 99847
            },
            "email": "naël.lemoine@example.com",
            "login": {
                "username": "blackladybug183",
                "password": "steelers",
                "salt": "CgCRkrlw",
                "md5": "128833777ca5d5ac1b10a3ec4fed9929",
                "sha1": "85fb15d1e517c3e0051982a4e360f2518421fb0f",
                "sha256": "31d9369f093fce6ee7b30dde1685e0524ac8e96438638b084a2cc643eee18c50"
            },
            "dob": "1949-08-15 12:35:07",
            "registered": "2006-01-12 12:31:47",
            "phone": "03-60-52-71-61",
            "cell": "06-59-18-79-17",
            "id": {
                "name": "INSEE",
                "value": "149758251426 74"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/26.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "taliana",
                "last": "de souza"
            },
            "location": {
                "street": "4298 rua pernambuco ",
                "city": "rondonópolis",
                "state": "rio grande do sul",
                "postcode": 42982
            },
            "email": "taliana.desouza@example.com",
            "login": {
                "username": "smallduck907",
                "password": "jojo",
                "salt": "dzHEFpaS",
                "md5": "4b9ef3d1ab36c4716c0ca6ab95d3be1c",
                "sha1": "1c4dc2724b7a65ab19d8c539971cd6633d147975",
                "sha256": "1cf2980386c19dcd8ed03666700b1fc4550da1ed388b64b14aaf839cce24f725"
            },
            "dob": "1964-04-09 21:11:20",
            "registered": "2007-02-07 04:52:07",
            "phone": "(17) 3162-8299",
            "cell": "(84) 7519-5806",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/5.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
            },
            "nat": "BR"
        }
    ];

    this.selectedContact = this.contacts[0];

    this.selectContact = function(index){
        this.selectedContact = this.contacts[index];
    }

}