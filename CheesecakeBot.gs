var botId = "INSERT BOtID";
function sendText(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}
  
//respond to messages sent to the group. Recieved as POST
//this method is automatically called whenever the Web App's (to be) URL is called
function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text;
  var name = post.name;
   var user_id = post.user_id;
  var uberEatsArray = [];
  
  //command is, !hi, and it responds to the user with hello
  if(text.toLowerCase().substring(0, 3) == "!hi"){
    sendText("Hello, " + name);
  }
  
  //command = !cheesecake, and it tells the user how long its been since Justin has provided cheesecake
  if(text.toLowerCase().substring(0, 12) == "!cheesecake"){
     var setTime = new Date("2017/7/20");
  var curTime = new Date();
  var time = Math.round(Math.abs((setTime.getTime() - curTime.getTime()) / (1000 * 60 * 60 * 24)));
    var output = time.toString();
    sendText("It's been "+ output + " days since " + "Justin" + " has promised cheesecake."); 
  }
}
              
          
                      
