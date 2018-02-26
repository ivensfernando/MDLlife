$(document).ready(function(){
    jumpingArrow();
    customScrolling();
    updateForm();
    videoControllers();
    windowOnSroll();
    initScrambleText();
    initSiteNav();
    mentorsPopup();
    teamPopup();
    get_timer();
    showInstruments();
    burger();
    rpModal();
    /*initiation for HTML document*/
    AOS.init({
      once: true,
      delay: 100
    });
  $(".roadmap-slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    vertical: !0,
    swipe: !1,
    focusOnSelect: !0,
    centerMode: !0,
    centerPadding: "0",
    asNavFor: ".roadmap-slider-nav",
    arrows: !0,
    dots: !0,
    infinite: !1,
    dotsClass: "custom_paging",
    customPaging: function(e, t) {
        var n = t + 1
        , o = e.slideCount;
        return '<a class="custom-dot" role="button" title="' + n + " of " + o + '"><span class="slide-number">' + n + "</span>/" + o + "</a>"
    },
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            centerMode: !1,
            vertical: !1,
            swipe: !0,
            adaptiveHeight: !0,
            dots: !1
        }
    }]
});
  $(".roadmap-slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    focusOnSelect: !0,
    centerMode: !0,
    vertical: !0,
    centerPadding: 0,
    swipe: !1,
    asNavFor: ".roadmap-slider-for",
    arrows: !1,
    dots: !1,
    infinite: !1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            centerMode: !1,
            vertical: !1,
            swipe: !0,
            arrows: !1
        }
    }]
});
});

var showForm = true;
var menu_selector = "#site-nav";
function updateForm(){
    if(showForm){
        $('#header__link').click(function(){
            $('#sib_embed_signup').animate({
                width: "331px",
                opacity: "1"
            },700);
            $(this).hide();
        });
    }
}
function jumpingArrow(){
    $('#header__arrow').mouseenter(function(){
        $(this).find('.header__arrow--img').css('top','-25px');
        $(this).find('.header__arrow--img').animate({
            top: '0'
        },300);
    });
}

function customScrolling(){
    $('#header__arrow').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#about').offset().top
        }, 1000);
    });
}


function videoControllers(){
    $('.about__video-block--btn-play').click(function(){
        if($(this).hasClass('play')){
            $('#video-preview').get(0).play();
            $(this).addClass('stop').removeClass('play');
            $(this).find('img').attr('src','img/stop.svg');
            return;
        }

        if($(this).hasClass('stop')){
            $('#video-preview').get(0).pause();
            $(this).addClass('play').removeClass('stop');
            $(this).find('img').attr('src','img/play.svg');
            return;
        }
    });
}
function windowOnSroll(){
    $(window).scroll(function(){
        // $('.roadmap-slider-nav__item.slick-current:eq(0)').click();
        // $('.roadmap-slider-for__item.slick-current').click();
    if(window.screen.width > 768 || window.innerWidth>768 || window.screen.availWidth>768){
        if($(this).scrollTop() > 1200)
            $('#main-header').css('position','absolute');
        else
            $('#main-header').css('position','fixed');
    }
    });
}

// function preloader(){
//     $(window).on('load', function () {
//             $('.header__left-part,.header__right-part').addClass('init');
//     });
// }

function doScrambleText(element,phrase){ 
  const el = document.querySelector(element);
  const fx = new TextScramble(el);
  fx.setText(phrase);
}
function initScrambleText(){
    $('#nav__link-lang--blog').mouseenter(function(){
        doScrambleText('#nav__link-lang--blog','BLOG')
    });
    $('.nav__logo').mouseenter(function(){
        doScrambleText('#nav__logo--text','MDL')
    });
}
function initSiteNav() {
 
    $(document).on("scroll", onScroll);
 
    $("#site-nav .site-nav__item").click(function(e){
        e.preventDefault();
        $(document).off("scroll");
        $("#site-nav .site-nav__item.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).find('.site-nav__link').attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
 
}
function onScroll(){
    if($(document).scrollTop() > 830){
        $('#site-nav').css('z-index','5000000');
    }
    var scroll_top = $(document).scrollTop();
    $("#site-nav .site-nav__item").each(function(){
        var hash = $(this).find('.site-nav__link').attr("href");
        var target = $(hash);
        if(window.screen.width > 768 || window.innerWidth>768 || window.screen.availWidth>768){
        if ($('#wallet').position().top <= scroll_top && $('#wallet').position().top + $('#wallet').outerHeight() > scroll_top){
            $("#site-nav .site-nav__link").addClass('white');
        } else if($('#about').position().top && $('#about').position().top + $('#solution').outerHeight() > scroll_top){
            $("#site-nav .site-nav__link").removeClass('white');
        } else if($('.section-wrapper-second').position().top <= scroll_top && $('.section-wrapper-second').position().top + $('.section-wrapper-second').outerHeight() > scroll_top){
            $("#site-nav .site-nav__link").removeClass('white');
        } else if($('#roadmap').position().top <= scroll_top && $('#roadmap').position().top + $('#roadmap').outerHeight() > scroll_top){
            $("#site-nav .site-nav__link").removeClass('white');
        } else if($('.section-wrapper-third').position().top <= scroll_top && $('.section-wrapper-third').position().top + $('.section-wrapper-third').outerHeight() > scroll_top){
            $("#site-nav .site-nav__link").removeClass('white');
        } else if($('#team').position().top <= scroll_top && $('#team').position().top + $('#team').outerHeight() > scroll_top){
            $("#site-nav .site-nav__link").addClass('white');
        }
        // if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        //     $("#site-nav .site-nav__item.active").removeClass("active");
        //     $(this).addClass("active");
        // } else {
        //     $(this).removeClass("active");
        // }
        if($('#about').position().top <= scroll_top && $('#about').position().top + $('#about').outerHeight() > scroll_top){
            $("#site-nav .site-nav__item.active").removeClass("active");
            $('#site-nav .site-nav__link[href$="#about"]').parent('.site-nav__item').addClass('active');
        } else if($('#wallet').position().top <= scroll_top && $('#wallet').position().top + $('#wallet').outerHeight() > scroll_top){
            $("#site-nav .site-nav__item.active").removeClass("active");
            $('#site-nav .site-nav__link[href$="#wallet"]').parent('.site-nav__item').addClass('active');
        } else if($('#problem').position().top + $('.section-wrapper-second').position().top <= scroll_top && $('#problem').position().top + $('.section-wrapper-second').position().top + $('#problem').outerHeight() > scroll_top){
            $("#site-nav .site-nav__item.active").removeClass("active");
            $('#site-nav .site-nav__link[href$="#problem"]').parent('.site-nav__item').addClass('active');
        } else if($('#solution').position().top + $('.section-wrapper-second').position().top <= scroll_top && $('#solution').position().top + $('.section-wrapper-second').position().top + $('#solution').outerHeight() > scroll_top){
            $("#site-nav .site-nav__item.active").removeClass("active");
            $('#site-nav .site-nav__link[href$="#solution"]').parent('.site-nav__item').addClass('active');
        } else if($('#instruments').position().top + $('.section-wrapper-second').position().top <= scroll_top && $('#instruments').position().top + $('.section-wrapper-second').position().top + $('#instruments').outerHeight() > scroll_top){
            $("#site-nav .site-nav__item.active").removeClass("active");
            $('#site-nav .site-nav__link[href$="#instruments"]').parent('.site-nav__item').addClass('active');
        } else if($('#roadmap').position().top <= scroll_top && $('#roadmap').position().top + $('#roadmap').outerHeight() > scroll_top){
            $("#site-nav .site-nav__item.active").removeClass("active");
            $('#site-nav .site-nav__link[href$="#roadmap"]').parent('.site-nav__item').addClass('active');
        } else if($('#team').position().top <= scroll_top && $('#team').position().top + $('#team').outerHeight() > scroll_top){
            $("#site-nav .site-nav__item.active").removeClass("active");
            $('#site-nav .site-nav__link[href$="#team"]').parent('.site-nav__item').addClass('active');
        } else if($('#mentors').position().top + $('.section-wrapper-third').position().top <= scroll_top && $('#mentors').position().top + $('.section-wrapper-third').position().top + $('#mentors').outerHeight() > scroll_top){
            $("#site-nav .site-nav__item.active").removeClass("active");
            $('#site-nav .site-nav__link[href$="#mentors"]').parent('.site-nav__item').addClass('active');
        } else if($('#media').position().top + $('.section-wrapper-third').position().top <= scroll_top && $('#media').position().top + $('.section-wrapper-third').position().top + $('#media').outerHeight() > scroll_top){
            $("#site-nav .site-nav__item.active").removeClass("active");
            $('#site-nav .site-nav__link[href$="#media"]').parent('.site-nav__item').addClass('active');
        } 
        else{
            $('#site-nav .site-nav__link').removeClass("active");
        }
    }
    });
}
function mentorsPopup(){
    $('.mentor__item').click(function(){
        $('#mentorsModal .modal-body').html($(this).find('.mentor__item--desc').html());
        $('#mentorsModal .modal--linkin').remove();
        var path = $(this).find('.mentor__item--linkin').attr('href');
        var linked_template = '<a href="'+path+'" class="modal--linkin" ><img src="img/linkedin-logo.svg" alt=""></a>';
        $('#mentorsModal .modal-body').html($(this).find('.mentor__item--desc').html());
        if( path.length > 2){
          $('#mentorsModal .modal-content').append(linked_template);
        } 
    })
}
function teamPopup(){
      $('.team__item').click(function(){
        $('#teamModal .modal--linkin').remove();
        var path = $(this).find('.team__item--link').attr('href');
        var linked_template = '<a href="'+path+'" class="modal--linkin" ><img src="img/linkedin-logo.svg" alt=""></a>';
        $('#teamModal .modal-body').html($(this).find('.team__item--desc').html());
        if( path.length > 2){
          $('#teamModal .modal-content').append(linked_template);
        } 
      });
    
}
function showInstruments(){
  $('#in-vm').click(function(){
      $('.instruments__box').removeClass('hide-on-mobile');
      $(this).hide();
  });
}
function burger(){
  $('.nav__burger').click(function(){
    $(this).toggleClass('click');
    $('#menu').toggleClass('open');
    $('#menu').addClass('opening');
    $('body').toggleClass('menu_open');
    $('.nav__links-lang,.nav__logo,#nav-main').toggleClass('menu-open')
    if(!$('#menu').hasClass('open')){
      setTimeout(function(){
        $('#menu').removeClass('opening');
      },500);
    }
  });
  $('.menu-list__link').click(function(){
    $('.nav__burger').removeClass('click');
    $('#menu').removeClass('open');
    $('#menu').removeClass('opening');
    $('body').removeClass('menu_open');
    $('.nav__links-lang,.nav__logo,#nav-main').removeClass('menu-open')
  })
}

function rpModal(){
  $('.rp-video-link').click(function(e){
        e.preventDefault();
        var path = $(this).attr('data-media');
        var video_template = '<video class="video_in-modal" controls src="'+path+'"></video>'
        $('.modal-body').html(video_template);
    });
    $('.rp-image-link').click(function(e){
        e.preventDefault();
        var path = $(this).attr('data-media');
        var video_template = '<img class="image_in-modal" src="'+path+'">'
        $('#rp-modal .modal-body').html(video_template);
    });

    $("#rp-modal").on('hidden.bs.modal', function () {
      if($('#rp-modal .video_in-modal').length > 0)
        $('#rp-modal .video_in-modal').get(0).pause();
    }); 
}

function get_timer() {
     // 2018 March (js month number starts with 0) 24th 00:01 UTC
     var date_t = new Date(Date.UTC(2018, 02, 24, 00, 01));

     var date = new Date(Date.now());
     var timer = date_t - date;
     if(date_t > date) {

      var day = parseInt(timer/(60*60*1000*24));
      if(day < 10) {
        day = '0' + day;
    }
    day = day.toString();
    var hour = parseInt(timer/(60*60*1000))%24;
    if(hour < 10) {
        hour = '0' + hour;
    }
    hour = hour.toString();
    var min = parseInt(timer/(1000*60))%60;
    if(min < 10) {
       min = '0' + min;
    }
    min = min.toString();
    var sec = parseInt(timer/1000)%60;
    if(sec < 10) {
        sec = '0' + sec;
    }
    sec = sec.toString(); 
    }
    $('#timer_d').html(day);
    $('#timer_h').html(hour);
    $('#timer_m').html(min);
    $('#timer_s').html(sec);
    setTimeout(get_timer,1000);
}


/*---------------------*/
/*---------------------*/
/*---------------------*/
/*----------BUTTON WHITEPAPER ANIMATION-----------*/
if(window.screen.width > 768 || window.innerWidth > 768 || window.screen.availWidth > 768){
const LiquidButton = class LiquidButton {
  constructor(svg) {
    const options = svg.dataset;
    this.id = this.constructor.id || (this.constructor.id = 1);
    this.constructor.id++;
    this.xmlns = 'http://www.w3.org/2000/svg';
    this.tension = options.tension * 1 || 0.4;
    this.width   = options.width   * 1 || 200;
    this.height  = options.height  * 1 ||  50;
    this.margin  = options.margin  ||  40;
    this.hoverFactor = options.hoverFactor || -0.1;
    this.gap     = options.gap     ||   3;
    this.debug   = options.debug   || false;
    this.forceFactor = options.forceFactor || 0.2;
    this.color1 = options.color1 || '#36DFE7';
    this.color2 = options.color2 || '#8F17E1';
    this.color3 = options.color3 || '#BF09E6';
    this.textColor = options.textColor || '#eb3fa1';
    this.text = options.text    || 'Button';
    this.svg = svg;
    this.layers = [{
      points: [],
      viscosity: 0.5,
      mouseForce: 100,
      forceLimit: 2,
  },{
      points: [],
      viscosity: 0.8,
      mouseForce: 0,
      forceLimit: 3,
  }];
  for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      layer.viscosity = options['layer-' + (layerIndex + 1) + 'Viscosity'] * 1 || layer.viscosity;
      layer.mouseForce = options['layer-' + (layerIndex + 1) + 'MouseForce'] * 1 || layer.mouseForce;
      layer.forceLimit = options['layer-' + (layerIndex + 1) + 'ForceLimit'] * 1 || layer.forceLimit;
      layer.path = document.createElementNS(this.xmlns, 'path');
      this.svg.appendChild(layer.path);
  }
  this.wrapperElement = options.wrapperElement || document.body;
  if (!this.svg.parentElement) {
      this.wrapperElement.append(this.svg);
  }

  this.svgText = document.createElementNS(this.xmlns, 'text');
  this.svgText.setAttribute('x', '50%');
  this.svgText.setAttribute('y', '50%');
  this.svgText.setAttribute('dy', ~~(this.height / 8) + 'px');
  this.svgText.setAttribute('font-size', 14);
  this.svgText.style.fontFamily = 'Open Sans';
  this.svgText.style.fontWeight = 700;
  this.svgText.setAttribute('text-anchor', 'middle');
  this.svgText.setAttribute('pointer-events', 'none');
  this.svgText.setAttribute('id', "header__link--text")
  this.svg.appendChild(this.svgText);

  this.svgDefs = document.createElementNS(this.xmlns, 'defs')
  this.svg.appendChild(this.svgDefs);

  this.touches = [];
  this.noise = options.noise || 0;
  document.body.addEventListener('touchstart', this.touchHandler);
  document.body.addEventListener('touchmove', this.touchHandler);
  document.body.addEventListener('touchend', this.clearHandler);
  document.body.addEventListener('touchcancel', this.clearHandler);
  this.svg.addEventListener('mousemove', this.mouseHandler);
  this.svg.addEventListener('mouseout', this.clearHandler);
  this.initOrigins();
  this.animate();
}

get mouseHandler() {
    return (e) => {
      this.touches = [{
        x: e.offsetX,
        y: e.offsetY,
        force: 1,
    }];
};
}

get touchHandler() {
    return (e) => {
      this.touches = [];
      const rect = this.svg.getBoundingClientRect();
      for (let touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {
        const touch = e.changedTouches[touchIndex];
        const x = touch.pageX - rect.left;
        const y = touch.pageY - rect.top;
        if (x > 0 && y > 0 && x < this.svgWidth && y < this.svgHeight) {
          this.touches.push({x, y, force: touch.force || 1});
      }
  }
  e.preventDefault();
};
}

get clearHandler() {
    return (e) => {
      this.touches = [];
  };
}

get raf() {
    return this.__raf || (this.__raf = (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback){ setTimeout(callback, 10)}
      ).bind(window));
}

distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

update() {
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = layer.points;
      for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
        const point = points[pointIndex];
        const dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
        const dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
        const d = Math.sqrt(dx * dx + dy * dy);
        const f = d * this.forceFactor;
        point.vx += f * ((dx / d) || 0);
        point.vy += f * ((dy / d) || 0);
        for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
          const touch = this.touches[touchIndex];
          let mouseForce = layer.mouseForce;
          if (
            touch.x > this.margin &&
            touch.x < this.margin + this.width &&
            touch.y > this.margin &&
            touch.y < this.margin + this.height
            ) {
            mouseForce *= -this.hoverFactor;
    }
    const mx = point.x - touch.x;
    const my = point.y - touch.y;
    const md = Math.sqrt(mx * mx + my * my);
    const mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, (mouseForce * touch.force) / md));
    point.vx += mf * ((mx / md) || 0);
    point.vy += mf * ((my / md) || 0);
}
point.vx *= layer.viscosity;
point.vy *= layer.viscosity;
point.x += point.vx;
point.y += point.vy;
}
for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
    const prev = points[(pointIndex + points.length - 1) % points.length]; 
    const point = points[pointIndex];
    const next = points[(pointIndex + points.length + 1) % points.length];
    const dPrev = this.distance(point, prev);
    const dNext = this.distance(point, next);

    const line = {
      x: next.x - prev.x,
      y: next.y - prev.y,
  };
  const dLine = Math.sqrt(line.x * line.x + line.y * line.y);

  point.cPrev = {
      x: point.x - (line.x / dLine) * dPrev * this.tension,
      y: point.y - (line.y / dLine) * dPrev * this.tension,
  };
  point.cNext = {
      x: point.x + (line.x / dLine) * dNext * this.tension,
      y: point.y + (line.y / dLine) * dNext * this.tension,
  };
}
}
}

animate() {
    this.raf(() => {
      this.update();
      this.draw();
      this.animate();
  });
}

get svgWidth() {
    return this.width + this.margin * 2;
}

get svgHeight() {
    return this.height + this.margin * 2;
}

draw() {
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      if (layerIndex === 1) {
        if (this.touches.length > 0) {
          while (this.svgDefs.firstChild) {
            this.svgDefs.removeChild(this.svgDefs.firstChild);
        }
        for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
            const touch = this.touches[touchIndex];
            const gradient = document.createElementNS(this.xmlns, 'radialGradient');
            gradient.id = 'liquid-gradient-' + this.id + '-' + touchIndex;
            const start = document.createElementNS(this.xmlns, 'stop');
            start.setAttribute('stop-color', this.color3);
            start.setAttribute('offset', '0%');
            const stop = document.createElementNS(this.xmlns, 'stop');
            stop.setAttribute('stop-color', this.color2);
            stop.setAttribute('offset', '100%');
            gradient.appendChild(start);
            gradient.appendChild(stop);
            this.svgDefs.appendChild(gradient);
            gradient.setAttribute('cx', touch.x / this.svgWidth);
            gradient.setAttribute('cy', touch.y / this.svgHeight);
            gradient.setAttribute('r', touch.force);
            layer.path.style.fill = 'url(#' + gradient.id + ')';
        }
    } else {
      layer.path.style.fill = this.color2;
  }
} else {
    layer.path.style.fill = this.color1;
}
const points = layer.points;
const commands = [];
commands.push('M', points[0].x, points[0].y);
for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
    commands.push('C',
      points[(pointIndex + 0) % points.length].cNext.x,
      points[(pointIndex + 0) % points.length].cNext.y,
      points[(pointIndex + 1) % points.length].cPrev.x,
      points[(pointIndex + 1) % points.length].cPrev.y,
      points[(pointIndex + 1) % points.length].x,
      points[(pointIndex + 1) % points.length].y
      );
}
commands.push('Z');
layer.path.setAttribute('d', commands.join(' '));
}
this.svgText.textContent = this.text;
this.svgText.style.fill = this.textColor;
}

createPoint(x, y) {
    return {
      x: x,
      y: y,
      ox: x,
      oy: y,
      vx: 0,
      vy: 0,
  };
}

initOrigins() {
    this.svg.setAttribute('width', this.svgWidth);
    this.svg.setAttribute('height', this.svgHeight);
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = [];
      for (let x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.gap) {
        points.push(this.createPoint(
          x + this.margin,
          this.margin
          ));
    }
    for (let alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
        const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
        points.push(this.createPoint(
          Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2,
          Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
          ));
    }
    for (let x = this.width - ~~(this.height / 2) - 1; x >= ~~(this.height / 2); x -= this.gap) {
        points.push(this.createPoint(
          x + this.margin,
          this.margin + this.height
          ));
    }
    for (let alpha = 0; alpha <= ~~(this.height * 1.25); alpha += this.gap) {
        const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
        points.push(this.createPoint(
          (this.height - Math.sin(angle) * this.height / 2) + this.margin - this.height / 2,
          Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
          ));
    }
    layer.points = points;
}
}
}


const redraw = () => {
  button.initOrigins();
};

const buttons = document.getElementsByClassName('liquid-button');
for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
  const button = buttons[buttonIndex];
  button.liquidButton = new LiquidButton(button);
}
}
//--------------------------
// Validate & submit process
//--------------------------
(function($) {

    var dateFormat;
    if( $("input[name='hdn_new_format']").length )
    {
        dateFormat = sib_dateformat;
    }
    else {
        dateFormat = 'dd/mm/yyyy';
    }
    $('.tooltip').css({left: '101%'});

    // check if inputed sms value is valid
    function isValidSms(smsField, sms) {
        sms = sms.replace(/\b(0(?!\b))+/g, "");

        var tempSms = sms.replace(/( |\(|\)|\.|\-)/g, '');
        if (tempSms.length > 19 || tempSms.length < 6) {
            return false;
        }
        return true;
    }
    // check if inputed date value is valid
    function isValidDate(date) {
        var filter;
        if(dateFormat == 'dd/mm/yyyy')
        {
            filter = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
        }

        if(dateFormat == 'dd-mm-yyyy')
        {
            filter = /^(((0[1-9]|[12]\d|3[01])-(0[13578]|1[02])-((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)-(0[13456789]|1[012])-((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])-02-((19|[2-9]\d)\d{2}))|(29-02-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
        }
        else if(dateFormat == 'mm-dd-yyyy')
        {
            filter = /^(((0[13578]|1[02])-(0[1-9]|[12]\d|3[01])-((19|[2-9]\d)\d{2}))|((0[13456789]|1[012])-(0[1-9]|[12]\d|30)-((19|[2-9]\d)\d{2}))|(02-(0[1-9]|1\d|2[0-8])-((19|[2-9]\d)\d{2}))|(02-29-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
        }

        if (filter.test(date)) {
            return true;
        }
        return false;
    }
    // allow to input digit and + only for sms
    function validateInteger(smsLength, evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );

        // 0-9, +/-, space, brackets
        var regex = /[ +0-9()-]/;
        if( smsLength == 'date' ) {
            regex = /[ 0-9-]/;
            smsLength = 0;
        }
        if( !regex.test(key) || smsLength > 19 ) {
            theEvent.returnValue = false;
            key = theEvent.keyCode;
            // ignore input for del,tab, back, left, right, home and end key
            if(theEvent.preventDefault && key != 9 && key != 8 ) theEvent.preventDefault();
        }
    }

    $('#'+sib_prefix+'_embed_signup .'+sib_prefix+'-container').find('.hidden-btns').remove();
    $('#'+sib_prefix+'_embed_signup .'+sib_prefix+'-container').find('.message_area').remove();

    $('#'+sib_prefix+'_embed_signup #theform').on('submit',function() {
        var theForm = $(this);
        if (theForm.hasClass(sib_prefix+'_processing')) {
            return false;
        }

        var wrapper = theForm.closest('.forms-builder-wrapper');

        wrapper.find('#'+sib_prefix+'_loading_gif_area').width(theForm.width()).height(theForm.height());

        var reqField = theForm.find('#req_hid').val();

        var primaryType = wrapper.find('#primary_type').val() == 'undefined' ? 'email' : wrapper.find('#primary_type').val();
        if(primaryType == 'email') {
            reqField = 'email' + reqField;
        }else{
            reqField = 'SMS' + reqField;
        }
        var required = reqField.split("~");
        var sendinblueFormLang = wrapper.find('#'+sib_prefix+'_embed_signup_lang').val();
        var emptyError = "Please complete this field.";
        var emailError = wrapper.find('#'+sib_prefix+'_embed_invalid_email_message').val();
        var smsError = 'The SMS field must contain between 6 and 19 digits.';
        var dateError = "Invalid date format";

        if (sendinblueFormLang == "fr") {
            emptyError = "Merci de remplir ce champ.";
            smsError = 'Le champ SMS doit contenir entre 6 et 19 chiffres.';
            dateError = "Date de format invalide";
        }
        else if (sendinblueFormLang == "es") {
            emptyError = "Por favor, complete este campo";
            smsError = 'El campo SMS debe contener entre 6 y 19 cifras.';
            dateError = "Formato de fecha no vГЎlido";
        }
        else if (sendinblueFormLang == "pt") {
            emptyError = "Preencha este campo.";
            smsError = 'O campo SMS deve conter entre 6 e 19 dГ­gitos.';
            dateError = "O formato da data Г© invГЎlido";
        }
        else if (sendinblueFormLang == "it") {
            emptyError = "Compilare questo campo.";
            smsError = 'Il campo SMS deve contenere dai 6 ai 19 caratteri.';
            dateError = "Il formato della data non ГЁ valido";
        }
        else if (sendinblueFormLang == "de") {
            emptyError = "Bitte fГјllen Sie dieses Feld aus.";
            smsError = 'Das SMS-Feld muss 6 bis 19 Ziffern enthalten.';
            dateError = "UngГјltiges Datumsformat";
        }

        theForm.find('div.alert').remove();
        theForm.find('.message_area').remove();

        for (i = 0; i < required.length; i++) {

            var input = theForm.find('input[name="'+required[i]+'"]');

            var inputType = input.attr('type');
            if (inputType=='text') {
                if (input.val() == "" || input.val() == emptyError) {
                    input.closest('.row').addClass("needsfilled");
                    input.closest('.row').append('<div class="message_area" style="background-color: #f2dede;border:1px solid #ebccd1; color: #a94442;margin-top: 5px;"><button type="button" class="close">x</button>'+emptyError+'</div>' );
                }
                else {
                    if (required[i] == 'email') {
                        if (!/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(input.val())) {
                            input.closest('.row').addClass("needsfilled");
                            input.closest('.row').append('<div class="message_area" style="background-color: #f2dede;border:1px solid #ebccd1; color: #a94442;margin-top: 5px;"><button type="button" class="close">x</button>'+emailError+'</div>' );
                            input.val('');
                        } else {
                            input.closest('.row').removeClass("needsfilled");
                        }
                    }
                    else if(required[i] == 'SMS'){
                        if($('#sms_prefix').length && $('#sms_prefix').val() == '')
                        {
                            input.closest('.row').addClass("needsfilled");
                            input.closest('.row').append('<div class="alert alert-danger" style="width: ' + alert_width + alert_padding +'"><button type="button" class="close" style="' + button_style +'">x</button>'+emptyError+'</div>' );
                        }
                        else{
                            input.closest('.row').removeClass("needsfilled");
                        }
                    }
                    else {
                        input.closest('.row').removeClass("needsfilled");
                    }
                }
            }
            else if (inputType=='radio'){
                if (input.is(':checked')==false) {
                    input.closest('.row').addClass("needsfilled");
                    input.closest('.row').append('<div class="message_area" style="background-color: #f2dede;border:1px solid #ebccd1; color: #a94442;margin-top: 5px;"><button type="button" class="close">x</button>'+emptyError+'</div>' );
                }
            } else if(required[i] == 'Captcha' && typeof grecaptcha != 'undefined'){
                var captchaResponse = grecaptcha.getResponse();
                if(captchaResponse.length == 0){
                    $(".captcha > div.row").addClass("needsfilled");
                    $(".captcha > div.row").append('<div class="message_area" style="background-color: #f2dede;border:1px solid #ebccd1; color: #a94442;margin-top: 5px;"><button type="button" class="close">x</button>'+emptyError+'</div>' );
                    
                } else {
                    $(".captcha > div.row").removeClass("needsfilled");
                } 
            } else {
                var fields =input.serializeArray();
                if (fields.length == 0) {
                    input.closest('.row').addClass("needsfilled");
                }
                else {
                    input.closest('.row').removeClass("needsfilled");
                }
            }
        }
        $(".row").each(function(){
            var spanElement = $(this).find('span');
            var ele = $(this).find("input");
            var alertWidth = ele.width() + 10;
            var smsPrefix = ($(this).find('#sms_prefix').length > 0 ) ? $(this).find('#sms_prefix').val() : '';
            if (ele.attr('name') == 'SMS') {
                if (!isValidSms(ele, smsPrefix + ele.val()) && ele.val() != "") {
                    ele.closest('.row').addClass("needsfilled");
                    ele.closest('.row').append('<div class="message_area" style="background-color: #f2dede;border:1px solid #ebccd1; color: #a94442;margin-top: 5px;width:' + alertWidth + ';"><button type="button" class="close">x</button>'+ smsError +'</div>' );
                    ele.val('');
                }
            }

            if(spanElement.text() == dateFormat){
                if (!isValidDate(ele.val()) && ele.val() != ""){
                    ele.closest('.row').addClass("needsfilled");
                    ele.closest('.row').append('<div class="message_area" style="background-color: #f2dede;border:1px solid #ebccd1; color: #a94442;margin-top: 5px;width:' + alertWidth + ';"><button type="button" class="close">x</button>'+ dateError +'</div>' );
                    ele.val('');
                }
            }
        });
        $('div.message_area button.close').on('click', function() {
            $(this).parent().remove();
        });

        if (theForm.find('input').closest('.row').hasClass("needsfilled") || $(".captcha > div.row").hasClass("needsfilled")) {
            return false;
        }else{

            //errornotice.closest('.row').hide();
            // submit ajax process --> coding here
            var requestUrl = theForm.attr('action');
            var postData = theForm.serialize();
            theForm.addClass(sib_prefix+'_processing');
            theForm.parent().find('#'+sib_prefix+'_loading_gif_area').show();
            theForm.css('opacity', '0.5');
            $.ajax({
                url:requestUrl,
                data : postData,
                dataType:'json',
                type:'POST',
                beforeSend:function(){ },
                success:function(data){
                    var theForm = $('.'+sib_prefix+'_processing');

                    theForm.parent().find('#'+sib_prefix+'_loading_gif_area').hide();
                    theForm.css('opacity', '1');
                    if (data.result != undefined) {
                        if ((data.result.result == 'success') || (data.result.result == 'emailExist') || (data.result.result == 'OK') || (data.result.result == 'OK_UPDATE')) {
                            backColor = '#dff0d8';
                            borderColor = '#d6e9c6';
                            color = '#ffffff';
                            setTimeout(function(){
                              $('.message_area').remove();
                              $('#sib_embed_signup').animate({
                                  width: "150px",
                                  opacity: "0"
                              },700);
                             $('#header__link').show();
                            }, 3000);
                        }
                        else {
                            backColor = '#f2dede';
                            borderColor = '#ebccd1';
                            color = '#a94442';
                        }

                        var messageHtml = '<div class="message_area" style="background-color: ' + backColor + ';border:1px solid ' + borderColor + '; color: ' + color + '"><button type="button" class="close">x</button>';
                        if (data.result.result == 'success' || data.result.result == 'OK') {
                            messageHtml += data.result.succcess_msg;
                            if (data.result.smsExist != ''){
                                var smsMSG = '';
                                var smsNumber = data.result.smsExist;
                                smsMSG = data.result.smsExist_msg.split('[number]');

                                messageHtml += '. '+smsMSG[0]+smsNumber+smsMSG[1];
                            }
                            theForm.find("div.email-group input[type='text']").val('');
                            theForm.find("div.sms-group input[type='text']").val('');
                            if (data.result.url_redirect != '') {
                                location.href = data.result.url_redirect;
                            }
                        }
                        else if(data.result.result == 'sms_emailExist') {
                            var emailMSG = '';
                            var emailAddress = data.result.emailExist;
                            emailMSG = data.result.emailExist_msg.split('[address]');

                            messageHtml += '. '+emailMSG[0]+emailAddress+emailMSG[1];
                        }
                        else if(data.result.result == 'invalid_request' || data.result.result == 'invalidEmail') {
                            messageHtml += data.result.invalid_err_msg;
                        }
                        else if(data.result.result == 'invalidSms') {
                            messageHtml += data.result.invalidSms_msg;
                        }
                        else if(data.result.result == 'emailExist' || data.result.result == 'OK_UPDATE') {
                            messageHtml += data.result.exist_err_msg;
                            if (data.result.smsExist != ''){
                                var smsMSG = '';
                                var smsNumber = data.result.smsExist;
                                smsMSG = data.result.smsExist_msg.split('[number]');

                                messageHtml += '. '+smsMSG[0]+smsNumber+smsMSG[1];
                            }
                        }
                        else if(data.result.result == 'dateFormat' || data.result.result == 'reqMiss' ) {
                            messageHtml += data.result.general_err_msg;
                        } else if(data.result.result == 'invalidCaptcha') {
                            messageHtml += data.result.general_err_msg;
                        } 
                        messageHtml += '</div>';
                        theForm.find('.'+sib_prefix+'-container').prepend(messageHtml);
                        $('div.message_area button.close').on('click', function() {
                            $(this).parent().remove();
                        });
                        theForm.removeClass(sib_prefix+'_processing');
                    }
                }
            });
}
return false;
});

$('#'+sib_prefix+'_embed_signup :input').on('click',function() {
    if ($(this).closest('.row').hasClass("needsfilled") ) {
        $(this).closest('.row').find('div.message_area').remove();
        $(this).val("");
        if($(this).attr('type') == 'radio')
            $(this).val("1");
        $(this).closest('.row').removeClass("needsfilled");
    }
});

$('#'+sib_prefix+'_embed_signup input[type=radio]').on('click',function(){
    if ($(this).closest('.row').hasClass("needsfilled") ) {
        $(this).attr('checked', true);
        $(this).closest('.row').find('div.message_area').remove();
        $(this).closest('.row').removeClass("needsfilled");
    }
});

    // allow to input 0-9 and - only for date field
    $("input").on('keypress', function(event) {
        if($(this).closest(".row").find("." + sib_prefix + "_dateformat").length > 0){
            validateInteger('date', event);
        }
    });

    $("#SMS").on('keypress', function (event){
        var length = $(this).val().length;
        validateInteger(length, event);
    });

    $("input[type=number]").on('keypress', function(event) {
        var theEvent = event || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );

        // 0-9, +/-, space, brackets
        var regex = /[0-9]/;

        if( !regex.test(key)) {
            theEvent.returnValue = false;
            key = theEvent.keyCode;
            // ignore input for del,tab, back, left, right, home and end key
            if(theEvent.preventDefault && key != 9 && key != 8 ) theEvent.preventDefault();
            var eleRow = $(this).closest('.row');
            var frmLang = eleRow.closest('.forms-builder-wrapper').find('#'+sib_prefix+'_embed_signup_lang').val();
            var numberError = "Please enter a number.";
            if (frmLang == "fr") {
                numberError = "Veuillez entrer un nombre.";
            }
            else if (frmLang == "es") {
                numberError = "Please enter a number.";
            }
            else if (frmLang == "pt") {
                numberError = "Please enter a number.";
            }
            else if (frmLang == "it") {
                numberError = "Please enter a number.";
            }
            else if (frmLang == "de") {
                numberError = "Please enter a number.";
            }
            if( !eleRow.find('.message_area').length)
            {
                eleRow.append('<div class="message_area" style="background-color: #f2dede;border:1px solid #ebccd1; color: #a94442"><button type="button" class="close">x</button>' + numberError + '</div>' );
            }
        }
    });

    $(document).on('click', '.message_area .close', function() {
        $(this).closest('.message_area').remove();
    });

    $(document).on('click', '.sib-dropdown-toggle.country-flg', function() {
        $(".country-block ul").toggle();
    });

    $(document).on( 'click', '.country-block ul li a' ,function() {
        var code = $(this).data('code');
        var cCode = $(this).data('c_code');
        $('.sib-dropdown-toggle .cflags').attr('class','cflags');
        $('.sib-dropdown-toggle .cflags').addClass(cCode);

        // update country prefix
        $('#sms_prefix').val('+' + code);

        $(".country-block ul").hide();
    });

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("country-block"))
            $(".country-block ul").hide();
    });

    if( $('.sms_field .country-block').length )
    {
        var cflagsClasses = $('.sib-dropdown-toggle .cflags').attr('class').split(' ');
        if(cflagsClasses[1] && cflagsClasses[1] != '')
        {
            var countryCode = $('.sib-dropdown-menu').find('[data-c_code="' + cflagsClasses[1] + '"]').data('code');
            // update country prefix
            $('#sms_prefix').val('+' + countryCode);
        }
        else {
            $('.sib-dropdown-toggle .cflags').addClass('FR');
            var countryCode = $('.sib-dropdown-menu').find('[data-c_code="FR"]').data('code');
            // update country prefix
            $('#sms_prefix').val('+' + countryCode);
        }
    }
    // set last submit to avoid refresh post
    $("#hdn_email_txt").val(new Date().getTime());

}(jQuery));



// вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”
// Hover effect on button 'blog' and on logo mdl
// вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”вЂ”

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!BMDLO_/.-'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 10)
      const end = start + Math.floor(Math.random() * 10)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}
jQuery(document).ready(function($){
  var mainHeader = $('.cd-auto-hide-header'),
    secondaryNavigation = $('.cd-secondary-nav'),
    //this applies only if secondary nav is below intro section
    belowNavHeroContent = $('.sub-nav-hero'),
    headerHeight = mainHeader.height();
  
  //set scrolling variables
  var scrolling = false,
    previousTop = 0,
    currentTop = 0,
    scrollDelta = 10,
    scrollOffset = 150;

  $(window).on('scroll', function(){
    if($(window).scrollTop() > 800)
      $('#nav-main').addClass('sticky');
    else
      $('#nav-main').removeClass('sticky');
    if( !scrolling ) {
      scrolling = true;
      (!window.requestAnimationFrame)
        ? setTimeout(autoHideHeader, 250)
        : requestAnimationFrame(autoHideHeader);
    }
  });

  $(window).on('resize', function(){
    headerHeight = mainHeader.height();
  });

  function autoHideHeader() {
    var currentTop = $(window).scrollTop();

    ( belowNavHeroContent.length > 0 ) 
      ? checkStickyNavigation(currentTop) // secondary navigation below intro
      : checkSimpleNavigation(currentTop);

      previousTop = currentTop;
    scrolling = false;
  }

  function checkSimpleNavigation(currentTop) {
    //there's no secondary nav or secondary nav is below primary nav
      if (previousTop - currentTop > scrollDelta) {
        //if scrolling up...
        mainHeader.removeClass('is-hidden');
      } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
        //if scrolling down...
        mainHeader.addClass('is-hidden');
      }
  }

  function checkStickyNavigation(currentTop) {
    //secondary nav below intro section - sticky secondary nav
    var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
    
    if (previousTop >= currentTop ) {
        //if scrolling up... 
        if( currentTop < secondaryNavOffsetTop ) {
          //secondary nav is not fixed
          mainHeader.removeClass('is-hidden');
          secondaryNavigation.removeClass('fixed slide-up');
          belowNavHeroContent.removeClass('secondary-nav-fixed');
        } else if( previousTop - currentTop > scrollDelta ) {
          //secondary nav is fixed
          mainHeader.removeClass('is-hidden');
          secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
          belowNavHeroContent.addClass('secondary-nav-fixed');
        }
        
      } else {
        //if scrolling down...  
        if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
          //hide primary nav
          mainHeader.addClass('is-hidden');
          secondaryNavigation.addClass('fixed slide-up');
          belowNavHeroContent.addClass('secondary-nav-fixed');
        } else if( currentTop > secondaryNavOffsetTop ) {
          //once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
          mainHeader.removeClass('is-hidden');
          secondaryNavigation.addClass('fixed').removeClass('slide-up');
          belowNavHeroContent.addClass('secondary-nav-fixed');
        }

      }
  }
});
