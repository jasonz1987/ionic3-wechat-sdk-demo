import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
declare var Wechat:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http: Http) {

  }

  checkInstalled() {
    Wechat.isInstalled(function (installed) {
        alert("Wechat installed: " + (installed ? "Yes" : "No"));
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  shareText() {
    Wechat.share({
      text: "这是分享的标题",
      scene: Wechat.Scene.TIMELINE
    }, function () {
        alert("Success");
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  shareLink() {
    Wechat.share({
      message:{
        title: "这是分享的标题",
        description: "这是分享的描述",
        thumb: "www/assets/imgs/logo.png",
        media: {
          type: Wechat.Type.WEBPAGE,
          webpageUrl: "https://www.jason-z.com"
        }
      },
      scene: Wechat.Scene.TIMELINE  
    }, function () {
        alert("Success");
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  shareImage() {
    Wechat.share({
      message: {
        title: "这是分享的标题",
        description: "这是分享的描述",
        thumb: "www/assets/imgs/logo.png",
        media: {
          type: Wechat.Type.IMAGE,
          image: "https://www.jason-z.com/storage/test_image.jpg"
        }
      },
      scene: Wechat.Scene.TIMELINE
    }, function () {
        alert("Success");
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  shareMusic() {
    Wechat.share({
      message: {
        title: "这是分享的标题",
        description: "这是分享的描述",
        thumb: "www/assets/imgs/logo.png",
        media: {
          type: Wechat.Type.MUSIC,
          musicUrl: "https://www.jason-z.com",
          musicDataUrl: "https://www.jason-z.com/storage/test_audio.mp3"
        }
      },
      scene: Wechat.Scene.TIMELINE
    }, function () {
        alert("Success");
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  shareVideo() {
    Wechat.share({
      message: {
        title: "这是分享的标题",
        description: "这是分享的描述",
        thumb: "www/assets/imgs/logo.png",
        media: {
          type: Wechat.Type.VIDEO,
          videoUrl: "https://www.jason-z.com/storage/test_video.mp4",
        }
      },
      scene: Wechat.Scene.TIMELINE
    }, function () {
        alert("Success");
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  shareMini() {
    Wechat.share({
      message: {
        title: "这是分享的标题",
        description: "这是分享的描述",
        thumb: "www/assets/imgs/logo.png",
        media: {
          type: Wechat.Type.MINI,
          webpageUrl: "https://www.jason-z.com", // 兼容低版本的网页链接
          userName: "gh_745127d80c0f", // 小程序原始id
          path: "pages/logs/logs", // 小程序的页面路径
          hdImageData: "https://www.jason-z.com/storage/test_image.jpg", // 程序新版本的预览图二进制数据 不超过128kb 支持 地址 base64 temp
          withShareTicket: true, // 是否使用带shareTicket的分享
          miniprogramType: Wechat.Mini.PREVIEW
        }
      },
      scene: Wechat.Scene.SESSION
    }, function () {
        alert("Success");
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  openMini(){
    var params = {
      userName: 'gh_745127d80c0f', // userName
      path: 'pages/logs/logs', // open mini program page
      miniprogramType: Wechat.Mini.PREVIEW // Developer version, trial version, and official version are available for selection
    };
    
    Wechat.openMiniProgram(params,function(data){
        console.log(data); // data:{extMsg:""}  extMsg: Corresponds to the app-parameter attribute in the Mini Program component <button open-type="launchApp">
    },function(){
        alert('error');
    });
  }

  auth() {
    var scope = "snsapi_userinfo",
    state = "_" + (+new Date());
    Wechat.auth(scope, state, function (response) {
        alert(JSON.stringify(response));
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  pay() {
      this.http.post("https://www.jason-z.com/test/wechat_order",{}).subscribe((res:Response) => {
        console.log(res);

        var ret = res.json();

        //   var params = {
        //     partnerid: '10000100', // merchant id
        //     prepayid: 'wx201411101639507cbf6ffd8b0779950874', // prepay id
        //     noncestr: '1add1a30ac87aa2db72f57a2375d8fec', // nonce
        //     timestamp: '1439531364', // timestamp
        //     sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
        // };

        if(ret.status) {
          Wechat.sendPaymentRequest(ret.data, function () {
                alert("Success");
            }, function (reason) {
                alert("Failed: " + reason);
            });
        }
      }, error => {
        console.log(error);
      }); 
  }
}
