    $(document).ready(function(){
                $('#recipeCarousel').carousel({
                    interval: 10000
                    })
                    $('.carousel .carousel-item').each(function(){
                    var minPerSlide = 3;
                    var next = $(this).next();
                    if (!next.length) {
                    next = $(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));
                    for (var i=0;i<minPerSlide;i++) {
                        next=next.next();
                        if (!next.length) {
                            next = $(this).siblings(':first');
                            }
                        next.children(':first-child').clone().appendTo($(this));
                        }
                    });
                })

                $("a").click(function(){
                    $("li").addClass("active");
                });

                var nombrePage = $(".box").length;

                showPage = function(pagination) {
                if (pagination < 0 || pagination >= nombrePage) return;
                
                    $(".box").hide().eq(pagination).show();
                    $("#pagin li").removeClass("active").eq(pagination).addClass("active");
                }
                
                // Go to Left
                $(".prev").click(function() {
                    showPage($("#pagin ul .active").index() - 1);
                });
                
                // Go to Right
                $(".next").click(function() {
                    showPage($("#pagin ul .active").index() + 1);
                });
                
                $("#pagin ul a").click(function(e) {
                    e.preventDefault();
                    showPage($(this).parent().index());
                });
                
                showPage(0)