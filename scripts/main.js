
function theattachjs(id, contents, override, styles) {
  this.id = id;
  this.contents = contents;
  this.override = override;
  this.styles = styles
}


theattachjs.prototype.tags = function() {
  var thespace = [];
  const okkk = [];
  okkk.push(this.override.cssSelector)
  const theinputs = document.getElementById(this.id)
  const ggg = this.contents.tid
  const COLOR = (this.styles != undefined && this.styles.color != undefined) ? this.styles.color : '#4f4f4f'
  const BACKGROUND = (this.styles != undefined && this.styles.background != undefined) ? this.styles.background : '#e6e6e6';
  theinputs.addEventListener('keypress', function(event) {
    if (event.keyCode == 32) {
      const k = document.createElement('div')
      k.setAttribute('id','tags_'+new Date().getTime())
      k.setAttribute('class',this.contents != undefined && this.contents.cssid != undefined ? this.styles.color : 'uijsclass')
      console.log(theinputs)
      const c = document.createElement('div')
      c.setAttribute('id','closetag_'+new Date().getTime())
      c.textContent = '✖'
      c.style.cssText = 'cursor: pointer; position: absolute; top: 0.5px; right: 5px; opacity: 0.8; font-size: 12px;'
      const texty = String(theinputs.value).trim(' ')
      k.textContent = texty
      const kkkzz =  (texty.length < 6) ? 'padding-right: 20px;' :
                     (texty.length > 6 && texty.length < 15) ? 'padding-right: 27px;':
                      'padding-right: '+texty.length * 9 / 2+'px;'
      k.style.cssText = kkkzz +  ' padding-left: 9px; position: relative; width: auto; text-align: left; height: 30px; line-height: 30px; font-family: sans-serif; border-radius: 4px; background: ' + BACKGROUND+'; ' + 'color: ' + COLOR+';'
      k.appendChild(c)
      document.getElementById(ggg).appendChild(k)
      theinputs.select()
      window.getSelection().deleteFromDocument()
} else {
  return false;
}

  }, false)

  function closet(e) {
    const closeparticular = justTarget(e)
    if (closeparticular.id.startsWith('closetag')) {
      console.log(closeparticular.id)
      document.getElementById(ggg).removeChild(document.getElementById(closeparticular.id).parentNode)
    } else {
      return false;
    }
  }

  document.getElementById(ggg).addEventListener('click',closet,false)
  
  



  console.log(thespace)
}

theattachjs.prototype.tooltip = function() {

  const UIJSTOOLTIPS = document.createElement('div')
  UIJSTOOLTIPS.setAttribute('id','theattachjstooltips_'+new Date().getTime())
  const tcnt = this.contents.length * 10
  const COLOR =  (this.styles != undefined && this.styles.color != undefined) ? this.styles.color : '#5f5d5d';
  const BKG =  (this.styles != undefined && this.styles.background != undefined) ? this.styles.background : '#efefef';
  UIJSTOOLTIPS.style.cssText = 'position: relative; color: ' + COLOR +"; " + 'font-family: sans-serif; top: -50px; font-size: 14px; background: ' + BKG+"; " +'width:' + tcnt+'px;'+ 'padding-left: 5px; text-align: center;padding-right: 5px; height: 30px; line-height: 30px; border-radius: 15px'
  const UITIPSTEXT = document.createTextNode(this.contents)
  UIJSTOOLTIPS.appendChild(UITIPSTEXT)

  document.getElementById(this.id).addEventListener('mouseover', function() {
    
    document.getElementById(this.id).appendChild(UIJSTOOLTIPS)
  }, false)

  document.getElementById(this.id).addEventListener('mouseout', function() {
    document.getElementById(this.id).removeChild(UIJSTOOLTIPS)
  }, false)


}

theattachjs.prototype.modalbox = function() {

    const UIJSMODALBOX = document.createElement('div')
    const UIJSMODALTEXT = document.createElement('div')
    
    const DIMISSMODAL = document.createElement('div')
    DIMISSMODAL.textContent = '✖'
    DIMISSMODAL.style.cssText = 'color: black; cursor: pointer; position: absolute; right: 10px; top: 5px;   opacity: 0.8;'

    UIJSMODALBOX.setAttribute('id','theattachjsmodalbox_'+ new Date().getTime())
    const OVERIDE = this.override != undefined ? this.override.cssSelector : 'uijsclass'
    
    UIJSMODALBOX.setAttribute('class', OVERIDE)

    const COLOR = (this.styles != undefined && this.styles.color != undefined) ? this.styles.color : 'black'
    const BACKGROUND = (this.styles != undefined && this.styles.background != undefined) ? this.styles.background : '#ececec';
    UIJSMODALTEXT.setAttribute('id','theattachjsmdlbx_'+ new Date().getTime())
    DIMISSMODAL.setAttribute('id','theattachjsdmdlbx_close_'+ new Date().getTime())
    UIJSMODALTEXT.style.cssText = 'margin-top: 10px;'
    
      //
      
      


    
    
    
    UIJSMODALBOX.style.cssText = 'box-shadow: rgba(0, 0, 0, 0.1) 2px 7px 17px 0px; margin-top: 20px; position: relative; width: 281px; position: absolute; top: 0; left: 37%;' + 'color:'+ COLOR+';' + 'overflow: hidden; background:' + BACKGROUND+';' +' padding: 23px 20px 27px 19px; font-family: sans-serif; border-radius: 10px;'
    UIJSMODALTEXT.textContent = this.contents
    UIJSMODALBOX.appendChild(DIMISSMODAL)
    UIJSMODALBOX.appendChild(UIJSMODALTEXT)

    try {
    document.getElementById(this.id).addEventListener('click', function() {
      document.body.appendChild(UIJSMODALBOX);
      document.getElementById(UIJSMODALBOX.firstChild.id).onclick = function() {
        document.body.removeChild(UIJSMODALBOX);
      }
    }, false)
  } catch(e) {
    console.info(this.id )
  }
}

function justTarget(e) {
  if (!e) {
    e = window.event
  }
  return event.target || event.srcElement
}

theattachjs.prototype.share = function() {
  const GETSHARE = document.getElementById(this.id)
  GETSHARE.style.position = 'relative';
  const fivesymbol = ['pinterest','twitter','facebook','envelope']
  const sociallinks = [this.contents.pinterest,this.contents.facebook,this.contents.twitter,this.contents.email]

  var taponce = 0;
    const divz = document.createElement('div')
    divz.setAttribute('id', 'uijssocialmedia_'+new Date().getTime())

    const closesocial = document.createElement('div')
    closesocial.setAttribute('id','closesocials_'+ new Date().getTime())

    



    closesocial.style.cssText = 'cursor: pointer; position: absolute; right: 10px; font-size: 11px; top: 2px; opacity: 0.5;'
    closesocial.textContent = '✖'
    const g = sociallinks.length < 4 ? 'overflow-y: scroll;' : '';
    divz.style.cssText = 'border: 1px solid #ededed; box-shadow: 2px 7px 17px 0px rgba(0,0,0,0.1); flex-wrap: wrap; overflow: hidden;' + g + 'position: absolute; top: -75px;  box-shadow: box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.4); width: 202px; display: flex; left: 8px; gap: 4px; font-family: sans-serif; text-transform: uppercase; justify-content: flex-start; height: 42px; background: whitesmoke; padding: 13px; border-radius: 10px;'
    for (let x of fivesymbol) {
      const socialcolors = x == 'pinterest' ? '#cd2028' :
                           x == 'facebook' ? '#3b5998' :
                           x == 'twitter' ? '#1baae1' : '#a5a5a5';
      const divs = document.createElement('div')
      divs.setAttribute('id','sociallinks_'+x+new Date().getTime())

      const getk = document.createElement('i')
      getk.setAttribute('class', (x == 'twitter') ? 'fa fa-brands fa-'+x :
                                 (x == 'envelope') ? 'fa fa-brands fa-'+x :
                                 'fa fa-brands fa-'+x+'-'+x[0])

      const thedivs = document.createElement('a')
      thedivs.setAttribute('target','_blank')

      thedivs.style.cssText = 'text-decoration: none; color: white; width: 39px; height: 40px; line-height: 40px; background: #ffa50000; border-radius: 60px;'
      let thesocial;
      if (x == 'pinterest') {
        thesocial = [sociallinks[0],'pinterest']
      } else if (x == 'facebook') {
        thesocial = [sociallinks[1],'facebook']
      } else if (x == 'twitter') {
        thesocial = [sociallinks[2],'twitter']
      } else if (x == 'envelope') {
        thesocial = ['mailto:'+sociallinks[3],'envelope']
      } else {
        return false;
      }

      thedivs.setAttribute('href',thesocial[0])
      thedivs.setAttribute('id','sociallinks_'+thesocial[1])
      
      divs.style.cssText = 'margin-top: 7px; cursor: pointer; margin-top: 4px; border-radius: 4px; color: white; background:' + socialcolors +";" +'width: 45px; height: 41px; font-weight: bold; text-align: center; align-items: center; justify-content: center; display: flex;'
      
      
      thedivs.appendChild(getk)
      divz.appendChild(closesocial)
      divs.appendChild(thedivs)
      divz.appendChild(divs)
    }
    const geticons = {
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css",
      rel: "stylesheet"
    }
    var thelink = document.createElement('link')

  document.getElementById(this.id).addEventListener('mouseover', function() {

    thelink.setAttribute('href',geticons.href)
    thelink.setAttribute('rel', geticons.rel)
    document.head.appendChild(thelink)
    GETSHARE.appendChild(divz)
  }, false)



  var theclose = function(e) {
    document.head.removeChild(thelink)
    
    
      document.getElementById(this.id).removeChild(document.getElementById(document.getElementById(this.id).children[0].id))

  }

  document.getElementById(this.id).addEventListener('click',theclose,false)



}

theattachjs.prototype.copy = function() {

  const thetx = this.contents.text
  var div = document.getElementById(this.id)
  div.setAttribute('class',this.override.cssSelector)
  var cpythat = document.getElementById(this.contents.tid);


  div.addEventListener('click', function() {
      navigator.clipboard.writeText(cpythat.textContent);
      div.textContent = thetx
      setTimeout(function() {
        div.textContent = 'copy'
      }, 2000)

  }, false)


}




theattachjs.prototype.slider = function() {
  var t = []
  let swipenumber = 0;
  const y = new Date().getTime()
  const GETSLIDER = document.getElementById(this.id)
  for (let x of this.contents.url) {
    const d = document.createElement('div')
    const dt = document.createElement('div')
    d.setAttribute('class','theattachjsslide_' + y + '_' + this.id)

    const im = document.createElement('img')

    im.setAttribute('src', x)
    im.setAttribute('title','empty')
    
    im.style.cssText = 'max-width: 100%; height: auto; display: block;'
    d.appendChild(im)
    d.appendChild(dt)
    GETSLIDER.appendChild(d)
    t.push(GETSLIDER.appendChild(d))
  }

  function showslid() {
    let mswipe = document.getElementById(t[0].parentNode.id).children
    swipenumber++
    for (let i = 0; i < mswipe.length; i++) {
      if (swipenumber > mswipe.length) {
        swipenumber = 1
      } else {
        mswipe[i].style.display = "none";
        mswipe[swipenumber - 1].style.display = "block";
      }
    }
  }

    window.addEventListener('load', function() {
      setInterval(showslid, 1000)
    }, false)

}






theattachjs.prototype.videoplayer = function() {
  const TTHEMAINPLAYER = document.createElement('video')
  var y = []
  var k = []
  var z = []
    var videoprops = {
      width: this.contents.width,
      height: this.contents.height,
      src: this.contents.sourceurl
    }
    TTHEMAINPLAYER.setAttribute('width', videoprops.width)
    TTHEMAINPLAYER.setAttribute('height',videoprops.height)
    k.push('video_'+new Date().getTime())
    TTHEMAINPLAYER.setAttribute('id', this.contents.cssid)

    const MVIDEO = document.createElement('source')
    MVIDEO.setAttribute('src', videoprops.src)
    MVIDEO.setAttribute('type', "video/mp4")
    MVIDEO.setAttribute('codecs', "avc1.42E01E, mp4a.40.2")

    const NS = document.createElement('p')
    NS.textContent = 'Sorry, your browser doesnt support video'
      TTHEMAINPLAYER.appendChild(MVIDEO)
    TTHEMAINPLAYER.appendChild(NS)
    
    const VCONTROLLER = document.createElement('div')
    VCONTROLLER.setAttribute('id','hd_'+ new Date().getTime()+this.id)
    
    VCONTROLLER.setAttribute('class', this.override != undefined ? this.override.cssSelector : 'uijsclass')
  
    VCONTROLLER.style.cssText = 'width:'+ String(parseInt(this.contents.width))+'px !important; ' + 'padding: 10px; position: absolute; bottom: 0px; display: flex; flex-direction: column; margin-top: 100px;'

    
    const VIDEORNG = document.createElement('div')
    VIDEORNG.setAttribute('id', 'fn_'+ new Date().getTime()) 
    VIDEORNG.style.cssText =   'display: flex;  width: 96%; flex-direction: column; gap: 35px;'
    
    const THEIRNG = document.createElement('input')
    THEIRNG.style.cssText = 'display: flex;  width: 96%; flex-direction: column; gap: 35px;'

    z.push(this.contents.aid)
    THEIRNG.setAttribute('id',this.contents.aid)
    THEIRNG.setAttribute('type','range')
    THEIRNG.setAttribute('min', '0')
    THEIRNG.setAttribute('max', '0')
    THEIRNG.setAttribute('class','slider')

    VIDEORNG.appendChild(THEIRNG)

    const RCONTROL = document.createElement('div')
    RCONTROL.setAttribute('id','alignit'+ new Date().getTime()) 
    RCONTROL.style.cssText = 'width: ' +String(parseInt(this.contents.width))+'; ' + 'display: flex; align-items: center; gap: 20px; flex-wrap: wrap; padding-left: 0px; padding-right: 5px;'
    const PPLABTN = document.createElement('button')
    PPLABTN.setAttribute('type','button')
    PPLABTN.setAttribute('id','play_'+ new Date().getTime()+this.contents.aid)

    PPLABTN.style.cssText = 'cursor: pointer; font-size: 21px; outline: none; border: none; background: transparent; color: white; height: 34px; width: 37px; margin-bottom: -2px;'
    PPLABTN.innerHTML = '&#x25b6;'
    
    const rs = document.createElement('span')
    rs.textContent = '🕨'
    rs.style.cssText = 'color: white; rotate: 180deg; font-size: 28px; left: -30px; top: -15px; position: relative; opacity: 1; top: 2px; left: 1px;'
    const RVOL = document.createElement('input')
    RVOL.setAttribute('type','range')
    RVOL.setAttribute('id','volume_'+ new Date().getTime()+'_'+this.id)
    RVOL.setAttribute('min','1')
    RVOL.setAttribute('max','100')
    RVOL.setAttribute('class','sslider')
    RVOL.style.cssText = 'cursor: pointer; appearance: none; width: 54px; height: 7px; background: rgb(211, 211, 211); outline: none; position: relative; margin-left: 0px; border-radius: 10px; transition: opacity 0.2s ease 0s; margin-top: 6px;'


    RCONTROL.appendChild(PPLABTN)
    RCONTROL.appendChild(rs)
    RCONTROL.appendChild(RVOL)
 
    VCONTROLLER.appendChild(VIDEORNG)
    VCONTROLLER.appendChild(RCONTROL)

    TTHEMAINPLAYER.appendChild(VCONTROLLER)
    
    document.getElementById(this.id).appendChild(TTHEMAINPLAYER)
    document.getElementById(this.id).style.cssText = 'position: relative;'
    document.getElementById(this.id).appendChild(VCONTROLLER)


    let stop = 0;
    
    const MAINPLAYER = document.getElementById(this.contents.cssid)
    const STOPSECONDS = Math.floor(MAINPLAYER.duration)
    const PLAYBUTTON = document.getElementById(document.getElementById(this.id).children[1].children[1].children[0].id)

    const kk = document.getElementById(this.id).children[1].children[1].children[2].id
    
    var thevolume = function volume(theid) {
      const THESLIDER = document.getElementById(kk)
      const MAINPLAYER = theid

      THESLIDER.addEventListener('change', function() {
        
        MAINPLAYER.volume = THESLIDER.value / 10 * 0.1;
        
        console.log(THESLIDER.value)
      }, false)

    }

    thevolume(MAINPLAYER)

    PLAYBUTTON.addEventListener('click', function() {
        stop++;
        if (stop % 2) {
            MAINPLAYER.play()
            PLAYBUTTON.innerHTML = '&#10074;&#10074;'
            MAINPLAYER.setAttribute('data-video',document.getElementById('thevideo').children[1].children[1].children[0].id)
          } else  {
            MAINPLAYER.pause()
            PLAYBUTTON.innerHTML = '&#x25b6;'
            MAINPLAYER.setAttribute('data-video','pause')
          }
    })

    y.push(this.contents.cssid)
    function tt() {
      const ourconvert = String(document.getElementById(y[0]).currentTime * 0.0166666667)
      var seconds  = ourconvert.substring(ourconvert.indexOf(".") + 1, 4)
      const hours = ourconvert.substring(ourconvert.indexOf(".") - 1, 1)

        if (Math.floor(document.getElementById(y[0]).currentTime) < Math.floor(document.getElementById(y[0]).duration)) {
          document.getElementById(z[0]).min = 0
          document.getElementById(z[0]).max = Math.floor(document.getElementById(y[0]).duration)
          document.getElementById(z[0]).value = Math.floor(document.getElementById(y[0]).currentTime)

          document.getElementById(z[0]).addEventListener('change', function() {
            
            
            document.getElementById(y[0]).currentTime = document.getElementById(z[0]).value
          }, false)

        }
    }

    setInterval(tt, 1000)
}


function theattachjscreator(k) {
  var ks = new theattachjs(k.id,k.content,k.override, k.styles)
  return ks
}


export default theattachjscreator;