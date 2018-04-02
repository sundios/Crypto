var currencies = {};


function refresh() {
    $.get("https://accesscontrolalloworiginall.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/?limit=10", function(response){
    console.log(response);
    for (var i = 0; i < response.length; i++) {
        var currency = response[i];
        currencies[currency.name] = currency;

        var s = "";
        s += '<div id="crypto">';
        s += '<h4>'+ currency.name + ': </h4>';
        s +=  '<h3>' + currency.price_usd + '</h3>'
        s += '</div>';
        $('#cryptoslider').append(s);
    }
});
}

refresh();


function crypto()
{
    LTC = document.getElementById("LTC");
    USD = document.getElementById("USD");
    BTC = document.getElementById("BTC");
    ETH = document.getElementById("ETH");
    XRP = document.getElementById("XRP");
}



function BTCfunc()
{   
    LTC.value = BTC.value * currencies["Bitcoin"].price_usd / currencies["Litecoin"].price_usd;
    USD.value = BTC.value * currencies["Bitcoin"].price_usd;
    ETH.value = BTC.value * currencies["Bitcoin"].price_usd / currencies["Ethereum"].price_usd;
    XRP.value = BTC.value * currencies["Bitcoin"].price_usd / currencies["Ripple"].price_usd;
}

function ETHfunc()
{
    
    LTC.value = ETH.value * currencies["Ethereum"].price_usd / currencies["Litecoin"].price_usd;
    USD.value = ETH.value * currencies["Ethereum"].price_usd;
    BTC.value = ETH.value * currencies["Ethereum"].price_usd / currencies["Bitcoin"].price_usd;
    XRP.value = ETH.value * currencies["Ethereum"].price_usd / currencies["Ripple"].price_usd;
}

function XRPfunc()
{   LTC.value = XRP.value * currencies["Ripple"].price_usd / currencies["Litecoin"].price_usd;
    USD.value = XRP.value * currencies["Ripple"].price_usd;
    BTC.value = XRP.value * currencies["Ripple"].price_usd / currencies["Bitcoin"].price_usd;
    ETH.value = XRP.value * currencies["Ripple"].price_usd / currencies["Ethereum"].price_usd;
}

function USDfunc()
{   LTC.value = USD.value / currencies["Litecoin"].price_usd;
    BTC.value = USD.value / currencies["Bitcoin"].price_usd;
    ETH.value = USD.value / currencies["Ethereum"].price_usd;
    XRP.value = USD.value / currencies["Ripple"].price_usd;
}

function LTCfunc(){
    USD.value = LTC.value * currencies["Litecoin"].price_usd;
    BTC.value = LTC.value * currencies["Litecoin"].price_usd / currencies["Bitcoin"].price_usd;
    ETH.value = LTC.value * currencies["Litecoin"].price_usd / currencies["Ethereum"].price_usd;
    XRP.value = LTC.value * currencies["Litecoin"].price_usd / currencies["Ripple"].price_usd;
}

crypto();

//Scrool Bar

ScrollRate = 60;

function scrollDiv_init() {
    DivElmnt = document.getElementById('cryptoslider');
    ReachedMaxScroll = false;
    
    DivElmnt.scrollTop = 0;
    PreviousScrollTop  = 0;
    
    ScrollInterval = setInterval('scrollDiv()', ScrollRate);
}

function scrollDiv() {
    
    if (!ReachedMaxScroll) {
        DivElmnt.scrollTop = PreviousScrollTop;
        PreviousScrollTop++;
        
        ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
    }
    else {
        ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;
        
        DivElmnt.scrollTop = PreviousScrollTop;
        PreviousScrollTop--;
    }
}

function pauseDiv() {
    clearInterval(ScrollInterval);
}

function resumeDiv() {
    PreviousScrollTop = DivElmnt.scrollTop;
    ScrollInterval    = setInterval('scrollDiv()', ScrollRate);
}





