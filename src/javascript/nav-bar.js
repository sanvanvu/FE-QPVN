function pushNavBar(){
    document.write('\
        <nav class="navbar navbar-default "  id="aboutsection" >\
            \<div class="container-fluid">\
             \   <!-- Brand and toggle get grouped for better mobile display -->\
               \ <div class="navbar-header">\
                   \ <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\
                    \    <span class="sr-only">Toggle navigation</span>\
                      \  <span class="icon-bar"></span>\
                      \  <span class="icon-bar"></span>\
                       \ <span class="icon-bar"></span>\
                 \   </button>\
                 \   <a class="navbar-brand" href="#">Home</a>\
              \  </div>\
            \    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
                 \   <ul class="nav navbar-nav">\
                       \ <li class="active"><a href="#">New <span class="sr-only">(current)</span></a>\
                   \     </li>\
                      \  <li><a href="#">Link</a></li>\
                     \   <li class="dropdown">\
                           \ <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"   aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\
                         \   <ul class="dropdown-menu">\
                                \<li><a href="#">Action</a></li>\
                               \ <li><a href="#">Another action</a></li>\
                               \ <li><a href="#">Something else here</a></li>\
                               \ <li role="separator" class="divider"></li>\
                               \ <li><a href="#">Separated link</a></li>\
                               \ <li role="separator" class="divider"></li>\
                               \ <li><a href="#">One more separated link</a></li>\
                         \   </ul>\
                      \  </li>\
                  \  </ul>\
                  \  <ul class="nav navbar-nav navbar-right">\
                        \<li><a href="#">Logout</a></li>\
                       \ <li class="dropdown">\
                         \   <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"\
                            \   aria-haspopup="true" aria-expanded="false">Name <span class="caret"></span></a>\
                            \<ul class="dropdown-menu">\
                              \  <li><a href="#">Action</a></li>\
                               \ <li><a href="#">Another action</a></li>\
                                \<li><a href="#">Something else here</a></li>\
                                \<li role="separator" class="divider"></li>\
                                \<li><a href="#">Separated link</a></li>\
             \               </ul>\
            \            </li>\
           \         </ul>\
          \      </div>\
         \       <!-- /.navbar-collapse -->\
        \    </div>\
       \     <!-- /.container-fluid -->\
      \  </nav>'
    );

}
window.onscroll = changePos;
function changePos() {
    var about = document.getElementById("banner__id");
     var sticky = about.offsetHeight;
    if (window.pageYOffset >= sticky) {
        aboutsection.classList.add("navbar-fixed-top");

    } else {
        aboutsection.classList.remove("navbar-fixed-top");
    }
}

function pushFooter(){
    document.write(
       '<div class="bottom-right">\n' +
        '<h3>DOMAIN.COM</h3>\n' +
        '        <div class="text-right  modal-footer  " >\n' +
        '\t            <a href="https://twitter.com/sanvv"><i id="social-tw" class="twitter-square  social"></i></img>\n' +
        '\t            <a href="https://facebook.com/vuvansan1996"><i id="social-gp" class="facebook-square   social"></i></img>\n' +
        '</div>\n' +

        '</div>'

    )
}