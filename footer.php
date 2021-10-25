<footer class="mr-footer">
    <div class="mr-top-footer">
        <div class="container" style="<?php if($_LAN == 'ar') {echo 'text-align: right;';} ?>">
            <div class="row">
                <div class="col-lg-5">
                    <div class="mr-footer-links">
                        <h4>প্রয়োজনীয় ওয়েবসাইট সমূহ</h4>
                        <ul style="list-style:inside;" >
                            <li><a data-copy="http://wifaqbd.org" href="http://wifaqbd.org/" target="_blank">বেফাকুল মাদারিসিল আরাবিয়া বাংলাদেশ</a></li>
                            <li><a data-copy="https://wifaqresult.com/medha-talika" href="https://wifaqresult.com/medha-talika" target="_blank">বেফাকুল মারিসিল আরবিয়া বাংলাদেশ (পরীক্ষার ফলাফল) </a></li>
                            <li><a data-copy="https://alhaiatululya.com" href="https://alhaiatululya.com/" target="_blank">আল-হাইআতুল উলয়া লিল-জামিয়াতিল কওমিয়া বাংলাদেশ</a></li>
                            <li><a data-copy="http://www.darululoom-deoband.com/english" href="http://www.darululoom-deoband.com/english/" target="_blank">দারুল উলূম দেওবন্দ</a></li>
                            <li><a data-copy="http://darululoomkarachi.edu.pk" href="http://darululoomkarachi.edu.pk/" target="_blank"> জামিয়া দারুল উলূম করাচী</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="mr-footer-links">
                        <h4>মাদ্রাসায় যোগাযোগে মাধ্যমসমূহ</h4>
                        <ul style="list-style:inside;">
                            <li><a data-copy="01711956816">০১৭১১ - ৯৫৬৮১৬ (পুরুষদের যোগযোগের জন্য)</a></li>
                            <li><a data-copy="01674991726">০১৬৭৪ - ৯৯১৭২৬ (পুরুষদের যোগযোগের জন্য)</a></li>
                            <li><a data-copy="jamiyamilliya.m@gmail.com">jamiyamilliya.m@gmail.com (মাদ্রাসার ইমেইল)</a></li>
                            <li><a data-copy="01910910752">০১৯১০ - ৯১০৭৫২ মহিলাদের যোগাযোগের জন্য (বিকাশ)</a></li>
                            <li><a data-copy="ঢাকা, মিরপুর, পল্লবী, সেতারার গলি, রোড-২, ব্লক-এ, বাসা নং-১৩">ঢাকা, মিরপুর, পল্লবী, সেতারার গলি, রোড-২, ব্লক-এ, বাসা নং-১৩</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="mr-footer-links">
                        <h4>সামাজিক লিংক সমূহ</h4>
                        <ul>
                            <li><a data-copy="https://www.youtube.com" href="https://www.youtube.com/" target="_blank" class="rm-facebook-onlyicon"><i class='bx bxl-youtube'></i>ইউটিউব চ্যানেল</a></li>
                            <li><a data-copy="https://www.facebook.com/jamiya.milliya" href="https://www.facebook.com/jamiya.milliya" target="_blank" class="rm-google-facebook"><i class="bx bxl-google"></i>ফেইচবুক প্রোফাইল</a></li>
                            <li><a data-copy="" href="?" target="_blank" class="rm-twitter-onlyicon"><i class='bx bxl-telegram'></i>টেলিগ্রাম প্রোফাইল</a></li>
                            <li><a data-copy="" href="?" target="_blank" class="rm-instagram-onlyicon"><i class='bx bx-chat'></i>ইমু প্রোফাইল</a></li>
                            <li><a data-copy="" href="?" target="_blank" class="rm-instagram-onlyicon"><i class='bx bxl-whatsapp'></i>হটস-অ্যাপ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mr-bottom-footer">
        <div class="container">
            <div class="row">
                <div class="mr-bottom-footer-content">
                    <p> &copy; সর্বশেষ আপডেট : ২৫ আগষ্ট ২০২১ | <a data-copy="engrmamun66@gmail.com" data-copyright="yes">Contact with Developed</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>


<!-- Messenger Chat Plugin Code -->
<div id="fb-root"></div>

<!-- Your Chat Plugin code -->
<div id="fb-customer-chat" class="fb-customerchat">
</div>

<script>
    var chatbox = document.getElementById('fb-customer-chat');
    // chatbox.setAttribute("page_id", "110195231404667"); // মামুন
    chatbox.setAttribute("page_id", "101618285446481"); // মাদ্রাসা
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function() {
        FB.init({
            xfbml: true,
            version: 'v11.0'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/bn_IN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>