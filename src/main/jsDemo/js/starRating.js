let log = console.log.bind(console)
export default function starRating () {
    var rating = (function () {
        var lightOn = function ($item, num) {
            $item.each(function(index) {
                if (index < num) {
                    $(this).css('background-position', '-1px -40px')
                } else {
                    $(this).css('background-position', '0 0')
                }
            })
        }
        var init = function (el, num) {
            var $rating = $(el)
            var $item = $rating.find('.rating-item')
            

            lightOn($item, num)

            $rating.on('mouseover', '.rating-item', function () {
                lightOn($item, $(this).index() + 1)
            }).on('click', '.rating-item', function () {
                num = $(this).index() + 1
            }).on('mouseout', function () {
                lightOn($item, num)
            })
        }
        $.fn.extend({
            rating: function (num) {
                return this.each(function() {
                    init(this, num)
                })
            }
        })

        // return {
        //     init: init
        // }
    })()
    $('#rating').rating(2)
    $('#rating2').rating(4)
}