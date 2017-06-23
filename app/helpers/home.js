var homeHelper = {
    homeRender: function(message, user, avartar, images, news, saleoff, res) {
        console.log('Images: ');
        console.log(images);
        res.render('home', {
            layout: 'client_layout',
            title: 'Trang chủ',
            active1: 'active',
            message: message,
            user: user,
            avartar: avartar,
            images: images,
            carousel: homeHelper.carousel,
            css: 'home.css',
            news: news,
            newsHelper: homeHelper.news,
            saleoff: saleoff,
            saleoffHelper: homeHelper.saleoff,
            newsLink: homeHelper.newsLink,
            saleoffLink: homeHelper.saleoffLink
        });
    },
    carousel: function(images) {
        var i = 0;

        var out = "<div class=\"item active\"><img src=\"" + images[i].linkha + "\" alt=\"Hình ảnh\"><div class=\"carousel-caption\"><h3>" + images[i].diadiem + "</h3><p>" + images[i].mota + "</p></div></div>";

        for (i = 1; i < images.length; i++) {
            out = out + "<div class=\"item\"><img src=\"" + images[i].linkha + "\" alt=\"Hình ảnh\"><div class=\"carousel-caption\"><h3>" + images[i].diadiem + "</h3><p>" + images[i].mota + "</p></div></div>";
        };

        return out;
    },
    news: function(news) {
        var i = 0;

        var out = "<li class=\"one_third first\"><article><a href=\"#\"><img src=\"" + news[i].anhdaidientintuc + "\" alt=\"\"></a><div class=\"txtwrap\"><h6 class=\"heading\">" + news[i].tieudetintuc + "</h6><p>" + news[i].noidungtomtat + "</p><footer></footer></div></article></li>";

        for (i = 1; i < 3; i++) {
            out = out + "<li class=\"one_third\"><article><a href=\"#\"><img src=\"" + news[i].anhdaidientintuc + "\" alt=\"\"></a><div class=\"txtwrap\"><h6 class=\"heading\">" + news[i].tieudetintuc + "</h6><p>" + news[i].noidungtomtat + "</p><footer></footer></div></article></li>";
        };

        out = out + "<li class=\"one_third first\"><article><a href=\"#\"><img src=\"" + news[i].anhdaidientintuc + "\" alt=\"\"></a><div class=\"txtwrap\"><h6 class=\"heading\">" + news[i].tieudetintuc + "</h6><p>" + news[i].noidungtomtat + "</p><footer></footer></div></article></li>";

        for (i = 4; i < 6; i++) {
            out = out + "<li class=\"one_third\"><article><a href=\"#\"><img src=\"" + news[i].anhdaidientintuc + "\" alt=\"\"></a><div class=\"txtwrap\"><h6 class=\"heading\">" + news[i].tieudetintuc + "</h6><p>" + news[i].noidungtomtat + "</p><footer></footer></div></article></li>";
        };

        return out;
    },
    saleoff: function(saleoff) {
        var i = 0;

        var out = "<li class=\"one_quarter first\"><article><a href=\"#\"><img class=\"btmspace-30\" src=\"" + saleoff[i].anhkhuyenmai + "\" alt=\"\"></a><h6 class=\"heading\">" + saleoff[i].tenkhuyenmai + "</h6><p>" + saleoff[i].motakhuyenmai + "</p><p class=\"nospace\"></p></article></li>";

        for (i = 1; i < 4; i++) {
            out = out + "<li class=\"one_quarter\"><article><a href=\"#\"><img class=\"btmspace-30\" src=\"" + saleoff[i].anhkhuyenmai + "\" alt=\"\"></a><h6 class=\"heading\">" + saleoff[i].tenkhuyenmai + "</h6><p>" + saleoff[i].motakhuyenmai + "</p><p class=\"nospace\"></p></article></li>";
        };

        var out = out + "<li class=\"one_quarter first\"><article><a href=\"#\"><img class=\"btmspace-30\" src=\"" + saleoff[i].anhkhuyenmai + "\" alt=\"\"></a><h6 class=\"heading\">" + saleoff[i].tenkhuyenmai + "</h6><p>" + saleoff[i].motakhuyenmai + "</p><p class=\"nospace\"></p></article></li>";

        for (i = 5; i < 8; i++) {
            out = out + "<li class=\"one_quarter\"><article><a href=\"#\"><img class=\"btmspace-30\" src=\"" + saleoff[i].anhkhuyenmai + "\" alt=\"\"></a><h6 class=\"heading\">" + saleoff[i].tenkhuyenmai + "</h6><p>" + saleoff[i].motakhuyenmai + "</p><p class=\"nospace\"></p></article></li>";
        };

        return out;
    },
    newsLink: function(news) {
        var i = 0;
        var j = news.length;

        if (j > 5) {
          j = 5;
        }

        var out = "";

        for (i = 0; i < j; i++) {
            out = out + "<li><a href=\"#\">" + news[i].tieudetintuc + "</a></li>";
        };

        return out;
    },
    saleoffLink: function(saleoff) {
      var i = 0;
      var j = saleoff.length;

      if (j > 5) {
        j = 5;
      }

      var out = "";

        for (i = 0; i < j; i++) {
            out = out + "<li><a href=\"#\">" + saleoff[i].tenkhuyenmai + "</a></li>";
        };

        return out;
    },
}

module.exports = homeHelper;
