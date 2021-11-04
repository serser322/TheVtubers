<template>
  <the-header @save-search="getSearch"></the-header>
  <router-view :userInput="userInput"></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter
  },
  provide() {
    return {
      vtubers: this.vtubers,
      padkoData: this.padkoData,
      no15Data: this.no15Data,
      lutraData: this.lutraData,
      obearData: this.obearData,
      userInputObj: this.userInputObj
    };
  },
  data() {
    return {
      userInputObj: {
        userInput: ''
      },
      vtubers: [
        {
          id: 'padko',
          name: '平平子',
          href: 'padko',
          img: 'padko.png'
        },
        {
          id: 'no15',
          name: '15號',
          href: 'no15',
          img: 'no15.png'
        },
        {
          id: 'lutralutra',
          name: '露恰露恰',
          href: 'lutralutra',
          img: 'lutra.png'
        },
        {
          id: 'obear',
          name: '歐貝爾',
          href: 'obear',
          img: 'obear.png'
        }
      ],
      padkoData: {
        famousSaying: '「平平子 Boing Boing ！」',
        famousSayingAnnotation: '──平平子對信仰的堅持',
        basicInfo: {
          姓名: '平平子',
          別稱: '阿平、平姊、平板',
          出廠日: '4月2日',
          身高體重: '144cm (據說含角的高度) / 39kg',
          個性: '傲嬌、喜怒無常、管家婆、心軟',
          喜好: '(生活工場)炸蝦、過期食品、飲料'
        },
        socialMediaIcons: {
          youtube: {
            title: '平平子Youtube頻道',
            class: 'lni-youtube',
            link: 'https://www.youtube.com/c/PadkoCh%E5%B9%B3%E5%B9%B3%E5%AD%90'
          },
          twitter: {
            title: '平平子Twitter',
            class: 'lni-twitter-filled',
            link: 'https://twitter.com/Padko_tablet'
          },
          facebook: {
            title: '平平子Facebook',
            class: 'lni-facebook-filled',
            link: 'https://www.facebook.com/Padko.Ch/'
          },
          discord: {
            title: '【春魚創意創魚非】Discord群',
            class: 'lni-discord',
            link: 'https://discord.com/invite/5tRSUCc4Nt'
          },
          web: {
            title: '平平子 Padko⚡',
            class: 'lni-world',
            link: 'https://lit.link/padko'
          }
        },
        otherSaying: [
          '「平平子boing boing！」',
          '「衝啥啦！」',
          '「平平子傻爆眼」',
          '「啊巴巴巴巴」(不明平板語)',
          '「我們要來認真念SC，不雜談」',
          '「人人都要有隻炸蝦，炸蝦超棒」',
          '「平平子氣噗噗！」',
          '「user你腦子破洞」'
        ],
        achievements: [
          '曾多次對屋外路過之改管嗆聲',
          '曾多次開車，甚至飆車而仍不自覺',
          '曾舉辦平平子有沒有boingboing投票，但由於投票結果「無bo派」情勢大好，以致投票慘遭黑箱中斷，不了了之',
          '具有把SC台都念成雜談台的神奇能力',
          '把自己的妹妹──茉寶，摔成骨折(家暴前科)',
          '對過期食品有著異於常人的執著'
        ],
        images: {
          section1: {
            img: '人物2(crop).png',
            caption: ''
          },
          section2: {
            img: '婆爆的平平子.png',
            caption: '婆爆的平平子'
          },
          section3: {
            img: '平50.png',
            caption: '7pupu的平平子'
          },
          section4: {
            img: '姊妹Q版 (1).png',
            caption: '平平子與她的妹妹──茉寶'
          }
        }
      },
      no15Data: {
        famousSaying: '「我才不是老婆貓！！」',
        famousSayingAnnotation: '──15對官方設定的堅決否認',
        basicInfo: {
          姓名: '15號',
          別稱: '老婆貓、橘子貓、炒飯姐姐',
          出生日: '10月5日',
          身高體重: '161cm / 46kg',
          個性: '傲嬌、謹慎敏感',
          喜好: '友善石虎農作、欸配、逗貓棒',
          討厭: '過馬路、有輪胎的交通工具'
        },
        socialMediaIcons: {
          youtube: {
            title: '15號Youtube頻道',
            class: 'lni-youtube',
            link: 'https://www.youtube.com/c/no15rescute'
          },
          twitter: {
            title: '15號Twitter',
            class: 'lni-twitter-filled',
            link: 'https://twitter.com/no15_rescute'
          },
          facebook: {
            title: '瀕臨絕種團Facebook',
            class: 'lni-facebook-filled',
            link: 'https://www.facebook.com/RESCUTE119/'
          },
          discord: {
            title: '【春魚創意創魚非】Discord群',
            class: 'lni-discord',
            link: 'https://discord.com/invite/5tRSUCc4Nt'
          },
          web: {
            title: '15號 No.15 🐾',
            class: 'lni-world',
            link: 'https://lit.link/no15'
          }
        },
        otherSaying: [
          '「今天也是還行的一天」',
          '「誰是老婆貓？你才老婆貓啦！你全家都老婆貓」',
          '「我才沒有開車！」',
          '「射ㄐㄧㄣ就是投SC的意思啊！你們這些思想齷齪的人類」',
          '「我決定要叫它『歐金金』」',
          '「謝謝好野人的雞雞排」',
          '「我是清楚系Vtuber，Rescute的清楚擔當」',
          '「喜歡的話分享給喜歡的人，不喜歡的話分享給不喜歡的人」'
        ],
        achievements: [
          '不會開車，但也很會開車',
          '闆闆送ICU，十次裡有九次是15送進去的',
          '以一曲鳥不拉基驚豔全場，讓好野人們都想問問自己到底聽了什麼',
          '以精湛畫技，替闆闆賦予鮮活的泳裝形象',
          '多次發動「絕對不可以色色」卡，但效果對發動者自己無效',
          '把公車當雲霄飛車開，車上1500多名乘客瑟瑟發抖',
          '曾寫程式設計出Pop Leopard Cat遊戲，實踐自己的遊戲自己寫',
          '揚言要舉辦尖叫雞ASMR企劃'
        ],
        images: {
          section1: {
            img: '15立繪表情頭像1.png',
            caption: ''
          },
          section2: {
            img: '15軼事圖1.png',
            caption: '婆爆的15'
          },
          section3: {
            img: 'no15(2).png',
            caption: '15飆起車來，連闆闆都怕'
          },
          section4: {
            img: '石虎 (3).png',
            caption: '唱歌時超級清楚，說話時超級渾沌的15'
          }
        }
      },
      lutraData: {
        famousSaying: '「你各位輕薄短小！」',
        famousSayingAnnotation: '──露恰對露軍們的精神訓話',
        basicInfo: {
          姓名: '露恰露恰',
          別稱: '長官、露恰姊',
          出生日: '5月29日(世界水獺日)',
          身高體重: '168cm / 54.9kg',
          個性: '成熟穩重、優雅智慧、鄰家大姊姊',
          喜好: '乾淨的水、小孩子、吐槽',
          討厭: '經紀公司禁食令、沒有自己的空間'
        },
        socialMediaIcons: {
          youtube: {
            title: '露恰露恰Youtube頻道',
            class: 'lni-youtube',
            link: 'https://www.youtube.com/channel/UCmyc8eVR3G9A7hjaHsLR6NQ'
          },
          twitter: {
            title: '露恰露恰Twitter',
            class: 'lni-twitter-filled',
            link: 'https://twitter.com/lutra_rescute'
          },
          facebook: {
            title: '瀕臨絕種團Facebook',
            class: 'lni-facebook-filled',
            link: 'https://www.facebook.com/RESCUTE119/'
          },
          discord: {
            title: '【春魚創意創魚非】Discord群',
            class: 'lni-discord',
            link: 'https://discord.com/invite/5tRSUCc4Nt'
          },
          web: {
            title: '露恰露恰 Lutralutra 🍻',
            class: 'lni-world',
            link: 'https://lit.link/lutralutra'
          }
        },
        otherSaying: [
          '「露恰挖嘎奈~」',
          '「齁~~~唷~~~」',
          '「你各位~有沒有~好好當個乖孩子呀？」',
          '「好可憐哦~怎麼這麼可憐呢？」',
          '「露恰才不是海獺！你才海獺啦！你全家都海獺！」',
          '「這一定是一隻臥底露軍的間諜海獺」',
          '「露洽才沒有獺皮！」(註：獺皮=賴皮)',
          '「沒有，露恰一點都不可愛！」'
        ],
        achievements: [
          '勉強算是Rescute的清楚與剎車擔當，也是闆闆偶像夢的最後一絲希望',
          '當初因想看「石虎後空翻」，而被闆闆騙來面試，進而成為vtuber',
          '幼時嘗百草，曾多次生食具有毒性的日日春',
          '專業吐槽系水獺，曾多次把恐怖遊戲玩成搞笑遊戲',
          '死靈低音唱腔，曾引來閃靈樂團官方帳號的留言朝聖',
          '曾因住處的網路問題，霸氣威壓管委會',
          '獺皮一時爽，一直獺皮一直爽~ '
        ],
        images: {
          section1: {
            img: '24.png',
            caption: ''
          },
          section2: {
            img: '【有耳朵版】水獺立繪2.png',
            caption: '婆爆的露恰'
          },
          section3: {
            img: '露恰立繪表情頭像1.png',
            caption: '長官就這樣笑笑地看著露軍，看得全軍心底發毛'
          },
          section4: {
            img: '露恰軼事圖2.png',
            caption: '真的婆到爆的長官'
          }
        }
      },
      obearData: {
        famousSaying: '「人家才不遜~~嗚嗚嗚...」',
        famousSayingAnnotation: '──歐貝爾遜砲地否定自己遜砲',
        basicInfo: {
          姓名: '歐貝爾',
          別稱: '隊長',
          出生日: '1月16日 (or 2月16日，端看隊長記憶)',
          身高體重:
            '137cm/ 33kg (初配信顯示為 180cm/100kg；中友百貨熊寶貝實測看板138cm)',
          個性: '無拘無束、熱愛表演、膽子又小',
          喜好: '糖炒栗子、香腸',
          討厭: '會夾手的東西、中藥',
          禁詞: '矮、蘿、小、遜'
        },
        socialMediaIcons: {
          youtube: {
            title: '歐貝爾Youtube頻道',
            class: 'lni-youtube',
            link: 'https://www.youtube.com/channel/UCW5O-tjdwofBwfispeMSPfw'
          },
          twitter: {
            title: '歐貝爾Twitter',
            class: 'lni-twitter-filled',
            link: 'https://twitter.com/Obear_rescute'
          },
          facebook: {
            title: '瀕臨絕種團Facebook',
            class: 'lni-facebook-filled',
            link: 'https://www.facebook.com/RESCUTE119/'
          },
          discord: {
            title: '【春魚創意創魚非】Discord群',
            class: 'lni-discord',
            link: 'https://discord.com/invite/5tRSUCc4Nt'
          },
          web: {
            title: '歐貝爾 Obear 🌰',
            class: 'lni-world',
            link: 'https://lit.link/obear'
          }
        },
        otherSaying: [
          '「我生日是幾號來著....啊！0216！」',
          '「浪漫貝爾教你浪漫突進」',
          '「你們是笨蛋嗎歐嚕」',
          '「你們不要吵啦！我身高是180公分，180公分啦！嗚嗚嗚」(崩潰',
          '「今天早上真的不會(開突襲台)啦，說謊的話隊長是小熊」(結果開了',
          '「此物熊熊C」',
          '「歐嚕隊長的墜機魔法，萌え萌えキュン♡」',
          '「以後如果有粉絲見面會，每個都要穿女裝啊！穿男裝的我看到一個就打一個！」'
        ],
        achievements: [
          '名義上貴為Rescute隊長，實則遜砲與迫害擔當',
          '證明深V與平胸可以同時並存，不矛盾',
          '週記台──(X) 迫害台──(O) 受害者們已蒐集相關證據',
          '撒嬌王與台詞回，屢屢突破人類恥力下線',
          '面臨財務危機，於湛藍牢籠兼差清潔隊長，辛酸畫面流出',
          '曾於變身像素熊時，宣稱其異色瞳為「邪王真眼」，能釋放力量讓世界滅亡，打個噴嚏，台北市就會不見了 (中二爆',
          '曾於兩萬訂閱時霸凌闆闆，讓闆闆被迫撐10秒即下線'
        ],
        images: {
          section1: {
            img: '9.png',
            caption: ''
          },
          section2: {
            img: '抱抱.png',
            caption: '這麼婆的隊長，不抱嗎?'
          },
          section3: {
            img: '31.png',
            caption: '正仔細檢查哪隻熊寶貝說禁詞的隊長'
          },
          section4: {
            img: 'YA.png',
            caption: '真有深V的大隊長'
          }
        }
      }
    };
  },
  methods: {
    getSearch(input) {
      this.userInputObj.userInput = input;
    }
  }
};
</script>

<style>
* {
  font-family: 'Noto Sans CJK TC';
}

html,
body {
  position: relative;
  min-height: 100%;
  margin: 0;
  padding: 0;
  background-image: url('assets/background1.jpg');
  /* background-size: cover; */
}

body::before {
  content: '';
  background-color: rgba(255, 255, 255, 0.5);
  background-size: cover;
  position: absolute;
  min-height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

@media (min-width: 992px) {
  html,
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}
</style>
