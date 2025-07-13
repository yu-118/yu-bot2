const http = require("http");
const querystring = require("querystring");
const discord = require("discord.js");
const client = new discord.Client();

http
  .createServer(function (req, res) {
    if (req.method == "POST") {
      var data = "";
      req.on("data", function (chunk) {
        data += chunk;
      });
      req.on("end", function () {
        if (!data) {
          res.end("No post data");
          return;
        }
        var dataObject = querystring.parse(data);
        console.log("post:" + dataObject.type);
        if (dataObject.type == "wake") {
          console.log("Woke up in post");
          res.end();
          return;
        }
        res.end();
      });
    } else if (req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Discord Bot is active now\n");
    }
  })
  .listen(3000);

client.on("ready", (message) => {
  console.log("Bot準備完了～");
  client.user.setActivity("Discord", { status: "online" });
});

client.on("message", (message) => {
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }

  if (process.env.DISCORD_BOT_TOKEN == undefined) {
    console.log("DISCORD_BOT_TOKENが設定されていません。");
    process.exit(0);
  }
  if (message.isMemberMentioned(client.user)) {
    if (message.content.includes("Minecraftやりな")) {
setTimeout(function() {
  client.user.setActivity("Minecraft", { status: "online" });
}, 3000);
    return;
  }
     if (message.content.includes("wake up")) {
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
    return;
  }
         if (message.content.includes("Wake up")) {
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
    return;
  }
         if (message.content.includes("wake Up")) {
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
    return;
  }
         if (message.content.includes("Wake Up")) {
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
       sendReply(message, "wake up!!!");
    return;
  }
    sendReply(message, "なに？");
    return;
  }
  //Bot本体
  //一致するものだけ
  //if (massage.content.match(/[text]|[text1])){
  //sendMsg(message.channel.id,text);
  //}
  //
  //この言葉が入ってたら
  //if (massage.content.includes("[text]")){
  //sendMsg(message.channel.id,text);
  //}
    if (
    message.content.match(/!y util newpost/)
  ) {
    let text = "@everyone yuが新しい投稿をしたようです";
    sendMsg("1190938881433018381", text);
    sendMsg("1190938881433018381", "詳細はこちら https://yu-page.glitch.me/posts.html"); 
    return;
  }
      if (
    message.content.match(/!y util changepost/)
  ) {
    let text = "@everyone yuが投稿を変更したようです";
    sendMsg("1190938881433018381", text);
    sendMsg("1190938881433018381", "詳細はこちら https://yu-page.glitch.me/posts.html"); 
  
    return;
  }

  if (message.content.includes("さっすがぁ")) {
    let text = "まあね";
    sendMsg(message.channel.id, text);
    return;
  }
    if (message.content.includes("データ")) {
    let text = "https://sites.google.com/view/h-data-i/ホーム";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.includes("!y 0")) {
    client.user.setActivity("Discord", { status: "online" });
    return;
  }
  if (message.content.includes("カウント")) {
    for (let count = 0; count < 25; count++) {
      sendMsg(message.channel.id, count);
    }
    return;
  }
  if (message.content.includes("なんか言って")) {
    let a = "";
    let text = "";
    sendMsg(message.channel.id, text);
    return;
  }

  if (message.content.includes("なんかyu Bot成長してない？")) {
    let text = "まあね";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.includes("え？")) {
    let text = "まあね";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.includes("暑い")) {
    let text = "yu Botも暑い...";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.includes("暑くない")) {
    let text = "そう？";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.includes("おやすみ")) {
    let text = "おやすみ＾＾";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.includes("お休み")) {
    let text = "おやすみ＾＾";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.includes("ばいばい")) {
    let text = "おやすみ＾＾";
    sendMsg(message.channel.id, text);
    return;
  }
  //
  if (message.content.includes("スパム")) {
    sendMsg(message.channel.id, "うん");
    //
    if (message.content.includes("された")) {
      sendReply(message, "えぇ...");
      return;
    }
    if (message.content.includes("消")) {
      sendMsg(message.channel.id, "良かったね");
      return;
    }
    //
    return;
  }
  //
  if (
    message.content.match(
      /こんにちは|こんちゃ|こんにちはー|こんにちわー|こんにちわー|こんばんわ|こんばんは/
    )
  ) {
    let text = "こんにちはー";
    sendMsg(message.channel.id, text);
    return;
  }
  if (
    message.content.match(
      /おはよう|おはよー|おはよー！|おはよ～|おはよ～！|おはよ～!|おはよ～!/
    )
  ) {
    let text = "おはよー！";
    sendMsg(message.channel.id, text);
    return;
  }
  if (
    message.content.match(
      /殺すぞ|◯すぞ|殺す|しね|しね！|しね！！|ウザイ|うざい|ウザイ！|うざい！|ウザイ！！|うざい！！/
    )
  ) {
    let text = "えぇ...";
    sendReply(message, text);
    return;
  }
  if (message.content.includes("yu Bot")) {
    let text = "呼んだ？";
    sendMsg(message.channel.id, text);
  }
  if (message.content.includes("ばか")) {
    let text = "えぇ...";
    sendReply(message, text);
  }
  if (message.content.includes("バカ")) {
    let text = "えぇ...";
    sendReply(message, text);
  }
  if (message.content.match(/いま暇？|今暇？|今ひま？|いまひま？/)) {
    let text = "うん";
    sendMsg(message.channel.id, text);
  }
  if (
    message.content.match(/黙って|だまって|黙っとけ|だまっとけ|だまれ|黙れ/)
  ) {
    let text = "...";
    sendMsg(message.channel.id, text);
  }
  if (message.content.includes("おやすみ|ばいばい")) {
    let text = "おやすみ";
    sendMsg(message.channel.id, text);
  }
  //|なんでだよ|どういうこと？|バカなの？
  if (message.content.includes("は？")) {
    let text = "えぇ...";
    sendMsg(message.channel.id, text);
  }
  if (message.content.includes("なんでだよ")) {
    let text = "?";
    sendMsg(message.channel.id, text);
  }
  if (message.content.includes("どういうこと？")) {
    let text = "（話すのはやめておこう）";
    sendMsg(message.channel.id, text);
  }
  if (message.content.includes("バカなの？")) {
    let text = "どうだろうね";
    sendMsg(message.channel.id, text);
  }
});
client.login(process.env.DISCORD_BOT_TOKEN);

function sendReply(message, text) {
  message
    .reply(text)
    .then(console.log("リプライ送信: " + text))
    .catch(console.error);
}

function sendMsg(channelId, text, option = {}) {
  client.channels
    .get(channelId)
    .send(text, option)
    .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
    .catch(console.error);
}
