'use strict'

const userNameInput = document.getElementById('user-name');
const Button = document.getElementById("button");
const Rarea = document.getElementById("result-area");
const Tarea = document.getElementById("tweet-aera");
var aa = document.getElementById('answer');



const Img = document.createElement('img');
Img.classList.add("img");
Img.src = "https://github.com/tatatatt/uranai/blob/master/job_uranaishi.png?raw=true";
Rarea.appendChild(Img);

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
    'https://github.com/tatatatt/uranai/blob/master/megami.png?raw=true',
    'https://github.com/tatatatt/uranai/blob/master/omikuji_daikyou.png?raw=true',
    'https://github.com/tatatatt/uranai/blob/master/figure_ningenkankei_simple.png?raw=true',
    'https://github.com/tatatatt/uranai/blob/master/seikou_banzai_woman.png?raw=true',
    'https://github.com/tatatatt/uranai/blob/master/shitsuren_man.png?raw=true',
    'https://github.com/tatatatt/uranai/blob/master/pose_kuyashii_man.png?raw=true',
    'https://github.com/tatatatt/uranai/blob/master/hansei_koukai_woman.png?raw=true',
    'https://github.com/tatatatt/uranai/blob/master/tobotobo_aruku_woman.png?raw=true',
    'https://github.com/tatatatt/uranai/blob/master/face_angry_man5.png?raw=true',


];

function choice(username){

    var d = new Date();
    var year  = d.getFullYear();
    var month = d.getMonth();
    var dateCode = year + month;

    let nameCode = 0;
    for(let i = 0; i<username.length; i++){
        nameCode = nameCode + username.charCodeAt(i);
    }

    var code = nameCode + dateCode;
    var lastCode = code % answers.length;

    console.log(lastCode);
    console.log(year);
    console.log(month);
    console.log(nameCode);
    console.log(username);
}









Button.onclick = () => {

    var result = null;
    const username = userNameInput.value;


    //document.getElementById('answer').textContent = '';

    if(username === null){
        return;
    }else if (username === "長門有希"){
        result = 'あなたは5分23秒後にフランクフルトを買いに行きその16秒後にその場を後にする。完食までにかかる時間は4分35秒・・・その間34段の階段を含め235メートルを移動する。この施設から出るのは2時30間分後。その間残り4つのアトラクションに参加する。それぞれにかける時間はまず1年E組に17分7秒、2年F組に5分41秒、2年D組に41分35秒・・・';
    }else{
        var d = new Date();
        var year  = d.getFullYear();
        var month = d.getMonth();
        var dateCode = year + month;

    let nameCode = 0;
    for(let i = 0; i<username.length; i++){
        nameCode = nameCode + username.charCodeAt(i);
    }

        var code = nameCode + dateCode;
        var lastCode = code % answers.length;

        console.log(lastCode);
        console.log(year);
        console.log(month);
        console.log(nameCode);
        console.log(username);

        result = answers[lastCode];
        Img.src = imgList[lastCode];
        
    }

answer.innerText = result;

const tweetButton = document.getElementById("tweet");
tweetButton.setAttribute('data-text', result);

}


userNameInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
      Button.onclick();
    }
  };

