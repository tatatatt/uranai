'use strict'

const userNameInput = document.getElementById('user-name');
const Button = document.getElementById("button");
const Rarea = document.getElementById("result-area");
const header = document.getElementById('head');
const p = document.getElementById('p');

var time = null;

const Img = document.createElement('img');
Img.classList.add("img");
Img.src = "https://github.com/tatatatto/uranai/blob/master/job_uranaishi.png?raw=true";
Rarea.appendChild(Img);

//初期の画像として占い師のものを用意する

const answers = [
    '現在のあなたの運勢は常人とは比較にならないほど良いです。一度は諦めたこと、本当はやりたいと思っていることにチャレンジしてみてはいかがでしょう。',
    '現在のあなたの運勢は人類史上稀に見る悪さです。ソシャゲのガチャと宝くじは控えた方が良いでしょう。',
    '近々、あなたは生涯において大切になる人と出会います。その人はあなたと結婚するかもしれないし、親友になるかもしれません。',
    'ちょっといい事があります。',
    '恋愛関係で失敗するかもしれません。恋人や奥さんに気を配ったり、告白を考えている場合は機をうかがった方が良いかもしれません。',
    'ちょっと悪い事があります。',
    'あなたは今、気づいてはいないかもしれませんが重大な選択を迫られています。このままでは後悔することになるので人間関係などをみなおしてみてはいかがでしょう。',
    'あなたは深爪程度の不幸に見舞われます。',
    'あなたにはこれから「イヤホンが絡まる」、「靴紐がやたら解ける」などのちょっとイラつく不幸が訪れます。',



];

const imgList = [
    'https://github.com/tatatatto/uranai/blob/master/megami.png?raw=true',
    'https://github.com/tatatatto/uranai/blob/master/omikuji_daikyou.png?raw=true',
    'https://github.com/tatatatto/uranai/blob/master/figure_ningenkankei_simple.png?raw=true',
    'https://github.com/tatatatto/uranai/blob/master/seikou_banzai_woman.png?raw=true',
    'https://github.com/tatatatto/uranai/blob/master/shitsuren_man.png?raw=true',
    'https://github.com/tatatatto/uranai/blob/master/pose_kuyashii_man.png?raw=true',
    'https://github.com/tatatatto/uranai/blob/master/hansei_koukai_woman.png?raw=true',
    'https://github.com/tatatatto/uranai/blob/master/tobotobo_aruku_woman.png?raw=true',
    'https://github.com/tatatatto/uranai/blob/master/face_angry_man5.png?raw=true',


];

//占いの結果の文章と画像のリスト



window.onload = function(){
    
    for (let q = 0; q < imgList.length; q++){
    
    var sideimg = document.createElement('img');
    sideimg.src = imgList[q];
    
    }
    }

//画像をあらかじめ読み込んでおく









function removeAllChildren(element) {
    while (element.firstChild) { 
      element.removeChild(element.firstChild);
    }
  }


//子供の要素を全て削除


function choice(){


    //名前、日付を処理し回答と画像の番号（lastCode）を決めます

    const username = userNameInput.value;

    var d = new Date();
    var year  = d.getFullYear();
    var month = d.getMonth();
    var dateCode = year + month;

    let nameCode = 0;
    for(let i = 0; i < username.length; i++){
        nameCode = nameCode + username.charCodeAt(i);
    }

    var code = nameCode + dateCode;
    var lastCode = code % answers.length;

    console.log(lastCode);
    console.log(year);
    console.log(month);
    console.log(nameCode);
    console.log(username);



    return lastCode;
}






Button.onclick = () => {

    var result = null;
    var username = userNameInput.value;
    var lastCode = choice();
    console.log(username);
    
   

    if (username === "長門有希"){
        console.log("1");
        //以下入力されたのが長門有希だったときの処理。ツイートができないのは仕様
        Img.src = "https://github.com/tatatatto/uranai/blob/master/job_uranaishi.png?raw=true";
        result = 'あなたは5分23秒後にフランクフルトを買いに行きその16秒後にその場を後にする。完食までにかかる時間は4分35秒・・・その間34段の階段を含め235メートルを移動する。この施設から出るのは2時30間分後。その間残り4つのアトラクションに参加する。それぞれにかける時間はまず1年E組に17分7秒、2年F組に5分41秒、2年D組に41分35秒・・・';
        
    }else if (username){


        console.log("2");

        //以下普通のものの時の処理

        result = answers[lastCode];
        Img.src = imgList[lastCode];
        
        console.log(result);

        removeAllChildren(header);
        removeAllChildren(p);

        //headerとparagraphを削除（ツイッターのボタンはheaderに追加されます）


        dotweet(result,"占い");



    }else if(username === ""){

console.log("3");

 

console.log(time);

    time++;

     console.log(time);
    if(time>120){
    removeAllChildren(header);
    removeAllChildren(p);
    result = "人として恥ずかしくないの？";
    var penitence = "私は水着のお姉さんをみたくて100回もボタンを連打しました"
    dotweet(penitence,"懺悔");
    }else if(time === 120){
    result = "ほら、喜べよ";
    console.log("アホ");
    Rarea.insertAdjacentHTML("afterbegin",'<iframe width="560" height="315" src="https://www.youtube.com/embed/uXmXhpABXV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    }
    else if(time>19){
        var count = 120 - time;
        result = "あと100回クリックしたら水着おねーちゃんの動画を見せてやる。それを見たら帰れ。残り" + count + "回";
    } else if(time>14){
        result = "暇なのか？"
    }
    else if(time>9){
        result = "いい加減にしろ。こっちも暇じゃねぇんだぞ";
    } else if(time > 4){
        result = "名前を打て"
    } else if(time){
        result = "お名前を入力してください"
    }

    }

answer.innerText = result;

//占いの文章の反映


}

function dotweet(result,hashtag){
    const tweetP = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
      + encodeURIComponent(hashtag)
      + '&ref_src=twsrc%5Etfw';
    tweetP.setAttribute('href', hrefValue);
    tweetP.className = 'twitter-hashtag-button';
    tweetP.setAttribute('data-text', result);
    tweetP.innerText = 'Tweet #占い';
    header.appendChild(tweetP);
    
    console.log(tweetP.getAttribute('data-text'));

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    header.appendChild(script);

}



userNameInput.onkeydown = (event) => {
        if (event.key === 'Enter') {
          Button.onclick();
        }
      }
